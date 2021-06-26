const callsite = require('callsite');
const path = require('path');
const fs = require('fs');


let inferVersion = false;



function findPackageJson(folder) {
    while (
        !fs.existsSync(path.join(folder, 'package.json'))
        && path.dirname(folder) !== folder) {

            folder = path.dirname(folder);
        }
   
    const filePath = path.join(folder, 'package.json');
    if (fs.existsSync(filePath)) {
        return filePath;
    }

    throw new Error('no package.json found. Searched the following folder and all parents: ', folder);
}

function readVersionMap(packagePath) {
    const json = require(packagePath);
    const versions = {
        ...json['dependencies']
    }; 
    return versions;
}

function lookupVersion(key, versions) {

    const parts = key.split('/');
    if (parts.length > 2) {
        key = parts[0] + '/' + parts[1];
    }

    if (!versions[key]) {
        throw new Error(`Shared Dependency ${key} has requiredVersion:'auto'. However, this dependency is not found in your package.json`);
    }
    return versions[key];
}

function _findSecondaries(libPath, excludes, acc) {

    const files = fs.readdirSync(libPath);

    const dirs = files
        .map(f => path.join(libPath, f))
        .filter(f => fs.lstatSync(f).isDirectory() && f !== 'node_modules');

    const secondaries = dirs.filter(d => fs.existsSync(path.join(d, 'package.json')));
    for(let s of secondaries) {
        const secondaryLibName = s.replace(/\\/g, '/').replace(/^.*node_modules[/]/, '');
        if (excludes.includes(secondaryLibName)) {
            continue;
        }
        acc.push(secondaryLibName);
        _findSecondaries(s, excludes, acc);
    }

}

function findSecondaries(libPath, excludes) {
    const acc = [];
    _findSecondaries(libPath, excludes, acc);
    return acc;
}
 
function getSecondaries(includeSecondaries, packagePath, key) {
    let exclude = [];

    if (Array.isArray(includeSecondaries.skip)) {
        exclude = includeSecondaries.skip;
    }
    else if (typeof includeSecondaries.skip === 'string') {
        exclude = [includeSecondaries.skip];
    }

    const libPath = path.join(path.dirname(packagePath), 'node_modules', key);
   
    const secondaries = findSecondaries(libPath, exclude);
    return secondaries;
}

function addSecondaries(secondaries, result, shareObject) {
    for (const s of secondaries) {
        result[s] = shareObject;
    }
}

module.exports = {

    shareAll: function(config = {}, skip = [], packageJsonPath = '') {
        
        if (!packageJsonPath) {
            const stack = callsite();
            packageJsonPath = path.dirname(stack[1].getFileName());
        }

        const packagePath = findPackageJson(packageJsonPath);

        const versions = readVersionMap(packagePath);
        const share = {};

        for(const key in versions) {

            if (skip.includes(key)) {
                continue;
            }

            share[key] = {...config};
        }

        return module.exports.share(share, packageJsonPath);

    },

    setInferVersion: function(infer) {
        inferVersion = infer;
    },  

    share: function(shareObjects, packageJsonPath = '') {

        if (!packageJsonPath) {
            const stack = callsite();
            packageJsonPath = path.dirname(stack[1].getFileName());
        }

        const packagePath = findPackageJson(packageJsonPath);

        const versions = readVersionMap(packagePath);
        let result = {};
        let includeSecondaries;

        for(const key in shareObjects) {
            includeSecondaries = false;
            let shareObject = shareObjects[key];

            if (shareObject.requiredVersion === 'auto' || (inferVersion && typeof shareObject.requiredVersion === 'undefined' )) {
                shareObject.requiredVersion = lookupVersion(key, versions);
            }

            if (shareObject.includeSecondaries) {
                includeSecondaries = shareObject.includeSecondaries;
                delete shareObject.includeSecondaries;
            }

            result[key] = shareObject;

            if (includeSecondaries) {
                const secondaries = getSecondaries(includeSecondaries, packagePath, key);
                addSecondaries(secondaries, result, shareObject);
            }

        }

        return result;
       
    }
} 

// module.exports.share();

// const acc = [];
// _findSecondaries(
//     'C:/Users/Manfred/Documents/projekte/mf-plugin/example/node_modules/@angular/common', 
//     ['@angular/common/locales'], 
//     acc);

// console.log('result', acc);

// const r = module.exports.share({ '@angular/common': { requiredVersion: 'auto', includeSecondaries: true} })
// console.log('R', r);

// const r = module.exports.shareAll({requiredVersion: 'auto', includeSecondaries: true})
// console.log('R', r);




const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const share = require('./utils/share-utils').share;
const shareAll = require('./utils/share-utils').shareAll;

const setInferVersion = require('./utils/share-utils').setInferVersion;

// shareUtils.share();

setInferVersion(true);

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['auth-lib']
);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },    
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        
      // For hosts (please adjust)
      remotes: {
          // "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",
      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true  },
        "@angular/common": { singleton: true, strictVersion: true  },
        "@angular/router": { singleton: true, strictVersion: true  },
        "@angular/common/http": { singleton: true, strictVersion: true }, 

        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        ...sharedMappings.getDescriptors()
      })

    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};

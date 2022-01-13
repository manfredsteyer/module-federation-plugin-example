const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['auth-lib']
);

const appPath = './projects/shell';

module.exports = {
  entry: {
    main: {
      import: `${appPath}/src/main.ts`
    },
    polyfills: {
      import: `${appPath}/src/polyfills.ts`,
      dependOn: 'main'
    },
    styles: {
      import: `${appPath}/src/styles.css`,
      dependOn: 'main'
    }
  },
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    // scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },    
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },   
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
        
      // For hosts (please adjust)
      remotes: {
          // "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",
      },

      shared: share({
        "@angular/core": { 
          singleton: true, 
          strictVersion: true, 
          requiredVersion: 'auto',
          eager: true,
        },
        "@angular/common": { 
          singleton: true, 
          strictVersion: true, 
          requiredVersion: 'auto',
          eager: true,
        },
        "@angular/router": { 
          singleton: true, 
          strictVersion: true, 
          requiredVersion: 'auto',
          eager: true,
        },
        "@angular/common/http": { 
          singleton: true, 
          strictVersion: true, 
          requiredVersion: 'auto',
          eager: true
        }, 

        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        ...sharedMappings.getDescriptors()
      })

    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;


const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto",
    // libraryTarget: "commonjs2",
    // chunkLoading: "async-http-node",

  },
  // target: 'async-node',

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
      
        // For remotes (please adjust)
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/mfe1/src/app/flights/flights.module.ts',
        },        
        // library: {type: "commonjs2"},

        // For hosts (please adjust)
        // remotes: {
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",

        // },

        shared: ({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};

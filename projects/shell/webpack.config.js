const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  // optimization: {minimize: false},
  mode: 'development',
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    // libraryTarget: "commonjs2",
    // libraryTarget: "commonjs-module",
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
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/shell/src/app/app.component.ts',
        // },        
        // remoteType: 'commonjs2',
        // library: { type: "commonjs-module" },
        // For hosts (please adjust)
        // remotes: {
        //     remoteType: 'commonjs2',
        //     "mfe1": path.resolve(
        //       __dirname,
        //       '../../dist/mfe1/server/remoteEntry.js'
        //     )
        //     //"mfe1":"mfe1@http://localhost:3000/remoteEntry.js"
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

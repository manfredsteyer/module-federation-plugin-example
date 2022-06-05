// Import share instead of shareAll:
const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // Check this line. Is port 4201 configured?
    // "mfe1": "http://localhost:4201/remoteEntry.js",    
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },                     
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),

  // Explicitly share mono-repo libs:
  sharedMappings: ['auth-lib'],

});

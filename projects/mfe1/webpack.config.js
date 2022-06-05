// Import share instead of shareAll:
const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    // Update this whole line (both, left and right part):
    './Module': './projects/mfe1/src/app/flights/flights.module.ts'
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

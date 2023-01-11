const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

console.log('shareAll',
  shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
);

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
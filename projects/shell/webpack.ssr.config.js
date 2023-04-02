const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: 'commonjs-module' },
  isServer: true, // or false
  filename: 'remoteEntry.ssr.js',
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', eager:true }),
  },

});

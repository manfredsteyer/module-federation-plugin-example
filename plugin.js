var merge = require('webpack-merge');
var webpack = require('webpack');

exports.default = {
    config: function(cfg) {
      console.log('cfg', cfg);
      return cfg;
    }
}

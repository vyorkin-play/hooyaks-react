'use strict';

var webpack = require('webpack');

module.exports = {
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'HooyaksReact',
    libraryTarget: 'umd'
  },
  externals: {
    'map-obj': {
      root: 'MapObj',
      commonjs2: 'map-obj',
      commonjs: 'map-obj',
      amd: 'map-obj'
    }
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}

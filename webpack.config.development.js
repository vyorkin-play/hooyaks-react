'use strict';

var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })]
});

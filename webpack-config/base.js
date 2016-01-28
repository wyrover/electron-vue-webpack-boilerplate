/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.vue?$/,
      loader:'vue-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015']
      }
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'app.js',
    publicPath:'/'
  },
  resolve: {
    root: path.join(__dirname, '..'),
    extensions: ['', '.js', '.vue'],
    modulesDirectories: ['node_modules', 'src'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: {}
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ]
};

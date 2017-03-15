var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: 'aurelia-bootstrapper',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  } ,
  module: {
     loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
  }
}

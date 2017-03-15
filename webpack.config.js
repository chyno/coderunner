var path = require('path');
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
 entry: { "main": "aurelia-bootstrapper" },  // (1)
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
 },
  resolve: {                                  // (3)
    extensions: [ ".js"],
    modules: ["src", "node_modules"],
  },
  module: {
    rules: [
      { test: /\.html$/i, use: "html-loader" },
    ],
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
  },
   plugins: [ new AureliaPlugin()]
}

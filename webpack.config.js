const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: { "main": "aurelia-bootstrapper" },  // (1)

  output: {                                   // (2)
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },

  resolve: {                                  // (3)
    extensions: [ ".js"],
    modules: ["src", "node_modules"],
  },

  module: {                                   // (4)
    rules: [
   { test: /\.html$/i, use: "html-loader" }
    ]
  },

 plugins: [
    new AureliaPlugin({
      dist: 'es2015',
      features: { ie: false, svg: false, unparser: false, polyfills: "esnext" },
    }),
    new BabiliPlugin(),
  ],
};








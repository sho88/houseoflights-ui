const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const config = {
  entry: './application/index.js', // entry point of file goes here
  output: { // output of file goes here
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.bundle.js'
  },
  module: { // loaders go here
    rules: [
      { exclude: /node_modules/, test: /\.html$/, use: 'raw-loader' },
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015'] } }
    ]
  },
  plugins: [ // plugins go here
    new MinifyPlugin(
      { test: /\.bundle\.js$/, exclude: path.resolve(__dirname, 'node_modules')  }
    )
  ], 
  optimization: {},
  mode: 'development', // set mode for build ["development", "production"]
  stats: { colors: true } // stats go here
};

module.exports = config;

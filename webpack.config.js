var path = require('path');
var webpack = require('webpack');

 module.exports = {
   entry: './react/main.js',
   output: {
     path: __dirname,
     filename: './public/bundle.js'
   },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['react', 'es2015', 'stage-2']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };

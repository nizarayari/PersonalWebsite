var bourbon = require('node-bourbon').includePaths;
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/components/app.js',
  output: {
    path: './client/dist',
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react','stage-2'], plugins:['react-hot-loader/babel'] } },
      { test: /\.scss$/, loaders:["style", "css", "sass?includePaths[]=" + bourbon] },
      { test: /\.(png|jpg)$/, loader: 'url-loader' }
    ]
  },
  resolve: {
    modulesDirectories: [
      'client',
      'node_modules'
    ],
    extentions: ['', '.js', '.jsx', '.png']
  },
  progress: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
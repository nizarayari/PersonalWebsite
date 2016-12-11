var bourbon = require('node-bourbon').includePaths;
var path = require('path');
var webpack = require('webpack');

module.exports = {
	  entry: ["react-hot-loader/patch",   
	    './client/components/app.js'
	  ],
	  output: {
	    filename: 'bundle.js',
	    path: __dirname + '/compiled',
	    publicPath: '/compiled/'
	  },
	  module: {
	    loaders: [
	      {
	      	exclude: /node_modules/,
	      	loader: 'babel-loader',
	      	query: {
	      		presets: ['es2015', 'react','stage-2'],
	      		plugins:['react-hot-loader/babel']
	      	}
	      },
	      {
	      	test: /\.scss$/,
	      	loaders:["style", "css", "sass?includePaths[]=" + bourbon]
	      },
	      { test: /\.(png|jpg)$/, loader: 'file-loader' }

	    ]
	  },
	  resolve: {
	  	extentions: ['', '.js', '.jsx', '.png']
	  },
};
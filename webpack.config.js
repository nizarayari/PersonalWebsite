var bourbon = require('node-bourbon').includePaths;
var path = require('path');
var webpack = require('webpack');

module.exports = {
	  entry: [
	  	'react-hot-loader/patch',
	  	'webpack/hot/dev-server',
	  	'webpack-hot-middleware/client',   
	    './client/components/app.js'
	  ],
	  output: {
	    path: __dirname + '/client/dist',
	    filename: 'bundle.js',
	    publicPath: '/dist/'
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
     // hot reload
    	new webpack.HotModuleReplacementPlugin()
   	]


};
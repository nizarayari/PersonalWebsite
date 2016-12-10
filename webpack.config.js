var bourbon = require('node-bourbon').includePaths;


module.exports = {
	  entry: ["react-hot-loader/patch",   
	    './client/components/app.js'
	  ],
	  output: {
	    filename: 'bundle.js',
	    path: __dirname + '/client',
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
	      }
	    ]
	  },
	  resolve: {
	  	extentions: ['', '.js', '.jsx']
	  },
};
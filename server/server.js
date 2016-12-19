const path = require('path')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require('http');
const router = require('./router');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


// Config
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);


//Body Parser and Webpack Middleware
//router(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV != "production") {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/'
  }));
  app.use(webpackHotMiddleware(compiler));
}

// static route
app.use(express.static('./client'));

//Index Route
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('*', function(req, res) {
   res.redirect('/');
})


//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listenning on: ', port);
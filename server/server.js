const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require('http');
const dotenv = require('dotenv')

const router = require('./router');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


// Config
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);


//Body Parser and Webpack Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV != "production") {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/'
  }));
  app.use(webpackHotMiddleware(compiler));
}

//route
app.use(express.static('./client'));
router(app);

//Index Route
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('*', function(req, res) {
   res.redirect('/');
})


//Server Setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listenning on: ', port);
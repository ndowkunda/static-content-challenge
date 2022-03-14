const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();


//set up html template engine
app.set('views', path.join(__dirname, 'src/views'))
app.engine('html', hbs.__express);
app.set('view engine', 'html');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app
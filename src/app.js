const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();
const contentRouter = require('./routes/content.js')
const handleError = require("./utils/handleError.js");


//set up html template engine
app.set('views', path.join(__dirname, './views'))
app.engine('html', hbs.__express);
app.set('view engine', 'html');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(contentRouter);
app.use(handleError);

module.exports = app
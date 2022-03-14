const express = require('express')
const path = require("path")
const router = express.Router()
const getAllFilePaths = require("../utils/getAllFilePaths.js");
const getUrlPath = require("../utils/getUrlPath.js");
const { getPage } = require('../controllers/getPage.js')

// multiple routes from contents directory
getAllFilePaths(path.join(__dirname, "../../content")).forEach(filePath => {
  router.get(getUrlPath(filePath), getPage)
})

module.exports = router
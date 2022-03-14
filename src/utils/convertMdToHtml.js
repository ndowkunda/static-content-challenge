const fs = require("fs")
const path = require("path")
const md = require("markdown-it")();

/**
 * @name convertMdToHtml
 * @description Will transform markdown file contents into raw html string
 * @param (filePath: markdown filepath string)
 * @returns html as a string
 */

const convertMdToHtml = (filePath) => {
  const markdownFile = fs.readFileSync(path.join(__dirname, filePath), 'utf-8')
  const content = markdownFile.toString()
  return md.render(content);
};

module.exports = convertMdToHtml



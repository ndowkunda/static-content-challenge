const fs = require("fs")
const path = require("path")

/**
 * @name getAllFilePaths
 * @description Will read through a directory to get list of all file paths in a directory
 * @param (dirPath: full directory path)
 * @param (filePaths: array of filePaths)
 * @returns array of file paths
 */

const getAllFilePaths = function (dirPath, filePaths = []) {
  fs.readdirSync(dirPath).forEach(file => {
    if (fs.lstatSync(path.join(dirPath, file)).isDirectory()) {
      getAllFilePaths(`${dirPath}\\${file}`, filePaths)
    } else {
      filePaths.push(`${dirPath}`)
    }
  })
  return filePaths
}
module.exports = getAllFilePaths

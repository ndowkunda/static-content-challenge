/**
 * @name getUrlPath
 * @description converts full relative filePath to content into URL path
 * @param (filePath: filePath string containing path to markdown content)
 * @returns URL path to be used in router get correct page content
 */

const getUrlPath = (filePath) => {
  return filePath.substring(filePath.indexOf("\\content\\")).replace("\\content", "").replace(/\\/g, "/")
};

module.exports = getUrlPath

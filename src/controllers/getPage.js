const convertMdToHtml = require("../utils/convertMdToHtml.js");

const getPage = (req, res) => {
  res.render("template", {
    content: convertMdToHtml(`../../content${req.url
      }/index.md`)
  });
};

module.exports = { getPage };

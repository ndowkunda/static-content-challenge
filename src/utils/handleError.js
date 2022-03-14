/**
 * @name handleError
 * @description Will generate error message in app when content page doesn't exist
 * @param (_req: request object)
 * @param (res: response object)
 * @param (_next: next function)
 * @returns req status code of 404 with string stating error message
 */

const handleError = (_req, res, _next) => {
  res.status(404).send('Page could not be found!');
};

module.exports = handleError

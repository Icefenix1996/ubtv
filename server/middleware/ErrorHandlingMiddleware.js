const ApiError = require('../error/ApiError');

module.exports = function(err, req, res, next) {
  console.error(err); // Вывод ошибки в консоль
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Something went wrong!" });
};
const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {
    // Логика регистрации пользователя
  }

  async login(req, res) {
    // Логика аутентификации пользователя
  }

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не зада ид'));
    }
    res.json(id);
  }
}

module.exports = new UserController();

  
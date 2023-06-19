const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
    } catch (error) {
      next(ApiError.internal('Ошибка при создании типа.'));
    }
  }

  async getAll(req, res, next) {
    try {
      const type = await Type.findAll();
      return res.json(type);
    } catch (error) {
      next(ApiError.internal('Ошибка при получении типов.'));
    }
  }
}

module.exports = new TypeController();

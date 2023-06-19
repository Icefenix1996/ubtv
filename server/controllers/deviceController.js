const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      // Получение данных из запроса
      const { name, price, rating, img } = req.body;

      // Создание устройства в базе данных
      const device = await Device.create({ name, price, rating, img });

      // Возвращение созданного устройства в ответе
      return res.json(device);
    } catch (error) {
      // Обработка ошибки и передача ее в middleware обработки ошибок
      next(ApiError.internal('Ошибка при создании устройства.'));
    }
  }

  async getAll(req, res, next) {
    try {
      // Получение всех устройств из базы данных
      const devices = await Device.findAll();

      // Возвращение всех устройств в ответе
      return res.json(devices);
    } catch (error) {
      // Обработка ошибки и передача ее в middleware обработки ошибок
      next(ApiError.internal('Ошибка при получении устройств.'));
    }
  }

  async getOne(req, res, next) {
    try {
      // Получение идентификатора устройства из параметров запроса
      const { id } = req.params;

      // Получение одного устройства из базы данных по идентификатору
      const device = await Device.findByPk(id);

      // Если устройство не найдено, возвращаем ошибку 404
      if (!device) {
        return next(ApiError.notFound('Устройство не найдено.'));
      }

      // Возвращение одного устройства в ответе
      return res.json(device);
    } catch (error) {
      // Обработка ошибки и передача ее в middleware обработки ошибок
      next(ApiError.internal('Ошибка при получении устройства.'));
    }
  }
}

module.exports = new DeviceController();

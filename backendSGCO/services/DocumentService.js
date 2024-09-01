const db = require('../models');

const create = async (file_type, date, name, file_path, UserId) => {
  try {
    const document = await db.Document.create({ file_type, date, name, file_path, UserId });
    return document;
  } catch (error) {
    throw error;
  }
}
const get = async (id) => {
  try {
    const document = await db.Document.findByPk(id);
    return document;
  } catch (error) {
    throw error;
  }
}
const getByUser = async (UserId) => {
  try {
    const documents = await db.Document.findAll({ where: { UserId: UserId } });
    return documents;
  } catch (error) {
    throw error;
  }
}


const getAll = async () => {
  try {
    const documents = await db.Document.findAll();
    return documents;
  } catch (error) {
    throw error;
  }
}

const update = async (id, file_type, date, name, file_path, UserId) => {
  try {
    const document = await db.Document.update({ file_type, date, name, file_path, UserId }, { where: { id } });
    return document;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const document = await db.Document.destroy({ where: { id } });
    return document;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
  getByUser
}

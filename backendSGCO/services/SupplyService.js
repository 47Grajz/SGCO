
const db = require('../models');

const create = async (name, price, amount) => {
  try {
    const supply = await db.Supply.create({ name, price, amount });
    return supply;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const supply = await db.Supply.findByPk(id);
    return supply;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const supplies = await db.Supply.findAll();
    return supplies;
  } catch (error) {
    throw error;
  }
}

const update = async (id, name, price, amount) => {
  try {
    const supply = await db.Supply.update({ name, price, amount }, { where: { id } });
    return supply;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const supply = await db.Supply.destroy({ where: { id } });
    return supply;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy
}

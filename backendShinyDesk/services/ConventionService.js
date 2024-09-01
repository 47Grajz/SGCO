const db = require('../models');

const create = async (name, color) => {
  try {
    const convention = await db.Convention.create({ name, color });
    return convention;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const conventions = await db.Convention.findAll();
    return conventions;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const convention = await db.Convention.findByPk(id);
    return convention;
  } catch (error) {
    throw error;
  }
}

const update = async (id, name, color) => {
  console.log('id '+id);

  try {
    const convention = await db.Convention.update({ name, color }, { where: { id } });
    return convention;
  } catch (error) {
    throw error;
  }
}

const  destroy = async (id) => {
  try {
    const convention = await db.Convention.destroy({ where: { id } });
    return convention;
  } catch (error) {
    throw error;
  }
}
module.exports={
    create, get, getAll, update, destroy
}
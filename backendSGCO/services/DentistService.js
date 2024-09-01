const db = require('../models');

const create = async (name, last_name, phone_number, email, birthday, UserId) => {
  try {
    const newDentist = await db.Dentist.create({ name, last_name, phone_number, email, birthday, UserId });
    return newDentist;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const dentist = await db.Dentist.findByPk(id, {
      include: [{
        model: db.Setting,
        required: false,
        as: "Setting",
      }, {
        model: db.User,
        required: true,
        as: "User",
      },
      ]
    });
    return dentist;
  } catch (error) {
    throw error;
  }
}
const getAll = async (id) => {
  try {
    const dentists = await db.Dentist.findAll({
      include: [{
        model: db.Setting,
        required: false,
        as: "Setting",
      }, {
        model: db.User,
        required: true,
        as: "User",
      },
      ]
    });
    return dentists;
  } catch (error) {
    throw error;
  }
}

const update = async (id, name, last_name, email, phone_number, birthday) => {
  try {
    const dentist = await db.Dentist.update({ name, last_name, phone_number, email, birthday }, { where: { id } });
    return dentist;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const dentist = await db.Dentist.destroy({ where: { id } });
    return dentist;
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

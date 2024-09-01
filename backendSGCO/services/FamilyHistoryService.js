const db = require('../models');

const create = async (disease, last_visit_date, PatientId) => {
  try {
    const familyHistory = await db.Family_History.create({
      disease,
      last_visit_date,
      PatientId
    });
    return familyHistory;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const familyHistory = await db.Family_History.findByPk(id);
    return familyHistory;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const familyHistories = await db.Family_History.findAll();
    return familyHistories;
  } catch (error) {
    throw error;
  }
}

const update = async (id, disease, last_visit_date, PatientId) => {
  try {
    const familyHistory = await db.Family_History.update({
      disease,
      last_visit_date,
      PatientId
    }, { where: { id } });
    return familyHistory;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const familyHistory = await db.Family_History.destroy({ where: { id } });
    return familyHistory;
  } catch (error) {
    throw error;
  }
}
const getByUser = async (PatientId) => {
    try {
      const familyHistories = await db.Family_History.findAll({ where: { PatientId } });
      return familyHistories;
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

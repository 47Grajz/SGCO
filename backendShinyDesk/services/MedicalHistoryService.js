
const db = require('../models');

const create = async (date, observations, status, AppointmentId) => {
  try {
    const medicalHistory = await db.Medical_History.create({ date, observations, status, AppointmentId });
    return medicalHistory;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
      const appointments = await db.Medical_History.findAll();
      return appointments;
  } catch (error) {
      throw error;
  }
}

const get = async (id) => {
  try {
      const appointment = await db.Medical_History.findByPk(id);
      return appointment;
  } catch (error) {
      throw error;
  }
}

const update = async (id, date, observations, status, AppointmentId) => {
  try {
    const medicalHistory = await db.Medical_History.update({ date, observations, status, AppointmentId }, { where: { id } });
    return medicalHistory;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const medicalHistory = await db.Medical_History.destroy({ where: { id } });
    return medicalHistory;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  get,
  getAll,
  create,
  update,
  destroy
};

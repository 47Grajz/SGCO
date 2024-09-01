const db = require('../models');

const create = async (name, description, duration, price, previous_appointment) => {
  try {
    const consultationType = await db.Consultation_Type.create({
      name,
      description,
      duration,
      price,
      previous_appointment
    });
    return consultationType;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const consultationType = await db.Consultation_Type.findByPk(id);
    return consultationType;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const consultationTypes = await db.Consultation_Type.findAll();
    return consultationTypes;
  } catch (error) {
    throw error;
  }
}

const update = async (id, name, description, duration, price, previous_appointment) => {
  try {
    const consultationType = await db.Consultation_Type.update({
      name,
      description,
      duration,
      price,
      previous_appointment
    }, { where: { id } });
    return consultationType;
  } catch (error) {
    throw error;
  }
}

const  destroy = async (id) => {
  try {
    const convention = await db.Consultation_Type.destroy({ where: { id } });
    return convention;
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

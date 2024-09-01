const db = require('../models');

const create = async (description, date, PatientId, MedicalHistoryId) => {
  try {
    const diagnosis = await db.Diagnosis.create({
      description,
      date,
      PatientId,
      MedicalHistoryId
    });
    return diagnosis;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const diagnosis = await db.Diagnosis.findByPk(id);
    return diagnosis;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const diagnoses = await db.Diagnosis.findAll();
    return diagnoses;
  } catch (error) {
    throw error;
  }s
}

const update = async (id, description, date, PatientId, MedicalHistoryId) => {
  try {
    const diagnosis = await db.Diagnosis.update({
      description,
      date,
      PatientId,
      MedicalHistoryId
    }, { where: { id } });
    return diagnosis;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const diagnosis = await db.Diagnosis.destroy({ where: { id } });
    return diagnosis;
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

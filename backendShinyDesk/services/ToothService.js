
const db = require('../models');

const create = async (number, type, status_ini_evo, PatientId) => {
  try {
    const tooth = await db.Tooth.create({ number, type, status_ini_evo, PatientId });
    return tooth;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const tooth = await db.Tooth.findByPk(id);
    return tooth;
  } catch (error) {
    throw error;
  }
}
const getAll = async () => {
    try {
      const teeth = await db.Tooth.findAll({
        include: {
         model: db.Patient, required: true, as: "Patient", attributes: ["id", "name"],
     }});
      return teeth;
    } catch (error) {
      throw error;
    }
  }

const update = async (id, number, type, status_ini_evo, PatientId) => {
  try {
    const tooth = await db.Tooth.update({ number, type, status_ini_evo, PatientId }, { where: { id } });
    return tooth;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const tooth = await db.Tooth.destroy({ where: { id } });
    return tooth;
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



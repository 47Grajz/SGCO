const db = require('../models');

const create = async (name, description, duration, patients) => {
  try {
    const Treatment = await db.Treatment.create({ name, description, duration, patients });
    if (patients) {
      await Treatment.setPatients(patients)
    }
    return Treatment;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const treatment = await db.Treatment.findByPk(id);
    return treatment;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const treatments = await db.Treatment.findAll();
    return treatments;
  } catch (error) {
    throw error;
  }
}

const update = async (id, name, description, duration, patients) => {
  try {
    const treatment = await db.Treatment.update({ name, description, duration }, { where: { id } });
    if (patients) {
      // Buscar el tratamiento actualizado
      const updatedTreatment = await db.Treatment.findByPk(id);
      // Actualizar la relación con los pacientes
      await updatedTreatment.setPatients(patients);
    }

    return treatment;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const treatment = await db.Treatment.destroy({ where: { id } });
    return treatment;
  } catch (error) {
    throw error;
  }
}

const countTreatmentsForAllPatients = async () => {
  const result = await db.Treatment_Patient.findAll({
    attributes: [
      'TreatmentId',
      [db.Sequelize.fn('COUNT', db.Sequelize.col('PatientId')), 'count']
    ],
    group: ['TreatmentId'],
    order: [
      ['count', 'DESC'],
    ],
  });

  const treatments = await Promise.all(result.map(async treatmentPatient => {
    const treatmentId = treatmentPatient.getDataValue('TreatmentId');
    const count = parseInt(treatmentPatient.getDataValue('count'));

    // Buscar el tratamiento por su ID
    const treatment = await db.Treatment.findByPk(treatmentId);

    return {
      treatmentId: treatment.id,
      name: treatment.name,
      duration: treatment.duration,
      description: treatment.description,
      // Agrega aquí cualquier otro campo que quieras retornar
      count: count
    };
  }));

  console.log(treatments);
  return treatments;
}
module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
  countTreatmentsForAllPatients
}

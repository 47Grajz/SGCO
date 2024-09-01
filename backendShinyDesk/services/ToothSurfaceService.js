
const db = require('../models');

const create = async (type,part,ConventionId,ToothId, MedicalHistoryId) => {
  try {
    const Tooth_Surface = await db.Tooth_Surface.create({ type,part,ConventionId,ToothId, MedicalHistoryId });
    return Tooth_Surface;
  } catch (error) {
    throw error;
  }
}

const get = async (id) => {
  try {
    const toothSurface = await db.Tooth_Surface.findByPk(id);
    return toothSurface;
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const toothSurfaces = await db.Tooth_Surface.findAll({
      include: {
       model: db.Medical_History, required: true, as: "Medical_History", attributes: ["date"],
   }});
    return toothSurfaces;
  } catch (error) {
    throw error;
  }
}

const update = async (id, type,part,ConventionId,ToothId, MedicalHistoryId) => {
  try {
    const toothSurface = await db.Tooth_Surface.update({ type,part,ConventionId,ToothId, MedicalHistoryId }, { where: { id } });
    return toothSurface;
  } catch (error) {
    throw error;
  }
}

const destroy = async (id) => {
  try {
    const toothSurface = await db.Tooth_Surface.destroy({ where: { id } });
    return toothSurface;
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

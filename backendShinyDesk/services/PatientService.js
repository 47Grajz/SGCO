const db = require("../models");
const { generatePassword } = require("../utils/passwordUtils");
const bcrypt = require("bcrypt");
const roles = require("../utils/roles");
const { QueryTypes } = require('sequelize');

const create = async (
  name,
  last_name,
  second_last_name,
  phone_number,
  identification_card_number,
  gender,
  birthday,
  special_notes,
  occupation,
  enrollment_date,
  responsible_phone_number,
  responsible_person_name,
  eps,
  birth_place,
  usual_residence,
  email, status
) => {
  try {
    let password = generatePassword(10);
    password = await bcrypt.hash(password, 10);
    const patientUser = await db.User.create({ name, lastName: last_name, email, password, role: roles["PATIENT"], status });
    const Patient = await db.Patient.create({
      name,
      last_name,
      second_last_name,
      phone_number,
      identification_card_number,
      gender,
      birthday,
      special_notes,
      occupation,
      enrollment_date,
      responsible_phone_number,
      responsible_person_name,
      eps,
      birth_place,
      usual_residence,
      UserId: patientUser.id,
    });

    return Patient;
  } catch (error) {
    throw error;
  }
};

const get = async (id) => {
  try {
    const Patient = await db.Patient.findByPk(id, {
      include: {
        model: db.User,
        required: true,
        as: "User",
        attributes: { exclude: ["password", "role"] },
      },
    });
    return Patient;
  } catch (error) {
    throw error;
  }
};

const getByIdUser = async (userid) => {
  try {
    const Patient = await db.Patient.findAll({
      where: { UserId: userid },
      include: {
        model: db.User,
        required: true,
        as: "User",
        attributes: { exclude: ["password", "role"] },
      },
    },
    );
    return Patient;
  } catch (error) {
    throw error;
  }
};


const getAll = async () => {
  try {
    const Patients = await db.Patient.findAll({
      include: {
        model: db.User,
        required: true,
        as: "User",
        attributes: ["id", "name", "email", "status"],
      },
    });

    return Patients;
  } catch (error) {
    throw error;
  }
};

const update = async (
  id,
  name,
  last_name,
  second_last_name,
  phone_number,
  identification_card_number,
  gender,
  birthday,
  special_notes,
  occupation,
  enrollment_date,
  responsible_phone_number,
  responsible_person_name,
  eps,
  birth_place,
  usual_residence
) => {
  try {
    const Patient = await db.Patient.update(
      {
        name,
        last_name,
        second_last_name,
        phone_number,
        identification_card_number,
        gender,
        birthday,
        special_notes,
        occupation,
        enrollment_date,
        responsible_phone_number,
        responsible_person_name,
        eps,
        birth_place,
        usual_residence,
      },
      { where: { id } }
    );
    return Patient;
  } catch (error) {
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const Patient = await db.Patient.destroy({ where: { id } });
    return Patient;
  } catch (error) {
    throw error;
  }
};

const getPatientsByMonth = async () => {
  try {
    const count = await db.Patient.findAll({
      where: db.sequelize.where(
        db.sequelize.fn('date_trunc', 'month', db.sequelize.col('createdAt')),
        db.sequelize.fn('date_trunc', 'month', db.sequelize.fn('now'))
      )
    });
    return count;
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
  getPatientsByMonth,
  getByIdUser
};

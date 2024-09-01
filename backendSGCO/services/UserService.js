const db = require("../models");
const roles = require("../utils/roles");
const bcrypt = require("bcrypt");
const create = async (
  name,
  lastName,
  email,
  password,
  profilePicture,
  role, status, phoneNumber, idCardNumber
) => {
  try {
    if (Object.values(roles).includes(role)) {
      const user = await db.User.create({
        name,
        lastName,
        email,
        password,
        role,
        status,
        phoneNumber,
        idCardNumber,
      });
      if (!user) {
        return { error: "error creating user" }
      }
      if (role == roles["PATIENT"]) {
        await db.Patient.create({
          name: name,
          last_name: lastName,
          UserId: user.id,
          phone_number: phoneNumber,
          identification_card_number: idCardNumber,
        });
      } else if (role == roles["DENTIST"]) {
        await db.Dentist.create({
          name: name,
          last_name: lastName,
          email: email,
          UserId: user.id,
          phone_number: phoneNumber,
        });
      }
      else if (role == roles["SECRETARY"]) {
        await db.Secretary.create({
          name: name,
          last_name: lastName,
          email: email,
          UserId: user.id,
          phone_number: phoneNumber,
        });
      }

      if (profilePicture) {
        await db.Document.create({
          file_type: "image",
          date: user.createdAt,
          name: "profile_picture",
          file_path: profilePicture,
          UserId: user.id,
        });
      }

      return user;
    } else {
      return { error: "rol is not defined for the user" };
    }
  } catch (error) {
    throw error;
  }
};

const get = async (id) => {
  try {
    const user = await db.User.findByPk(id, {
      include: {
        model: db.Document,
        required: false,
        as: "Documents",
        attributes: ["id", "name", "file_path"],
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
const getPicture = async (id) => {
  try {
    const picture = db.Document.findAll({
      where: { UserId: id, name: "profile_picture" },
    });
    return picture;
  } catch (error) {
    throw error;
  }
};
const getAll = async () => {
  try {
    const users = await db.User.findAll({
      include: {
        model: db.Document,
        required: false,
        as: "Documents",
        attributes: ["id", "name", "file_path"],
      },
    });
    return users;
  } catch (error) {
    throw error;
  }
};


const update = async (
  id,
  name,
  lastName,
  email,
  password,
  profile_picture,
  role,
  status,
  phoneNumber,
  idCardNumber
) => {
  try {
    const user = await db.User.update(
      { name, lastName, email, password, role, status, phoneNumber, idCardNumber },
      { where: { id }, individualHooks: true }
    );
    console.log('prof', profile_picture);
    if (profile_picture) {
      console.log(profile_picture);
      const picture = await db.Document.findOne({ where: { UserId: id, name: "profile_picture" } })
      if (picture) {
        await db.Document.update(
          { file_path: profile_picture },
          {
            where: { UserId: id, name: "profile_picture" },
          });
      }
      else{
        await db.Document.create({
          file_type: "image",
          date: user.createdAt,
          name: "profile_picture",
          file_path: profile_picture,
          UserId: id,
        });
      }
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const user = await db.User.destroy({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};
const verifyEmail = async (id, verified) => {
  try {
    const user = await db.User.update({ email_verified: verified }, { where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  create,
  get,
  getAll,
  getPicture,
  update,
  destroy,
  verifyEmail
};

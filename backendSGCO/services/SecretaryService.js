const db = require('../models');

const create = async (name, last_name, birthday, gender, email, phone_number, UserId) => {
    try {
        console.log(UserId);
        const newSecretary = await db.Secretary.create({ name, last_name, birthday, gender, email, phone_number, UserId });
        return newSecretary;
    } catch (error) {
        throw error;
    }
}
const getAll = async () => {
    try {
        const appointments = await db.Secretary.findAll();
        return appointments;
    } catch (error) {
        throw error;
    }
}

const get = async (id) => {
    try {
        const appointment = await db.Secretary.findByPk(id);
        return appointment;
    } catch (error) {
        throw error;
    }
}

const update = async (id, name, last_name, birthday, gender, email, phone_number) => {
    try {
        const appointment = await db.Secretary.update({ name, last_name, birthday, gender, email, phone_number }, { where: { id } });
        return appointment;
    } catch (error) {
        throw error;
    }
}

const destroy = async (id) => {
    try {
        const appointment = await Secretary.destroy({ where: { id } });
        return appointment;
    } catch (error) {
        throw error;
    }
}


module.exports = { create, get, getAll, update, destroy };


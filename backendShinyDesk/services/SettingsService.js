const db = require('../models');

const create = async (emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime, DentistId) => {
    try {
        const setting = await db.Setting.create({
            emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime, DentistId
        });
        return setting;
    } catch (error) {
        throw error;
    }
}

const get = async (id) => {
    try {
        const setting = await db.Setting.findByPk(id);
        return setting;
    } catch (error) {
        throw error;
    }
}
const getByDentist = async (DentistId) => {
    try {
        const setting = await db.Setting.findOne({ where: { DentistId } });
        return setting;
    } catch (error) {
        throw error;
    }
}
const getAll = async () => {
    try {
        const settings = await db.Setting.findAll();
        return settings;
    } catch (error) {
        throw error;
    }
}

const update = async (DentistId, emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime) => {
    try {
        const setting = await db.Setting.update({
            emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime
        }, { where: { DentistId } });
        return setting;
    } catch (error) {
        throw error;
    }
}

const destroy = async (id) => {
    try {
        const convention = await db.Setting.destroy({ where: { id } });
        return convention;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    get,
    getByDentist,
    getAll,
    update,
    destroy
}

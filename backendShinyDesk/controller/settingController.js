const settingService = require('../services/SettingsService')

const getAll = async (req, res) => {
    let dentistId = req.query.dentistId
    if (dentistId) {
        try {
            const settings = await settingService.getByDentist(dentistId);
            res.status(200).send({ status: 200, data: settings })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
    else {
        try {
            const settings = await settingService.getAll();
            res.status(200).send({ status: 200, data: settings })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
}

const get = async (req, res) => {
    let id = req.params.settingId
    try {
        const settings = await settingService.get(id);
        res.status(200).send({ status: 200, data: settings })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const create = async (req, res) => {
    const { emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime, DentistId } = req.body;
    try {
        const setting = await settingService.create(emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime, DentistId)
        res.status(200).send({ status: 200, data: setting })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }

}

const update = async (req, res) => {
    const id = req.params.dentistId
    const { emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime } = req.body;
    try {
        const setting = await settingService.update(id, emailNotifications, appointmentNotifications, weekdayStartTime, weekdayEndTime, saturdayStartTime, saturdayEndTime)
        res.status(200).send({ status: 200, data: setting })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }

}

const destroy = async (req, res) => {
    const id = req.params.dentistId
    try {
        const setting = await settingService.destroy(id)
        res.status(200).send({ status: 200, data: setting })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }

}

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
}
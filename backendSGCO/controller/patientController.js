
const userServices = require('../services/PatientService')

const getAll = async (req, res) => {
    try {
        const getAll = await userServices.getAll()
        res.status(200).send({ status: 200, data: getAll })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const get = async (req, res) => {
    let id = req.params.patientId;
    try {
        const get = await userServices.get(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const getByIdUser = async (req, res) => {
    let userId = req.params.userId;
    try {
        const get = await userServices.getByIdUser(userId)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const create = async (req, res) => {
    const { body } = req;
    console.log(req);
    try {
        const create = await userServices.create(body.name, body.last_name, body.second_last_name, body.phone_number, body.identification_card_number, body.gender, body.birthday, body.special_notes, body.occupation, body.enrollment_date, body.responsible_phone_number, body.responsible_person_name, body.eps, body.birth_place, body.usual_residence, body.email, body.status);
        res.status(200).send({ status: 200, data: create })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const update = async (req, res) => {
    const id = req.params.patientId
    try {
        const { body } = req
        const update = await userServices.update(id, body.name, body.last_name, body.second_last_name, body.phone_number, body.identification_card_number, body.gender, body.birthday, body.special_notes, body.occupation, body.enrollment_date, body.responsible_phone_number, body.responsible_person_name, body.eps, body.birth_place, body.usual_residence);

        res.status(200).send({ status: 200, data: update })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const destroy = async (req, res) => {
    const id = req.params.patientId
    try {
        const destroy = await userServices.destroy(id)

        res.status(200).send({ status: 200, data: destroy })

    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const getPatientsByMonth = async (req, res) => {
    try {
        const Patients = await userServices.getPatientsByMonth()
        res.status(200).send({ status: 200, data: Patients })
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
    getPatientsByMonth,
    getByIdUser
}
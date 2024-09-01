const userServices = require('../services/UserService')

const getAll = async (req, res) => {
    try {
        const getAll = await userServices.getAll()
        res.status(200).send({ status: 200, data: getAll })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const get = async (req, res) => {
    let id = req.params.userId
    try {
        const get = await userServices.get(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}
const getPicture = async (req, res) => {
    let id = req.params.userId
    try {
        const get = await userServices.getPicture(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const create = async (req, res) => {
    console.log(req.body);
    const { name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber } = req.body;
    try {
        const create = await userServices.create(name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber);
        res.status(200).send({ status: 200, data: create })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const update = async (req, res) => {
    const id = req.params.userId
    try {
        const { name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber } = req.body;
        const update = await userServices.update(id, name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber);
        res.status(200).send({ status: 200, data: update })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const destroy = async (req, res) => {
    const id = req.params.userId

    try {
        const destroy = await userServices.destroy(id)
        res.status(200).send({ status: 200, data: destroy })

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
    getPicture
}
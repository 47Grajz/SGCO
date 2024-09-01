const documentServices = require('../services/DocumentService')

const getAll = async (req, res) => {
    try {
        const getAll = await documentServices.getAll()
        res.status(200).send({ status: 200, data: getAll })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const get = async (req, res) => {
    let id = req.params.documentId
    try {
        const get = await documentServices.get(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}
const getByPatient = async (req, res) => {
    const patientId = req.params.patientId;
    try {
        const documents = await documentServices.getByUser(patientId);
        res.status(200).send({ status: 200, data: documents });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: error.message });
    }
};

const create = async (req, res) => {
    const { body } = req
    try {
        const create = await documentServices.create(body.file_type, body.date, body.name, body.file_path, body.userId)

        res.status(200).send({ status: 200, data: create })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const update = async (req, res) => {
    const id = req.params.documentId
    try {
        const { body } = req

        const update = await documentServices.update(id, body.file_type, body.date, body.name, body.file_path, body.userId)

        res.status(200).send({ status: 200, data: update })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const destroy = async (req, res) => {
    const id = req.params.documentId

    try {
        const destroy = await documentServices.destroy(id)

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
    getByPatient,
};
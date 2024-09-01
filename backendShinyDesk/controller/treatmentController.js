const treatmentServices = require('../services/TreatmentService')

const getAll = async (req, res) => {
    const { usedTreatments } = req.query
    if (usedTreatments) {
        try {
            const getAll = await treatmentServices.countTreatmentsForAllPatients()
            res.status(200).send({ status: 200, data: getAll })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
    else {
        try {
            const getAll = await treatmentServices.getAll()
            res.status(200).send({ status: 200, data: getAll })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
}

const get = async (req, res) => {
    let id = req.params.treatmentId
    try {
        const get = await treatmentServices.get(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const create = async (req, res) => {
    const { body } = req
    console.log(body);

    try {
        const create = await treatmentServices.create(body.name,body.description,body.duration,body.patients)
        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const update = async (req, res) => {
    const id = req.params.treatmentId
    try {
        const {body} = req
        const update = await treatmentServices.update(id,body.name,body.description,body.duration, body.patients)
        res.status(200).send({ status: 200, data: update })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const destroy = async (req, res) => {
    const id = req.params.treatmentId

    try {
        const destroy = await treatmentServices.destroy(id)

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
    destroy
}
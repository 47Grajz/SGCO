const diagnosisServices = require('../services/DiagnosisService')

const getAll = async(req,res)=>{
    try {
        const getAll = await diagnosisServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.diagnosisId
    try {
        const get = await diagnosisServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    console.log(body);
    try {
        const create = await diagnosisServices.create(body.description,body.date,body.patientId,body.MedicalHistoryId)

        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.diagnosisId
    try {
        const {body} = req
        const update = await diagnosisServices.update(id,body.description,body.date,body.patientId,body.MedicalHistoryId)

        res.status(200).send({status:200,data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.diagnosisId

    try {
        const destroy = await diagnosisServices.destroy(id)
        
        res.status(200).send({status:200,data:destroy})

    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy
}
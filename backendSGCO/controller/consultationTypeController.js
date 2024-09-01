const consultationTypeServices = require('../services/ConsultationTypeService')

const getAll = async(req,res)=>{
    try {
        const getAll = await consultationTypeServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.consultationTypeId
    try {
        const get = await consultationTypeServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    try {
        const create = await consultationTypeServices.create(body.name,body.description,body.duration,body.price,body.previous_appointment)

        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.consultationTypeId
    try {
        const {body} = req
        const update = await consultationTypeServices.update(id,body.name,body.description,body.duration,body.price,body.previous_appointment)

        res.status(200).send({status:200,data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.consultationTypeId

    try {
        const destroy = await consultationTypeServices.destroy(id)
        
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
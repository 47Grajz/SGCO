const toothServices = require('../services/ToothService')

const getAll = async(req,res)=>{
    try {
        const getAll = await toothServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.toothId
    try {
        const get = await toothServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    console.log(body);
    try {
        const create = await toothServices.create(body.number, body.type,body.status_ini_evo,body.patientId)

        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.toothId
    try {
        const {body} = req
        const update = await toothServices.update(id, body.number,body.type,body.status_ini_evo,body.patientId)

        res.status(200).send({status:200,data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.toothId

    try {
        const destroy = await toothServices.destroy(id)
        
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
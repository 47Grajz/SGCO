const dentisServices = require('../services/DentistService')

const getAll = async(req,res)=>{
    try {
        const getAll = await dentisServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.dentistId
    try {
        const get = await dentisServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    try {
        const create = await dentisServices.create(body.name,body.last_name,body.phone_number,body.email,body.birthday, body.userId)

        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.dentistId
    try {
        const {body} = req
        const update = await dentisServices.update(id,body.name, body.last_name,body.phone_number,body.email,body.birthday)

        res.status(200).send({status:200, data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.dentistId

    try {
        const destroy = await dentisServices.destroy(id)
        
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
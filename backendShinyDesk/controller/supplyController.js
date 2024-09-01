const supplyServices = require('../services/SupplyService')

const getAll = async(req,res)=>{
    try {
        const getAll = await supplyServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.supplyId
    try {
        const get = await supplyServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    try {
        const create = await supplyServices.create(body.name,body.price,body.amount)

        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.supplyId
    try {
        const {body} = req

        const update = await supplyServices.update(id,body.name,body.price,body.amount)

        res.status(200).send({status:200,data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.supplyId

    try {
        const destroy = await supplyServices.destroy(id)
        
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
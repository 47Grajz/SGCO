const toothFaceServices = require('../services/ToothSurfaceService')

const getAll = async(req,res)=>{
    try {
        const getAll = await toothFaceServices.getAll()
        res.status(200).send({status:200,data:getAll})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const get = async(req,res)=>{
    let id = req.params.toothSurfaceId
    try {
        const get = await toothFaceServices.get(id)
        res.status(200).send({status:200,data:get})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const create = async(req,res)=>{
    const {body} = req
    try {
        const create = await toothFaceServices.create(body.type, body.part,body.conventionId, body.toothId, body.medicalHistoryId)
        res.status(200).send({status:200,data:create})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const update = async(req,res)=>{
    const id = req.params.toothFaceId
    try {
        const {body} = req
        const update = await toothFaceServices.update(id,body.type, body.part,body.conventionId, body.toothId, body.medicalHistoryId)

        res.status(200).send({status:200,data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED",data:error.message})
    }
}

const destroy = async(req,res)=>{
    const id = req.params.toothFaceId

    try {
        const destroy = await toothFaceServices.destroy(id)
        
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
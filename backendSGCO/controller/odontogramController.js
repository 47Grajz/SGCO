const toothServices = require('../services/ToothService')

const getAll = async(req,res)=>{
    
}

const get = async(req,res)=>{
    let id = req.params.patientId
   
}

const create = async(req,res)=>{
    const {odontogram} = req.body;
}

const update = async(req,res)=>{
    const id = req.params.patientId
    
}

const destroy = async(req,res)=>{
    const id = req.params.patientId

    
}

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy
}
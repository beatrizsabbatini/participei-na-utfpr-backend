const { v4: uuid } = require('uuid');
const Campus = require("../models/Campus");

module.exports = {

  async create(req, res){
    const body = req.body; 

    const campusWithUuid = {
        ...body,
        id: uuid()
    }
    const campusItem = await Campus.create(campusWithUuid);

    return res.json(campusItem)
  }, 

    async list(req, res){

      try {
        const campuses = await Campus.find();
        return res.json(campuses); 
      } catch (error) {
        return res.status(400).send({message: "Erro ao excluir!"})
      }
    }, 
  }
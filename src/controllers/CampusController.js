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

    console.log('entrou no list campuses!')

    try {
      const campuses = await Campus.find();
      return res.json(campuses); 
    } catch (error) {
      return res.status(400).send({message: "Erro ao listar!"})
    }
  }, 

  async update(req, res){
    const { _id } = req.query;

    let data = req.body;

    try {
      const campusUpdated = await Campus.findByIdAndUpdate(_id, data);

      return res.json(campusUpdated)
    } catch (error) {
      return res.json(error);
    }
    
  }, 
}
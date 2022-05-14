const Category = require('../models/Category');

module.exports = {

  async create(req, res){
    const body = req.body; 

    const bodyFormatted = {
      ...body,
      group: Number(body.group),
      points: Number(body.points)
    }

    try{
      const categoryItem = await Category.create(bodyFormatted);
      return res.json(categoryItem)
    } catch(err){
      console.log(err);
      return (err);
    }
  
  },

  async list(req, res){

    try {
      const categories = await Category.find();
      return res.json(categories); 
    } catch (error) {
      return res.status(400).send({message: "Erro ao listar!"})
    }
  }, 

  async update(req, res){
    const data = req.body;
    try {
      const categoryUpdated = await Category.updateOne(({id: data.id}, data));

      return res.json(categoryUpdated)
    } catch (error) {
      return res.json(error)
    }
  },

  async delete(req, res){
    const { id } = req.query;

    try {
      await Category.findByIdAndDelete(id);

      return res.json('success');
    } catch (error) {
      console.log("Error deleting: ", error)
      return res.json(error)
    }
  }

}
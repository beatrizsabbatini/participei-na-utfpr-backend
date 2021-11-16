const User = require('../models/User');

module.exports = {

    async create(req, res){

      const userItem = await User.create(req.body);

      return res.json(userItem)
    }, 

    async update(req, res){
      const { id } = req.params;
      const data = req.body;

      try {
        const userUpdated = await User.findOneAndUpdate(({id}, data));

        return res.json(userUpdated)
      } catch (error) {
        return res.json(error);
      }
      
  }, 

    async find(req, res){
        const { id } = req.query; 

        try {
          const user = await User.findOne({ id });
          if (!user) throw new Error('User not found');
          return res.json(user);

        } catch (error) {
          return res.json(error);
        }
         
    }, 

    async list(req, res){

        let userItems = await User.find();

        return res.json(userItems)
    }, 


}
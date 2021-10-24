const User = require('../models/User');

module.exports = {

    async create(req, res){
        const userItem = await User.create(req.body);

        return res.json(userItem)
    }, 

    async find(req, res){
        const {uid} = req.body; 
        const user = await User.findOne({uid});

        if(user){
           return res.json({user});
        }
        else{
            res.json({mensagem: 'Não foi possivel encontrar'});
        }
    }, 

    async list(req, res){

        let userItems = await User.find();

        return res.json(userItems)
    }, 


}
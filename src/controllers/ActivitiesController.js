const { v4: uuid } = require('uuid');
const Activity = require('../models/Activity');

module.exports = {

    async create(req, res){
        const body = req.body; 

        const activityWithUuid = {
            ...body,
            id: uuid()
        }
        const activityItem = await Activity.create(activityWithUuid);

        return res.json(activityItem)
    }, 

    async find(req, res){
        const { title } = req.query; 
        const regex = new RegExp(title, 'i') // i for case insensitive
        const activities = await Activity.find({title: {$regex: regex}})

        if(activities){
           return res.json({activities});
        }
        else{
            res.json({mensagem: 'Não foi possivel encontrar'});
        }
    }, 

    async list(req, res){

        let activityItems = await Activity.find();

        return res.json(activityItems)
    }, 


}
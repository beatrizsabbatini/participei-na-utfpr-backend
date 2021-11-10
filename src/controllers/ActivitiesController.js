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

    async list(req, res){
        const { title } = req.query; 
        const regex = new RegExp(title, 'i') // i for case insensitive
        let activities = await Activity.find();

        if(activities){
            if (title){
                const filteredActivities = await Activity.find({title: {$regex: regex}});
                return res.json({activities: filteredActivities});
            } else {
                return res.json({activities});
            }
        }
        else{
            res.json({mensagem: 'Não foi possivel encontrar'});
        }
    }, 


}
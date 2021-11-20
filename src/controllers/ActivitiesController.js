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
        const { title, groups } = req.query; 
        const regex = new RegExp(title, 'i') // i for case insensitive
        let activities = await Activity.find();

        if(activities){
            if (title){
              const filteredActivitiesByTitle = await Activity.find({title: {$regex: regex}});
              activities = filteredActivitiesByTitle;
            } 
            if (groups){
              if (groups.length > 0){
                const filteredActivitiesByGroups = activities.filter(activity => (
                  groups.includes(activity.category.group.toString()))
                );
                
                activities = filteredActivitiesByGroups;
              }
            }
            
            return res.json({activities});
  
        }
        else{
            res.json({mensagem: 'Não foi possivel encontrar'});
        }
    }, 

    async listByIds(req, res){
      const { ids } = req.body; 
      let activities = await Activity.find();

      if (ids){
        if (ids.length > 0){
          const filteredActivitiesByIds = activities.filter(activity => ids.includes(activity.id));
          activities = filteredActivitiesByIds;

        } else {
          activities = []
        }
        
      } else{
        activities = []
      }


      return res.json(activities);
    }, 

    async update(req, res){
      const { id } = req.query;
      const data = req.body;

      try {
        const activityUpdated = await Activity.findOneAndUpdate(({id}, data));

        return res.json(activityUpdated)
      } catch (error) {
        return res.json(error)
      }
    }


}
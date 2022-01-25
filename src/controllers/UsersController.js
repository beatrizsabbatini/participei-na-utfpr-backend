const User = require('../models/User');

module.exports = {

    async create(req, res){

      const userItem = await User.create(req.body);

      return res.json(userItem)
    }, 

    async update(req, res){
      const { _id, activityId } = req.query;

      let data = req.body;

      if (req.file){
        const { originalName: name, key, location: url = `${process.env.APP_URL}/files/${key}` } = req.file;
        const file = {
          name,
          key,
          url
        }

        if (activityId){
          const activities = JSON.parse(data.savedActivities);

          if (activities){
            const userSavedActivities = activities.map(item => {
              if (item.id !== activityId) return item;
              else return { id: item.id, certificate: file }
            });
            data = {
              ...data,
              savedActivities: userSavedActivities
            }
          }
        } else {
          data = {
            ...data,
            image: file
          }
        }
      }

      try {
        const userUpdated = await User.findByIdAndUpdate(_id, data);

        return res.json(userUpdated)
      } catch (error) {
        return res.json(error);
      }
      
  }, 

    async find(req, res){
        const { uid } = req.query; 

        try {
          const user = await User.findOne({ uid });
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
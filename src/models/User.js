const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uid: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ra: {
      type: Number,
      required: true,
    },
    campusId: {
      type: String,
      required: true,
    },
    image: {
      name: {
        type: String,
        required: false,
      },
      key: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      }
    },
    publishedActivitiesIds: {
      type: [String],
      required: false,
    },
    savedActivities: {
      id:{
        type: String,
        required: false,
      },
      participated: {
        type: Boolean,
        required: false,
      },
      certificate: {
        name: {
          type: String,
          required: false,
        },
        key: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        }
      },
    },
    group1Points: {
      type: Number,
      required: false,
    },
    group2Points: {
      type: Number,
      required: false,
    },
    group3Points: {
      type: Number,
      required: false,
    },
});


const user = mongoose.model('User', UserSchema);
module.exports = user;
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
      type: String,
      required: false,
    },
    publishedActivities: {
      type: [String],
      required: false,
    },
    savedActivities: {
      type: [String],
      required: false,
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
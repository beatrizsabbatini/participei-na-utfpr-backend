const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publisherId: {
      type: String,
      required: true,
    },
    publisherName: {
      type: String,
      required: true,
    },
    categoryGroup: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    categoryPoints: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    }
});

const activity = mongoose.model('Activity', ActivitySchema);
module.exports = activity;
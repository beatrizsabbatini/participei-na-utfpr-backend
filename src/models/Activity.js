const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
      type: String,
      required: false,
    },
    publisherId: {
      type: String,
      required: true,
    },
    publisherName: {
      type: String,
      required: true,
    },
    category: {
      id: { type: String, required: true },
      group: { type: Number, required: true },
      label: { type: String, required: true },
      points: { type: Number, required: true }
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
    image: {
      type: String,
      required: false,
    },
    hidden: {
      type: Boolean,
      required: false
    }
});

const activity = mongoose.model('Activity', ActivitySchema);
module.exports = activity;
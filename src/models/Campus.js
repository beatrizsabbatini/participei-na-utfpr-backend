const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    city: {
        type: String,
        required: true,
    },
});

const campus = mongoose.model('Campus', CampusSchema);
module.exports = campus;
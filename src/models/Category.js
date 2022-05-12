const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    group: {
        type: Number,
        required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
});

const category = mongoose.model('Category', CategorySchema);
module.exports = category;
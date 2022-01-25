const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
});

ImageSchema.pre('save', function() {
  if (!this.url || this.url === 'url'){
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
})

const image = mongoose.model('Image', ImageSchema);
module.exports = image;
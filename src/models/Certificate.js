const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
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

CertificateSchema.pre('save', function() {
  if (!this.url || this.url === 'url'){
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
})

const certificate = mongoose.model('Certificate', CertificateSchema);
module.exports = certificate;
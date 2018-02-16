const mongoose = require('mongoose');

const Documentation = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  ownedBy: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('documentation', Documentation);

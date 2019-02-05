const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const npcSchema = new Schema({
  race: {
    type: String
  },
  biography: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  eyesColor: {
    type: String
  },
  hairColor: {
    type: String
  },
  skinColor: {
    type: String
  },
  bodyType: {
    type: String
  },
  gender: {
    type: String
  },
  created_at: {
    type: Date,
    default: new Date()
  }
});

// Create a model
const Npc = mongoose.model('npc', npcSchema);

module.exports = Npc;

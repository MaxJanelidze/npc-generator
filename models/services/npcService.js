const fs = require('fs');
const path = require('path');
const Npc = require('./../npc');

module.exports = NpcService = {
  /**
   * @description Retreives all NPC records
   * @returns {Array}
   */
  getAll: async () => {
    try {
      throw new Error('Error while retreiving data');
      return await Npc.find();
    } catch (error) {
      throw new Error('Error while retreiving data');
    }
  },

  /**
   * @description Creates new NPC and returns one
   * @param {Object} data
   * @returns {Object}
   */
  create: async (data) => {
    try {
      const npc = new Npc(data);
      return await npc.save();
    } catch (error) {
      throw new Error('Error while storing data');
    }
  },

  /**
   * @description Generates NPC from dataset and saves it into the database
   * @returns {Object}
   */
  generate: async () => {
    const content = fs.readFileSync(path.join(__dirname, '../../data/data.json'));
    const data = JSON.parse(content);
    const randomNpc = {
      height: getRandomInt(50, 200),
      weight: getRandomInt(50, 150)
    };

    for (char in data) {
      let length = data[`${char}`].length - 1;
      randomNpc[`${char}`] = data[`${char}`][getRandomInt(length)]
    }

    try {
      const npc = new Npc(randomNpc);
      return await npc.save();
    } catch (error) {
      throw new Error('Error while generating data');
    }
  },

  /**
   * @description Updates NPC by ID and returns it
   * @param {String | Object} id
   * @param {Object} data
   * @returns 
   */
  updateById: async (id, data) => {
    try {
      return await Npc.findByIdAndUpdate(id, {$set: data}, {new: true});
    } catch (error) {
      throw new Error('Error while updating data');
    }
  },

  /**
   * @description Removes NPC record by ID
   * @returns {Void}
   */
  removeById: async (id) => {
    try {
      await Npc.deleteOne({_id: id});
    } catch (error) {
      throw new Error('Error while removing data');
    }
  }
};


function getRandomInt(max, min = 0) {
  min = Math.ceil(min);
  max = max === 1 ? 2 : Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
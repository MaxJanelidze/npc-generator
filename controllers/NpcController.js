const _ = require('lodash')
const {NpcService} = require('./../models/services');

module.exports = {
  get: async (req, res, next) => {
    try {
      const npcs = await NpcService.getAll();
      return res.send(npcs);
    } catch (error) {
      next(error);
    }
  },

  post: async (req, res) => {
    const data = req.npc_data;
    try {
      const newNpc = await NpcService.create({...data});
      return res.json(newNpc);
    } catch (error) {
      next(error);      
    }
  },

  generate: async (req, res) => {
    try {
      const genNpc = await NpcService.generate();
      return res.json(genNpc);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res) => {
    const data = req.npc_data;
    try {
      const updatedNpc = await NpcService.updateById(req.params.id, data);

      return res.json(updatedNpc);
    } catch (error) {
      next(error);
    }
  },

  remove: async (req, res) => {
    try {
      await NpcService.removeById(req.params.id);

      return res.send({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
};

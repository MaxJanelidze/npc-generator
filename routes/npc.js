const router = require('express-promise-router')();
const {NpcController} = require('./../controllers');
const hasData = require('./../middlewares/hasData');
const {npc} = require('./../middlewares/validation/validate');

router.route('/')
  .get(NpcController.get);

router.route('/generate')
  .get(NpcController.generate)
  .post(hasData, npc.validateBody(npc.schemas.npcSchema), NpcController.post);

router.route('/:id')
  .put(hasData, npc.validateBody(npc.schemas.npcSchema), NpcController.update)
  .delete(NpcController.remove);

module.exports = router;

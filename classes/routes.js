const express = require('express');
const classeCtrl = require('../classes/controller');
const router = express.Router();

router.post('/',classeCtrl.createClasse);
router.put('/:id',classeCtrl.updateClasse);
router.delete('/:id',classeCtrl.deleteClasse);
router.get('/:id',classeCtrl.getOneClasse);
router.get('/'+'',classeCtrl.getAllClasses);

module.exports = router;
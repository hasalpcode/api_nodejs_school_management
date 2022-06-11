const express = require('express');
const studentCtrl = require('./controller');
const router = express.Router();

router.post('/',studentCtrl.createStudent);
router.put('/:id',studentCtrl.updateStudent);
router.delete('/:id',studentCtrl.deleteStudent);
router.get('/:id',studentCtrl.getOneStudent);
router.get('/'+'',studentCtrl.getAllStudent);

module.exports = router;

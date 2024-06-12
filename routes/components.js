const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');

router.get('/', componentController.getComponents);
router.post('/', componentController.addComponent);
router.put('/:id', componentController.updateComponent);
router.delete('/:id', componentController.deleteComponent);

module.exports = router;

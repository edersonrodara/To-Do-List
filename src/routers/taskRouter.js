const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.get('/', taskController.getAlltask);

module.exports = router;
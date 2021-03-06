const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/', taskController.getAlltask);

module.exports = router;
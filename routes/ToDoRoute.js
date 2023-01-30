const express = require('express');
const {createToDo,getToDos,editToDo,deleteToDo,getToDo} = require('../controllers/todoController');
const router = express.Router();

router.get('/alltodos',getToDos);

router.post('/todo',createToDo);
router.get('/todo/:id',getToDo);
router.put('/todo/:id',editToDo);
router.delete('/todo/:id',deleteToDo);

module.exports = router;



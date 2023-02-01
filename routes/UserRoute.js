const express = require('express');
const {createUser,login} = require('../controllers/userController');
const router = express.Router();



router.post('/create',createUser);
router.post('/login',login);
// router.get('/todo/:id',getToDo);
// router.put('/todo/:id',editToDo);
// router.delete('/todo/:id',deleteToDo);

module.exports = router;

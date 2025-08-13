const express = require('express');
const { user } = require('../controllers/user');

const userRouter = express.Router();


userRouter.get('/user' , user)


module.exports = userRouter;
const express = require('express');
const { signUp } = require('../controller/auth');
const router = express.Router();




router.post('/signup', signUp); 

router.post('/signin',(req,res)=>{});

module.exports = router;
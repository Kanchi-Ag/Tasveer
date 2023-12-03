const express=require('express');
const router=express.Router();
const {registerController, loginController} =require('../controller/userController')

router.post( "/createUser",registerController);
router.post("/login",loginController)
module.exports=router;
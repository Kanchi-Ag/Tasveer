const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const jwt=require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const jwtSecret="iamafullstackdeveloper"


//Controller :- ye main business logic hota h kisi bhi function ka.

//Register Controller 

const registerController=  ([
    body("email").isEmail(),
      body("password", "Incorrect validation").isLength({ min: 5 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
  
      const salt = await bcrypt.genSalt(10);
      let securePassword =await bcrypt.hash(req.body.password,salt);
  
      try {
        await User.create({
          firstName: req.body.fname,
          lastName:req.body.lname,
          email: req.body.email,
          password: securePassword,
          phoneNumber: req.body.phonenumber,
        }).then(res.json({ success: true }));
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    });

// LoginController

    const loginController=([
        body("email").isEmail(),
        body("password", "Incorrect validation").isLength({ min: 5 }),
      ],
      async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        let email = req.body.email;
        try {
          let userData = await User.findOne({ email });
          if (!userData) {
            return res.status(400).json({ errors: "Try logging with Correct Credentials" });
          }
          const pwdCompare =await bcrypt.compare(req.body.password,userData.password)
          if (!pwdCompare) {
            return res.status(400).json({ errors: "Try logging with Correct Credentials" })
          }
    
          const data={
            user:{
              id:userData.id
            }
          }
    
          const authToken =jwt.sign(data,jwtSecret);
    
          return res.json({ success: true, authToken:authToken });
        } catch (error) {
          console.log(error);
          res.json({ success: false });
        }
      }
    );

    module.exports={registerController ,loginController}
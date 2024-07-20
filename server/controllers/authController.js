import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

// POST REGISTER
export const registerController = async (req, res) => {
  try {
    const { name, email, password, education, address } = req.body;

    // validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!education) {
      return res.send({ error: "Educational Qualification is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    // Check User
    const existingUser = await userModel.findOne({ email });

    // Check for existing student
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered, Please Login!",
      });
    }

    // Register User
    const hashedPassword = await hashPassword(password);

    // Save User
    const user = new userModel({name, email, education, address, password:hashedPassword}).save();

    re.status(201).send({
        success: true,
        message: "User Registered Successfully",
        user,
    })


  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};


// POST LOGIN
export const loginController = async(req, res)=>{
    try{
      const {email, password} = req.body;

      // Validation
      if(!email || !password){
        return res.status(404).send({
          success: false,
          message: "Invalid email or password"
        })
      }
      // check user
      const user = await userModel.findOne({email});
      const match = await comparePassword(password,user.password)
      if(!match){
        return res.status(200).send({
          success:false,
          message:"Invalid Password"
        })
      }

      const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'});
      res.status(200).send({
        success:true,
        message:"Login successfully",
        user:{
          name:user.name,
          email:user.email,
          education:user.education,
          address:user.address,
        }
      })

    }catch(error){
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Login",
        error
      })
        
    }
}

// Test Controller
export const testController=(req, res)=>{
  res.send("Protected Route")
}




// // New code
// // controllers/userController.js
// import User from "../models/userModel"
// import jwt from "jsonwebtoken";

// // Helper function to generate token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// export const registerUser = async (req, res) => {
//   const { username, email, password, role } = req.body;

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     return res.status(400).json({ message: 'User already exists' });
//   }

//   const user = await User.create({
//     username,
//     email,
//     password,
//     role,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400).json({ message: 'Invalid user data' });
//   }
// };

// // @desc    Auth user & get token
// // @route   POST /api/users/login
// // @access  Public
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401).json({ message: 'Invalid email or password' });
//   }
// };





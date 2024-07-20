import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || method post
router.post('/register', registerController);

// Login || method post
router.post('/login', loginController);

// Test Routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;


// // New code
// import express from 'express'
// import {registerUser, loginUser} from "../controllers/authController.js";

// // router object
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// export default router;
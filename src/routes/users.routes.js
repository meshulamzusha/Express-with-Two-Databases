import express from 'express';
import controller from '../controllers/users.controller.js'
import middleware from '../middlewares/user.middleware.js'

const router = express.Router();

router.post('/register', 
    middleware.validateUserFields, 
    controller.registerUser
)

export default router;
// const signup = require('../Controllers/AuthController');
    const {signup, login} = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);


module.exports = router;

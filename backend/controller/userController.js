const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, role) => {
    return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: '3d' });
};

// login user
const loginUser = async (req, res) => {
    const {username, email, password} = req.body

    try{
        const user = await User.login(username, email, password)
         // create a token with user's _id and role
        const token = createToken(user._id, user.role);
        res.status(200).json({username, token})
    }catch (error) {
        res.status(400).json({error: error.message })
    } 
}
 
//signup user
const signupUser = async (req, res) => {

    const {username, email, birthdate, password, role} = req.body

    try{
        const user = await User.signup(username, email, birthdate, password, role)
        // create a token with user's _id and role
        const token = createToken({ userId: user._id, role: user.role }); 
        res.status(200).json({username, token})
    }catch (error) {
        res.status(400).json({error: error.message })
    }

    
}


module.exports = {
    signupUser,
    loginUser
}
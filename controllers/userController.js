const User = require('../models/User');

//Create a user 
exports.createUser = async (req,res) =>{

    const {firstname,lastname,email,password} = req.body;

    if(!firstname || !lastname || !email || !password) {

        res.status(201).json({
            message : "Required details"
        })
    }

    user = {
        firstname,
        lastname,
        email,
        password
    }

    const isUser = await User.findOne({email})

    if(isUser) {
        res.status(201).json({
            sucess : true,
            message : "This user is already registor"
        });
    } else {
        const createuser = await User.create(user);
        res.status(201).json({
            sucess : true,
            createuser
        });
    }
}

//Login a user
exports.login = async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password) {
        res.status.json({
            message : "Email and password missing"
        })
    }

    const user = await User.findOne({email});

    if(!user){
        res.status(400).json({
            message : "User not found"
        });
    }

    const validate = await user.isValidatePassword(password);

    if(!validate){
        res.status(401).json({
            message : "Incorrect Password"
        })
    }

    res.status(201).json({
        message : "Validate",
        validate
    })
}
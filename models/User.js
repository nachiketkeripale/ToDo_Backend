const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String,
    },
    lastname : {
        type : String,
    },
    email : {
        type : String,
        required : [true,"Email required"],
        unique : true
    },
    password : {
        type : String,
        required : [true,"Password required"]
    },
    forgotPasswordToken : String,
    forgotPasswordExpire : Date,
    createdAt : {
        type: Date,
        default: Date.now
    }
});

// if the password is modified then before saving it will encrypt.
UserSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

// validate password method
UserSchema.methods.isValidatePassword = async function (enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
}

module.exports = mongoose.model("user",UserSchema);
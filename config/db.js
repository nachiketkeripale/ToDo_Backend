const mongoose = require('mongoose');

const connectDB = () => {
mongoose
.connect(process.env.MONOGO_URL)
.then((con)=>{
    console.log('DATABASE CONNECTED');
})
.catch((error)=>{
    console.log(error);
})
};

module.exports = connectDB;


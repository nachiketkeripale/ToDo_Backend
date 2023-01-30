require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT,()=>{
    console.log("This is running on Port 5000");
});
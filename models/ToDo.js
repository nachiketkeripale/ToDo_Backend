const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"Title required"]
    },
    tasks : {
        type : [{ type : String}]
    }
});

module.exports = mongoose.model("todo",ToDoSchema);
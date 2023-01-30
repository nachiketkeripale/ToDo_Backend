const ToDo = require('../models/ToDo');

exports.createToDo = async (req,res) => {
    try {
        const { title,tasks } = req.body;

        const toDo = {
            title,
            tasks,
        };

        const addToDo = await ToDo.create(toDo);
        res.status(201).json({
            success : true,
            message : "New ToDo Added",
            addToDo,
        });
    }
    catch(error){
        res.status(401).json(
            error,
        );
    }
}

exports.getToDos = async (req,res) => {
    try {
        const getalltodos = await ToDo.find({});
        res.status(201).json({
            success : true,
            message : "Fetched All Todos",
            getalltodos,
        });
    }
    catch(error){
        res.status(401).json(
            error,
        );
    }
}

exports.getToDo = async (req,res) => {
    try {
        const id = req.params.id
        const getalltodo = await ToDo.findById(id);
        res.status(201).json({
            success : true,
            message : "Fetched Todo",
            getalltodo,
        });
    }
    catch(error){
        res.status(401).json(
            error,
        );
    }
}

exports.editToDo = async (req,res) => {
    
    try {

        const id = req.params.id;
        const { title,tasks } = req.body;
        
        const toDo = {
            title,
            tasks,
        };

        await ToDo.findByIdAndUpdate(id,toDo);
        const updated = await ToDo.findById(id);
        res.status(201).json({
            success : true,
            message : "ToDo Updated",
            updated,
        });
    }
    catch(error){
        res.status(401).json(
            error,
        );
    }
}

exports.deleteToDo = async (req,res) => {

    try {
        const id = req.params.id;

        await ToDo.findByIdAndDelete(id);
        res.status(201).json({
            success : true,
            message : "ToDo Deleted",
        });
    }
    catch(error){
        res.status(401).json(
            error,
        );
    }
}


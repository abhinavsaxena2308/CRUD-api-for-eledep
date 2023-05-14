import mongoose, { mongo } from "mongoose";

//defining schema

const NewSchema = new mongoose.Schema({
    name:{type:String},
    roll:{type:String},
    number:{type:Number},
    email:{type:String},
    photo:{type:String}

})

const StudentModel = mongoose.model("first_year", NewSchema)

export default StudentModel
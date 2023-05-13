import StudentModel from "../models/Student.js"

class StudentController {

    static createDoc = async(req , res) =>{
        try {
            const {name , roll ,number , email , photo } = req.body
            const doc = new StudentModel({
                name:name,
                roll:roll,
                number:number,
                email:email,
                photo:photo
            })
            const result = await doc.save()
            console.log(result)
            
            res.redirect("/student")
        } catch (error) {
            console.log(error)
            
        }
    }

    //display all data
    static getAllDoc = async(req, res) =>{
        try {
            const result = await StudentModel.find()
            // console.log(result)
            res.render("index" , {data:result})
            
        } catch (error) {
            console.log(error)
        }
        
        
    }

    //edit      
    static editDoc = async(req, res) =>{
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error)
        }
    }

    
    //updating 
    static updateDocById = async (req, res) =>{
         
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id , req.body)
            
        } catch (error) {
            console.log(error)
            
        }
        res.redirect("/student")
    }


    //delete
    static deleteDocById = async (req, res) =>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
        } catch (error) {
            
            console.log(error)
        }
        res.redirect("/student")
    }

    
}

export default StudentController
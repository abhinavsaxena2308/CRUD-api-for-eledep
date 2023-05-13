import express from "express";
import connectDB from "./db/connectDB.js";
import { join } from "path";
import web from "./routes/web.js";

const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://eledep2023:eledep2023@cluster0.y1dnqfx.mongodb.net/data';

connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//static Files
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

//Set Template Engine
app.set("view engine" , "ejs")

//Load Routes
app.use("/student",web);


app.listen(port, () => {
    console.log('server started at port 3000')
 })
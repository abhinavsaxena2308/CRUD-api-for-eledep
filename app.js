import express from "express";
import connectDB from "./db/connectDB.js";
import { join } from "path";
import web from "./routes/web.js";
import dot from "dotenv";

const app = express()
dot.config().parsed;
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL


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
    console.log('server started at port 3000');
    // console.log(dot.config());
 })

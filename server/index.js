import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser  from "body-parser";
import dotenv from "dotenv";

// routes import
import studentRoutes from "./routes/student.js";
import adminRoutes from "./routes/admin.js";
import loginRoutes from "./routes/auth.js";



dotenv.config();
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(cors({origin : "*",}));
/// app set up


app.use(bodyParser.json({limit :"50mb",extended : true}));
app.use(bodyParser.urlencoded({limit :"50mb",extended : true}));

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

//app.use("/users",userRoutes);
//All routes will be used here
app.use("/student",studentRoutes);
app.use("/admin",adminRoutes);
app.use("/login",loginRoutes);

app.get("/",(req,res)=>
{
    res.send("hello world");
})

app.listen(process.env.PORT || 3000,()=>{
  console.log("server started");
 });
 
import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    rollno : {type : String , required : true},
    password : {type: String, required : true},
});
const Student = mongoose.model("Student",studentSchema);
export default Student;
import mongoose from "mongoose";
const complainSchema = mongoose.Schema({
    rollno : {type : String , required : true},
    date:{
        type : Date,required : true},
    department : {type : String , required : true},
    subject : {type : String , required : true},
    message : {type : String , required : true},
    resolved: {type: Boolean, default : false},
    resolve : {type : String}
});
const Complain = mongoose.model("Complain",complainSchema);
export default Complain;
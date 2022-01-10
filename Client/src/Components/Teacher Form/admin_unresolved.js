import React, { useEffect, useState } from "react";
import axios from "axios";
import "../General Complaints/general_complain.css";
import AdminUnresoledList from "./admin_unresolved_list";


const url = "http://localhost:3000/admin/";
const Admin_Unresolved = () => {
    const [complains,setcomplains] = useState([]);
    const Admin = localStorage.getItem("mydepartment");
    useEffect(()=>
    {
      // async function getComplains()
      // {
      //    const res =  await axios.get(url + "Sport");
      //    setcomplains(res.data);
      // }
      // getComplains();
    async function getComplains()
      {
        try {
          const options = {
              url: url + Admin,
              method : "get",
              headers :{
                  'authorization' : "Bearer " + localStorage.getItem("mytoken"),
              }
          }
        const res = await axios(options);
        setcomplains(res.data);
      } catch (error) {
        window.alert("Please Login");
      }
      }
      getComplains();
    },[]);
  return (
    <div class="container_general_complains">
      <div class="content_box_general_complains">
        <div class="search_box_general_complains">
          <form action="" className="general_complains_form">
            <div class="serach_by_subject_option">
              <label for="complain_subject" class="class_title_general">
                Choose Subject
              </label>
              <input
                class="form-input_general"
                type="text"
                placeholder="eg.cafe-food"
                id="complain_subject"
                required
              />
            </div>
          </form>
        </div>

        <div class="complain_content">
          <div class="complain_content_title">
            <div class="roll_no_general">Roll No</div>
            <div class="subject_general">Subject</div>
            <div class="date_general">Date</div>
            <div class="details_general">Resolve</div>
          </div>

          {/* <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List /> */}
          {complains.map((complain)=>
          {
            return(
              <AdminUnresoledList
              complain = {complain}
              id = {complain._id}
              rollno = {complain.rollno}
              subject = {complain.subject}
              date = {complain.date}
            />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin_Unresolved;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_complain.css";
import Admin_Complain_List from "./admin_complain_list";
const url = "http://localhost:3000/admin/history/"; 
const url1 = "http://localhost:3000/admin/"; 
const Admin_Complain = () => {
  const [history,sethistory] = useState([]);
  const [get,setget] = useState(false);
  const admin = localStorage.getItem("mydepartment");
 useEffect(()=>
 {
   async function getHistory()
   {
     try {
       //const department = localStorage.getItem(department);
      //  const res = await axios.get(url + "Sport");
      //  sethistory(res.data);
      const options = {
        url: url + admin,
        method : "get",
        headers :{
            'authorization' : "Bearer " + localStorage.getItem("mytoken"),
        }
    }
      const res = await axios(options);
      sethistory(res.data);
     } catch (error) {
       window.alert("Please Login");
     }
   }
   getHistory();
 },[get])
 async function handleClick(id)
    {
      try {
        // const res = await axios.delete(url1 + id);
        // console.log(res);
        // setget(!get);
        const option1 = {
          url: url1 + id,
          method: 'delete',
          headers: {
            'authorization' : "Bearer " + localStorage.getItem("mytoken"),
          },
          data : id
        };
        
        const res = await axios(option1);
        console.log(res.data);
        setget(!get);
      } catch (error) {
        window.alert("Please Login");
      }
    }
  return (
    <div class="container_admin_complains">
      <div class="content_box_admin">
        <div class="search_box_admin">
          <form action="" className="admin_complains">
            {/* <div class="filter_option_admin">
              <label for="depart" class="label_title_admin">
                Filter By department
              </label>
              <select id="depart" name="" class="form-input_admin">
                <option value="sports" default>
                  Sports
                </option>
                <option value="meal">Meal</option>
                <option value="Library">Library</option>
                <option value="Injury">Injury</option>
              </select>
            </div> */}
            <div class="filter_option_student_2">
              <div class="serach_by_subject_option_2">
                <label for="complain_subject" class="class_title_general_2">
                  Choose Subject
                </label>
                <input
                  class="form-input_general_2"
                  type="text"
                  placeholder="eg.cafe-food"
                  id="complain_subject"
                  required
                />
              </div>
            </div> 
          </form>
        </div>

        <div class="complain_content_admin">
          <div class="complain_content_title_admin">
            <div class="roll_no_admin space1">Roll No</div>
            <div class="subject_admin space2">Subject</div>
            <div class="department_admin space3">Date</div>
          </div>

          {/* <Admin_Complain_List />
          <Admin_Complain_List />
          <Admin_Complain_List />
          <Admin_Complain_List /> */}
          {history.map((history)=>
        {
          return(
            <Admin_Complain_List
              key={history._id}
              id = {history._id}
              subject={history.subject}
              rollno={history.rollno}
              date={history.date}
              need = {handleClick}
           />
          );
        })}
        </div>
      </div>
    </div>
  );
};
export default Admin_Complain;

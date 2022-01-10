import React, { useEffect, useState } from "react";
import Student_Complain_List from "./student_complain_list";
import "./student_complain.css";
import axios from "axios";
const url = "http://localhost:3000/student/history/";
const url1 = "http://localhost:3000/student/";
const Student_Complains = () => {
    const [history,sethistory] = useState([]);
    const [get,setget] = useState(false);
    const rollno = localStorage.getItem("myrollno");
    useEffect(()=>
    {
      async function getHistory()
      {
        try {
          //const rollno = localStorage.getItem(rollno);
          // const res = await axios.get(url + rollno);
          // sethistory(res.data);
          const options = {
            url: url  + rollno,
            method : "get",
            headers :{
                'authorization' : "Bearer " + localStorage.getItem("mytoken"),
            }
        }
        const res = await axios(options);
        console.log(res);
        sethistory(res.data);
        } catch (error) {
          console.log(error);
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
    <div class="container_student_complains">
      <div class="content_box_student">
        <div class="search_box_student">
          <form action="" className="student_complains">
            {/* <div class="filter_option_student_2">
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
            </div> */}
            <div class="filter_option_admin width2">
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
            </div> 
          </form>
        </div>

        <div class="complain_content_student">
          <div class="complain_content_title_student">
            <div class="roll_no_student space4">Department</div>
            <div class="subject_student space5">Subject</div>
            <div class="department_student space6">Date</div>
          </div>
          {/* <Student_Complain_List />
          <Student_Complain_List />
          <Student_Complain_List />
          <Student_Complain_List /> */}
          {history.map((history)=>
          {
            return(
              <Student_Complain_List
              key={history._id}
              id = {history._id}
              subject={history.subject}
              depart={history.department}
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
export default Student_Complains;


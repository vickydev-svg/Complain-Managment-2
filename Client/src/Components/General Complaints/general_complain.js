import React, { useEffect, useState } from "react";
import axios from "axios";
import "./general_complain.css";
import General_Complain_List from "./complain";


const url = "http://localhost:3000/student";
const General_Complain = () => {
  const [complains,setcomplains] = useState([]);
   const [need,setneed] = useState([]);
  useEffect(()=>
  {
    async function getComplains()
    {
      //  const res =  await axios.get(url);
      //  setneed(res.data);
      //  setcomplains(res.data);
      try {
        const options = {
            url: url,
            method : "get",
            headers :{
                'authorization' : "Bearer " + localStorage.getItem("mytoken"),
            }
        }
       const res = await axios(options);
       console.log(res);
       setneed(res.data);
       setcomplains(res.data);
     } catch (error) {
      window.alert("Please Login");
     }
    }
    getComplains();
  },[]);

  async function handleChange(event)
  {
      const {name,value} = event.target;
      if(value === "No Filter")
      {
        setcomplains(need);
      }
      else{
        const res = need.filter((complain)=>
        {
          return (complain.department === value);
        })
        setcomplains(res);
      }
  }
  return (
    <div class="container_general_complains">
      <div class="content_box_general_complains">
        <div class="search_box_general_complains">
          <form action="" className="general_complains_form">
            <div class="filter_option">
              <label for="depart" class="label_title_general">
                Filter By department
              </label>
              <select id="depart" name="" class="form-input_general" onChange={handleChange}>
                <option value="No Filter" default>
                  No Filter
                </option>
                <option value="Sport">
                  Sport
                </option>
                <option value="Meal">Meal</option>
                <option value="Academic">Academic</option>
                <option value="Library">Library</option>
                <option value="Injury">Injury</option>
              </select>
            </div>

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
            <div class="department_general">Department</div>
            <div class="date_general">Date</div>
            <div class="details_general">Details</div>
          </div>

          {/* <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List /> */}
          {complains.map((complain)=>
          {
            return(
              <General_Complain_List
              complain = {complain}
              id = {complain._id}
              rollno = {complain.rollno}
              subject = {complain.subject}
              department = {complain.department}
              date = {complain.date}
            />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default General_Complain;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./teacher_form.css";
const url = "http://localhost:3000/student/complain/" ;
const url1 = "http://localhost:3000/admin/resolve/" ;
const Teacher_Form = () => {
  const id = useParams().id;
  const [Complain,setComplain] = useState({
    rollno: "",
    department: "",
    message: "",
    resolve: "",
    date: "",
  });
  // useEffect(()=>
  // {
  //   async function getdetails()
  //   {
  //     try {
  //       const res = await axios.get(url + id);
  //       setComplain(res.data);
  //       //console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getdetails();
  // },[])
  useEffect(()=>
  {
    async function getdetails()
    {
      try {
        const option1 = {
          url: url + id,
          method: 'get',
          headers: {
            'authorization' : "Bearer " + localStorage.getItem("mytoken"),
          },
        };
        
        const res = await axios(option1);
        setComplain(res.data);
      } catch (error) {
        window.alert("Please Login");
      }
    }
    getdetails();
  },[])
  function handleChange(event)
  {
    const {name,value} = event.target;
    setComplain((prevValue)=>
      {
        return ({...prevValue, [name]:value});
      })
  }
  async function handleClick(event)
  {
    // try {
    //   event.preventDefault(); 
    //   const res = await axios.post(url1 + id,{resolve : Complain.resolve});
    //  // console.log(res);
    //  window.location.href =  "/admin/complains";
    // } catch (error) {
    //   console.log(error);
    // }
    event.preventDefault(); 
        try {
          // const res =  await axios.post(url,Complain);
          // console.log(res);
          const option1 = {
            url: url1 + id,
            method: 'post',
            headers: {
              'authorization' : "Bearer " + localStorage.getItem("mytoken"),
            },
            data : {resolve : Complain.resolve}
          };
        const res = await axios(option1);
        //console.log(res.data);
        window.location.href =  "/admin/complains";
        } catch (error) {
          window.alert("Please Login");
        }
  }
  return (
    <div className="body_teacher">
      <div class="container_form_2">
        <form action="" className="teacher_forms_2">
          <div class="id_date_2">
            <div class="secy_id_2">
              <label for="secy_id" class="class_title_2">
                Rollno
              </label>
              <input
                class="form-input_2 for_width_2"
                type="text"
                placeholder="secy_id"
                id="secy_id"
                name = "rollno"
                value={Complain.rollno}
                required
              />
            </div>

            <div class="date_2">
              <label for="secy_id" class="class_title_2">
                Date
              </label>
              <input 
               type="text" 
               class="form-input_2" id="date" 
               name = "date"
               value={Complain.date.split("T")[0]} 
               required />
            </div>
          </div>
          {/* <div class="related_to_2">
            <label for="related_to" class="class_title_2">
              Subject
            </label>
            <select id="related_to" name="" class="form-input_2">
              <option value="sports" default>
                Sports
              </option>
              <option value="meal">Meal</option>
              <option value="Library">Library</option>
              <option value="Injury">Injury</option>
            </select>
          </div> */}

          <div class="complain_subject_2">
            <label for="complain_subject" class="class_title_2">
              Complain Subject
            </label>
            <input
              class="form-input_2"
              type="text"
              placeholder="eg.cafe-food"
              id="complain_subject"
              name="subject"
              value={Complain.subject}
              required
            />
          </div>

          <div class="complain_text_2">
            <label for="complain_text" class="class_title_2">
              Complain
            </label>

            <textarea
              id="complain_text"
              name=""
              rows="8"
              cols="50"
              class="form-input_2 text_area_2"
              placeholder="Complain_Text"
              name="message"
              value={Complain.message}
            ></textarea>
          </div>

          <div class="complain_text_2">
            <label for="Resolved_Complain" class="class_title_2">
              Resolve Complain
            </label>

            <textarea
              id="Resolved_Complain"
              name=""
              rows="8"
              cols="50"
              class="form-input text_area"
              placeholder="Resolved Text"
              class="form-input_2 text_area_2"
              name="resolve"
              value = {Complain.resolve}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="button-teacher" type="submit" onClick  = {handleClick}>
            Resolve Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teacher_Form;

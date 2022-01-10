import React, { useState } from "react";
import axios from "axios";
import "./student_form.css";


const url = "http://localhost:3000/student/add" ;
    const Student_Form = () => {
      const rollno = localStorage.getItem("myrollno");
      const [Complain,setComplain] = useState({
        rollno : rollno,
        title : "",
        department: "",
        message: "",
        date: "",
      });

    async function handleSubmit(event)
    {
        event.preventDefault(); 
        try {
          // const res =  await axios.post(url,Complain);
          // console.log(res);
          const option1 = {
            url: url,
            method: 'post',
            headers: {
              'authorization' : "Bearer " + localStorage.getItem("mytoken"),
            },
            data : Complain
          };
        const res = await axios(option1);
        //console.log(res.data);
          setComplain({
            department: "",
            subject: "",
            message: "",
            date: "",
          });
        } catch (error) {
          window.alert("Please Login");
        }
    }
    function handleChange(event)
    {
        
        const {name,value} = event.target;
        setComplain(prevValue=>
          {
            return ({
              ...prevValue,[name]:value, // to store previous value and change only event
            })
          })
        
    }
  return (
    <div className="body_student_1">
      <div class="container_form_1">
        <form action="" className="student_form_1">
          <div class="id_date_1">
            <div class="secy_id_1">
              <label for="secy_id" class="class_title_1">
                Rollno
              </label>
              <input
                class="form_student_1 for_width_1"
                type="text"
                placeholder="Rollno"
                id="secy_id"
                name="rollno"
                value= {rollno} 
                required
              />
            </div>

            <div class="date_1">
              <label for="secy_id" class="class_title_1">
                Date
              </label>
              <input type="date" class="form_student_1" id="date" name="date" required value={Complain.date} onChange={handleChange}/>
            </div>
          </div>
          <div class="related_to_1">
            
            <label for="related_to" class="class_title_1">
              Department
            </label>
            <select id="related_to" name="department" class="form_student_1" value={Complain.department} onChange={handleChange}>
              <option value="" disabled selected hidden>
              Choose a dept
              </option>
              <option value="Sport">
                Sport
              </option>
              <option value="meal">Meal</option>
              <option value="Library">Library</option>
              <option value="Injury">Injury</option>
            </select>
          </div>

          <div class="complain_subject_1">
            <label for="complain_subject" class="class_title_1">
              Complain Subject
            </label>
            <input
              class="form_student_1"
              type="text"
              placeholder="eg.cafe-food"
              id="complain_subject"
              name="subject"
              value={Complain.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div class="complain_text_1">
            <label for="complain_text_1" class="class_title_1">
              Complain
            </label>

            <textarea
              id="complain_text"
              name=""
              rows="8"
              cols="50"
              class="form_student_1 text_area_1"
              name = "message"
              value={Complain.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button class="student_button_1" type="submit" onClick={handleSubmit}>
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student_Form;

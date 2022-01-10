import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Teacher Form/teacher_form.css";


const url = "http://localhost:3000/student/complain/" ;
const Detailspage = () => {
  const id = useParams().id;
  const [Complain,setComplain] = useState({
    rollno: "",
    department: "",
    message: "",
    date: "",
    resolve:"",
    resolved : false,
  });
  useEffect(()=>
  {
    async function getdetails()
    {
      try {
        // const res = await axios.get(url + id);
        // setComplain(res.data);
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
                value={Complain.rollno}
              />
            </div>

            <div class="date_2">
              <label for="secy_id" class="class_title_2">
                Date
              </label>
              <input type="text" class="form-input_2" id="date" required value={Complain.date.split("T")[0]} />
            </div>
          </div>
          <div class="related_to_2">
            <label for="related_to" class="class_title_2">
              department
            </label>
            <input id="related_to" type = "text" class="form-input_2" value={Complain.department}>
            </input>
          </div>

          <div class="complain_subject_2">
            <label for="complain_subject" class="class_title_2">
              Complain Subject
            </label>
            <input
              class="form-input_2"
              type="text"
              placeholder="eg.cafe-food"
              id="complain_subject"
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
              value={Complain.message}
            ></textarea>
          </div>

          {Complain.resolved && <div class="complain_text_2">
            <label for="Resolved_Complain" class="class_title_2">
              Resolved Complain
            </label>

            <textarea
              id="Resolved_Complain"
              name=""
              rows="8"
              cols="50"
              class="form-input text_area"
              placeholder="Resolved Text"
              class="form-input_2 text_area_2"
              value = {Complain.resolve}
            ></textarea>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default Detailspage;

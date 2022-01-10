import React, { useEffect, useState } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
const Student_Complain_List = ({id, depart, subject, date,need}) => {
  date = date.split("T")[0];
  
  return (
    <div class="complain_content_desc_student">
      <div class="student_part_1">
        <div class="depart_student space1">{depart}</div>
        <div class="subject_student space2">{subject}</div>
        <div class="date_student space3">{date}</div>
      </div>
      <div class="student_btn">
        <Link className = "student_btn_1" to={"/student/complainDetail/"+id}> Details </Link>
        <a onClick={()=>
        {
          need(id);
        }} class="student_btn_2">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Student_Complain_List;

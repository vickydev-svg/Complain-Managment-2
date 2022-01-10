import React from "react";
import { Link } from "react-router-dom";
const General_Complain_List = ({ id, rollno, subject, department, date}) => {
  date = date.split("T")[0];
  return (
    <div class="complain_content_desc">
      <div class="roll_general">{rollno}</div>
      <div class="sub_general">{subject}</div>
      <div class="depart_general">{department}</div>
      <div class="date_general">{date}</div>
      <div class="deta_general">
      <Link className = "details_anchor" to={"/student/complainDetail/"+id}> Details </Link>
      </div>
    </div>
  );
};

export default General_Complain_List;

import React from "react";
import { Link } from "react-router-dom";
const Admin_Complain_List = ({ id, rollno, subject, date,need}) => {
  date = date.split("T")[0];
  return (
    <div class="complain_content_desc_admin">
      <div class="admin_part_1">
        <div class="depart_admin space1">{rollno}</div>
        <div class="subject_admin space2">{subject}</div>
        <div class="date_admin space3">{date}</div>
      </div>
      <div class="admin_btn">
        {/* <a href="" class="admin_btn_1">
          Details
        </a> */}
        <Link className = "admin_btn_1" to={"/admin/complainDetail/"+id}> Details </Link>
        {/* <a href="" class="admin_btn_2">
          Delete
        </a> */}
        <a onClick={()=>
        {
          need(id);
        }} class="admin_btn_2">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Admin_Complain_List;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../General Complaints/general_complain.css";
import { Link } from "react-router-dom";

const url = "http://localhost:3000/student";
const  List= ({ id, rollno, subject, date}) => {
    date = date.split("T")[0];
    return (
       <div>
      <div class="complain_content_desc">
        <div class="roll_general">{rollno}</div>
        <div class="sub_general">{subject}</div>
        <div class="date_general">{date}</div>
        <div class="deta_general">
        {/* <Link className = "details_anchor" to={"//complainDetail/"+id}> Resolve </Link> */}
        <Link className = "details_anchor" to={"/admin/resolve/"+id}> Resolve </Link></div>
        </div>
      </div>
    );
};

export default List;

import React from "react";
import "./admin_complain.css";
import Admin_Complain_List from "./admin_complain_list";
const Admin_Complain = () => {
  return (
    <div class="container_admin_complains">
      <div class="content_box_admin">
        <div class="search_box_admin">
          <form action="" className="admin_complains">
            <div class="filter_option_admin">
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

        <div class="complain_content_admin">
          <div class="complain_content_title_admin">
            <div class="roll_no_admin space1">Roll No</div>
            <div class="subject_admin space2">Subject</div>
            <div class="department_admin space3">Date</div>
          </div>

          <Admin_Complain_List />
          <Admin_Complain_List />
          <Admin_Complain_List />
          <Admin_Complain_List />
        </div>
      </div>
    </div>
  );
};
export default Admin_Complain;

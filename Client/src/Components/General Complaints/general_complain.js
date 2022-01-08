import React from "react";
import "./general_complain.css";
import General_Complain_List from "./complain";
const General_Complain = () => {
  return (
    <div class="container_general_complains">
      <div class="content_box_general_complains">
        <div class="search_box_general_complains">
          <form action="" className="general_complains_form">
            <div class="filter_option">
              <label for="depart" class="label_title_general">
                Filter By department
              </label>
              <select id="depart" name="" class="form-input_general">
                <option value="sports" default>
                  Sports
                </option>
                <option value="meal">Meal</option>
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

          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
          <General_Complain_List />
        </div>
      </div>
    </div>
  );
};

export default General_Complain;

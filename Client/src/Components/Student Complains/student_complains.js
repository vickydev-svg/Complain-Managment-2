import React from "react";
import Student_Complain_List from "./student_complain_list";
import "./student_complain.css";

const Student_Complains = () => {
  return (
    <div class="container_student_complains">
      <div class="content_box_student">
        <div class="search_box_student">
          <form action="" className="student_complains">
            <div class="filter_option_student_2">
              <div class="serach_by_subject_option_2">
                <label for="complain_subject" class="class_title_general_2">
                  Choose Subject
                </label>
                <input
                  class="form-input_general_2"
                  type="text"
                  placeholder="eg.cafe-food"
                  id="complain_subject"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div class="complain_content_student">
          <div class="complain_content_title_student">
            <div class="roll_no_student space4">Department</div>
            <div class="subject_student space5">Subject</div>
            <div class="department_student space6">Date</div>
          </div>
          <Student_Complain_List />
          <Student_Complain_List />
          <Student_Complain_List />
          <Student_Complain_List />
        </div>
      </div>
    </div>
  );
};

export default Student_Complains;

import React from "react";
import "./student_form.css";
const Student_Form = () => {
  return (
    <div className="body_student_1">
      <div class="container_form_1">
        <form action="" className="student_form_1">
          <div class="id_date_1">
            <div class="secy_id_1">
              <label for="secy_id" class="class_title_1">
                Secy_Id
              </label>
              <input
                class="form_student_1 for_width_1"
                type="text"
                placeholder="secy_id"
                id="secy_id"
                required
              />
            </div>

            <div class="date_1">
              <label for="secy_id" class="class_title_1">
                Date
              </label>
              <input type="date" class="form_student_1" id="date" required />
            </div>
          </div>
          <div class="related_to_1">
            <label for="related_to" class="class_title_1">
              Choose a Subject
            </label>
            <select id="related_to" name="" class="form_student_1">
              <option value="sports" default>
                Sports
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
            ></textarea>
          </div>
          <button class="student_button_1" type="submit">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student_Form;

import React from "react";
import "./teacher_form.css";
const Teacher_Form = () => {
  return (
    <div className="body_teacher">
      <div class="container_form_2">
        <form action="" className="teacher_forms_2">
          <div class="id_date_2">
            <div class="secy_id_2">
              <label for="secy_id" class="class_title_2">
                Secy_Id
              </label>
              <input
                class="form-input_2 for_width_2"
                type="text"
                placeholder="secy_id"
                id="secy_id"
                required
              />
            </div>

            <div class="date_2">
              <label for="secy_id" class="class_title_2">
                Date
              </label>
              <input type="date" class="form-input_2" id="date" required />
            </div>
          </div>
          <div class="related_to_2">
            <label for="related_to" class="class_title_2">
              Choose a Subject
            </label>
            <select id="related_to" name="" class="form-input_2">
              <option value="sports" default>
                Sports
              </option>
              <option value="meal">Meal</option>
              <option value="Library">Library</option>
              <option value="Injury">Injury</option>
            </select>
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
            ></textarea>
          </div>

          <div class="complain_text_2">
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
            ></textarea>
          </div>

          <button className="button-teacher" type="submit">
            Resolve Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teacher_Form;

import "./App.css";
import Student_Form from "./Components/Student Form/student_form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home section/home";
import Home_Nav from "./Components/Navs/home_nav";
import Admin_Nav from "./Components/Navs/Admin_Nav"
import Student_Nav from "./Components/Navs/Student_Nav";
import Teacher_Form from "./Components/Teacher Form/teacher_form";
import General_Complain from "./Components/General Complaints/general_complain";
import Admin_Complain from "./Components/Admin Complains/admin_complains.js";
import Simple_Login from "./Components/Simple Login/simple_login";
import Student_Complains from "./Components/Student Complains/student_complains";
import Admin_Login from "./Components/Simple Login 2/admin_login";
import Detailspage from "./Components/DetailsPage/detailspage";
import Admin_Unresolved from "./Components/Teacher Form/admin_unresolved";
function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
            <Route path="/"  element= {<><Home_Nav /> <Home /></>}   />
            <Route path="/student" element= {<><Student_Nav /> <Home /></>} />
            <Route path="/student/complains" element= {<> <Student_Nav /><General_Complain /></>} />
            <Route path="/student/newcomplain" element= {<><Student_Nav /> <Student_Form /></>} />
            <Route path="/student/history" element= {<><Student_Nav /> <Student_Complains/></>} />
            <Route path="/admin" element = {<><Admin_Nav /> <Home /></>} /> 
            <Route path="/student/complainDetail/:id" element= {<><Student_Nav /> <Detailspage/></>} />
            <Route path="/admin/history" element= {<><Admin_Nav /> <Admin_Complain /></>} />
            <Route path="/admin/complains" element= {<><Admin_Nav /> <Admin_Unresolved/></>} />
            <Route path="/admin/complainDetail/:id" element= {<><Admin_Nav /> <Detailspage /></>} />
            <Route path="/admin/resolve/:id" element= {<><Admin_Nav /> <Teacher_Form /></>} />
            <Route path="/student/login" element= {<><Simple_Login /></>} />
            <Route path="/admin/login" element= {<><Admin_Login /></>} />
            </Routes>
      </BrowserRouter>
      {/* <Admin_Nav />
      <Teacher_Form /> */}
      {/* <Simple_Login /> */}
      {/* <Teacher_Form /> */}
      {/* <Admin_Login /> */}
    </>
  );
}

export default App;

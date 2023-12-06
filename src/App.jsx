import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
//import Navbar from "./components/navbar/navbar";
// import { Navbar_data } from "./data/data";
import {
  Home_data,
  Navbar_data,
  About_us,
  Our_services,
  Services_details,
  Our_team,
  Instructors_data,
  Contact_us,
} from "./data/data";
import AboutUs from "./components/aboutUs/aboutUs";
import OurServices from "./pages/ourServices/ourServices";
import ServicesDetails from "./pages/servicesDetails/servicesDetails";
import OurTeam from "./pages/ourTeam/ourTeam";
import Instructors from "./pages/instructors/instructors";
import ContactUs from "./components/contactUs/contactUs";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <>
      {/* <Navbar
        data={Navbar_data[0]}
        data2={Navbar_data[1]}
        data3={Navbar_data[2]}
      /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={Home_data[0]}
              data2={Home_data[1]}
              data3={Home_data[2]}
              data4={Home_data[3]}
              data5={Home_data[4]}
              data6={Home_data[5]}
              data7={Home_data[6]}
              data8={Home_data[7]}
              data9={Home_data[8]}
            />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUs
              data={About_us[0]}
              data2={About_us[1]}
              data3={About_us[2]}
              data4={About_us[3]}
            />
          }
        />
        <Route
          path="/our-services"
          element={<OurServices data={Our_services[0]} />}
        />
        <Route
          path="/services-details"
          element={
            <ServicesDetails
              data={Services_details[0]}
              data2={Services_details[1]}
              data3={Services_details[2]}
            />
          }
        />
        <Route
          path="/team"
          element={
            <OurTeam
              data={Our_team[0]}
              data2={Our_team[1]}
              data3={Our_team[2]}
            />
          }
        />
        <Route
          path="/instructors"
          element={<Instructors data={Instructors_data[0]} />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs data={Contact_us[0]} />}
        />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

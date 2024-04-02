//import { lazy } from "react";
import { useEffect } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import ScrollTop from "./components/scrollTop/scrollTop";
//import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/notFound/notFound";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import Jobs from "./components/jobs/jobs";
import JobDetails from "./components/jobsDetails/jobDetails";
import OurClients from "./components/ourClients/ourClients";
import ClientsDetails from "./components/clientsDetails/clientsDetails";
import Gallery from "./components/gallery/gallery";
import Achivment from "./components/achivment/achivment";
import Contact from "./components/contact/contact";
import OurTeam from "./components/ourTeam/outTeam";
import License from "./components/license/license";
import SelectionDetails from "./components/selectionDetails/selectionDetails";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    AOS.init({ duration: "2000", delay: "0" });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/clients" element={<OurClients />} />
        <Route path="/clients-details/:id" element={<ClientsDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/papers" element={<Achivment />} />
        <Route path="/license" element={<License />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/selection-details" element={<SelectionDetails />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;

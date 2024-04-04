import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import FooterArea from "./components/footerArea/footerArea";
import Home from "./components/home/home";
import ContactPage from "./pages/contactPage/contactPage";
import TeamPage from "./pages/teamPage/teamPage";
import TeamDetailsPage from "./pages/teamDetailsPage/teamDetailsPage";
import Destination from "./pages/destination/destination";
import DestinationDetailsPage from "./pages/destinationDetailsPage/destinationDetailsPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(location); // Smooth scrolling
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<TeamPage />} path="/team" />
        <Route element={<TeamDetailsPage />} path="/team-details" />
        <Route element={<Destination />} path="/destination" />
        <Route
          element={<DestinationDetailsPage />}
          path="/destination-details"
        />
      </Routes>
      <FooterArea />
    </>
  );
}

export default App;

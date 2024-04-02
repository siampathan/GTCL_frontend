// import { useState, useEffect } from "react";
// import axios from "axios";
// import { API_Link } from "../../api/api";

const BreadSection = ({ menu }) => {
  //   const [activeMenu, setActiveMenu] = useState("Loading...");

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const getData = async () => {
  //     const response = await axios.get(`${API_Link}/menu`);
  //     const menuData = response.data;

  //     const activeItem = menuData.find((item) => item.active === 1);

  //     if (activeItem) {
  //       setActiveMenu(activeItem.menu);
  //     } else {
  //       setActiveMenu("No active menu found.");
  //     }
  //   };

  return (
    <div className="breadcrumb-section">
      <h2>{menu}</h2>
    </div>
  );
};

export default BreadSection;

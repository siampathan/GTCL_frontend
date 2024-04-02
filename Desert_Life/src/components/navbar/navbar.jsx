import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

import { API_Link } from "../../api/api";
import BG_Logo from "../../assets/img/logo.svg";
import "./navbar-style.css";

const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/menu`);
    setData(response.data);
  };

  return (
    <div className="navbar shadow">
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className="sidebar__logo">
            <img src={BG_Logo} alt="Logo" />
          </div>
          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="link__wrap">
            <ul>
              {data.map((item, indx) => {
                return indx < 8 ? (
                  <li data-bs-dismiss="offcanvas" key={item.id}>
                    <NavLink to={`/${item.slug}`}>{item.menu}</NavLink>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="logo">
        <NavLink to="/">
          <img src={BG_Logo} alt="" />
        </NavLink>
      </div>

      <div className="content_text">
        <ul>
          {data.map((item, indx) => {
            return indx < 8 ? (
              <li data-bs-dismiss="offcanvas" key={item.id}>
                <NavLink to={`/${item.slug}`}>{item.menu}</NavLink>
              </li>
            ) : (
              ""
            );
          })}
        </ul>

        <div className="wrap_line">
          <div
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

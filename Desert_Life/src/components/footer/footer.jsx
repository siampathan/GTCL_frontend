import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_Link } from "../../api/api";

import "./footer-style.css";
import BG_Logo from "../../assets/img/logo.svg";

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/contact`);
    setData(response.data);
  };

  const getDate = () => {
    const setDate = new Date();
    const year = setDate.getFullYear();
    return year;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {data?.map((items) => {
            return (
              <div className="col-lg-3" key={items.id}>
                <div className="footer__widget">
                  <div className="logo_wrap rounded">
                    <img
                      src={BG_Logo}
                      className="footer__widget-logo pr-4"
                      alt="Smooth"
                    />
                  </div>
                  <p>{items.address}</p>
                  <div className="footer__widget-contact">
                    <i className="fa fa-phone" />
                    <p>{items.phone}</p>
                  </div>
                  <div className="footer__widget-contact">
                    <i className="fa fa-envelope" />
                    <p>{items.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col-6 col-lg-2 col-sm-3">
            <div className="footer__widget">
              <h4 className="footer__widget-title">Quick Links</h4>
              <ul className="footer__widget-linklist">
                <li>
                  <a href="/about" className="fw-bolder">
                    About
                  </a>
                </li>
                <li>
                  <Link to="/jobs" className="fw-bolder">
                    Our Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="fw-bolder">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link to="/license" className="fw-bolder">
                    License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2 col-sm-3">
            <div className="footer__widget">
              <h4 className="footer__widget-title">Help</h4>
              <ul className="footer__widget-linklist">
                <li>
                  <a href="/contact" className="fw-bolder">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-sm-3">
            <div className="footer__widget">
              <h4 className="footer__widget-title">Follow us</h4>
              <ul className="footer__widget-network">
                <li>
                  <a href="#" className="footer__widget-network-link">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__widget-network-link">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__widget-network-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__widget-network-link">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="footer__subfooter">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <Link to="https://www.account-care.com/"> © Softin </Link>
                    {` | Web Design BD ${getDate()}  All Rights Reserved.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

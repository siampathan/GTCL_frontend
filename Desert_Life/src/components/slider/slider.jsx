import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./slider-style.css";

import axios from "axios";
import { API_Link } from "../../api/api";

const Slider = ({ dataInfo }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const response = await axios.get(`${API_Link}/slider`);
  //   setData(response.data);
  // };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {dataInfo?.map((items, indx) => {
          return (
            <div
              className={`carousel-item ${indx === 0 ? "active" : ""}`}
              data-bs-interval="5000"
              data-bs-pause="false"
              key={items.id}
            >
              <img
                src={items.url}
                className="d-block w-100"
                alt={items.image}
              />
              <div className="carousel-caption d-md-block pr-4 mr-4">
                <h5>{items.title}</h5>
                <p className="h3">{items.sub_title}</p>
                <button className="btn btn-primary btn-lg h2 mr-2">
                  <Link to="/about" className="text-white">
                    About
                  </Link>
                </button>
                <button className="btn btn-secondary btn-lg h2">
                  <Link to="/contact" className="text-white">
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

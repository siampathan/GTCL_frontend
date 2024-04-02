//import NeedHelp from "../needHelp/needHelp";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import { API_Link } from "../../api/api";

import "./gallery-style.css";
import BreadSection from "../breadSection/breadSection";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/gallery`);
    setData(response.data);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <ClipLoader color="#36d7b7" className="loader" />
        </div>
      ) : (
        <>
          <BreadSection menu="Gallery" />
          <section class="innerpage__head">
            <div class="container">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">
                    <i class="fa fa-home"></i> Home
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Gallery
                </li>
              </ol>
            </div>
          </section>
          <div className="gallery__container">
            {data.map((item) => {
              return (
                <div className="gallery__img shadow border">
                  <img src={item.url} alt={item.image} loading="lazy" />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;

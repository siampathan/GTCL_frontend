import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { API_Link } from "../api/api";

const HomeBanner = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async (req, res) => {
    const response = await axios.get(`${API_Link}/section/menu/36/1`);
    setItems(response.data);
  };

  const getString = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <section className="banner-area home-01" style={{ marginTop: "-10px" }}>
      <div className="container custom-container-01">
        <div className="banner-wrapper">
          <div className="row">
            {items?.map((item) => {
              return (
                <div className="d-flex justify-content-between">
                  <div className="col-xl-7 col-lg-10">
                    <div
                      className="banner-inner"
                      style={{ marginTop: "-80px" }}
                    >
                      <p className="subtitle">{item._sub_heading}</p>
                      <p className="title">{getString(item._heading)}</p>
                      <p>{item._description}</p>
                      <div className="header-btn">
                        <div className="btn-wrap">
                          <Link
                            to={item._link}
                            className="btn-common flat-btn btn-active"
                          >
                            {item._button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="thumbnail">
                      <img src="" className="element-01" alt="" />
                      <img src="" className="element-02" alt="" />
                      <img
                        src={data?.image3}
                        className="element-03"
                        alt="vector"
                      />
                      <img
                        src={data?.image4}
                        className="element-04"
                        alt="plane"
                      />
                      <img
                        src={data?.image5}
                        className="element-05"
                        alt="location"
                      />
                      <img
                        src={item._url}
                        className="banner-img"
                        alt="Student"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

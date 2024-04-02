import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import { API_Link } from "../../api/api";

import "./aboutus-style.css";
import BreadSection from "../breadSection/breadSection";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
    //getProfile();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/about`);
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
          <BreadSection menu="About Us" />
          <section className="section pt-0 pb-0">
            <section className="innerpage__head">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fa fa-home"></i> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ol>
              </div>
            </section>
            {data
              ?.filter((items) => items.id < 2)
              .map((items) => {
                return (
                  <div
                    className="container"
                    data-aos="fade-right"
                    key={items.id}
                  >
                    <div className="hero__standout">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="container-fluid p-4">
                            <img
                              src={items.url}
                              alt={items.image}
                              className="img-thumbnail p-3 shadow"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 p-4 wrap-txt">
                          <p className="h4">{items.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>

          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section__heading section__heading-center">
                    Management Profile
                  </h2>
                </div>
              </div>

              <div className="achivment_wrap">
                {data
                  ?.filter((item) => item.id > 1)
                  .map((items, indx) => {
                    return indx % 2 == 0 ? (
                      <div
                        className="row align-items-center container custom-container bg-body-secondary"
                        data-aos="fade-left"
                        key={items.id}
                      >
                        <div className="col-lg-6 col-md-12 d-flex justify-content-start">
                          <div className="img__wrap p-3">
                            <img
                              src={items.url}
                              alt={items.image}
                              loading="lazy"
                              className="shadow rounded img-thumbnail p-2"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 pr-2 wrap__left">
                          <div className="content_wrap pr-2">
                            <h2>{items.title}</h2>
                            <h4> {items.designation} </h4>
                            <div className="wrap-txt">
                              <p>{items.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="row align-items-center container custom-container pb-3"
                        data-aos="fade-right"
                        key={items.id}
                      >
                        <div className="col-lg-6 col-md-12 pr-2">
                          <div className="content_wrap pr-2">
                            <h2>{items.title}</h2>
                            <h4> {items.designation} </h4>
                            <div className="wrap-txt">
                              <p>{items.description}</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                          <div className="img__wrap p-3">
                            <img
                              src={items.url}
                              alt={items.image}
                              loading="lazy"
                              className="shadow rounded img-thumbnail p-2"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutUs;

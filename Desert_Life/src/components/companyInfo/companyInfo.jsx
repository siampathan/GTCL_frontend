import { useState, useEffect } from "react";
import axios from "axios";
import { API_Link } from "../../api/api";
import "./companyInfo-style.css";

const CompanyInfo = ({ data }) => {
  // const [data, setGetData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const response = await axios.get(`${API_Link}/home`);
  //   setGetData(response.data);
  // };

  return (
    <section className="section pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section__heading section__heading-center">
              Services we provide
            </h2>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          {data?.map(({ id, url, image, title }) => {
            return (
              <div className="col-lg-4" key={id} data-aos="fade-right">
                <div className="section__column text-center shadow p-3 rounded">
                  <span className="icon icon-download icon-lg image_wrap">
                    <img src={url} alt={image} loading="lazy" />
                  </span>
                  <h3> {title} </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;

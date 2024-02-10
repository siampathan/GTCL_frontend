import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../../components/api/api";

const ServicesDetails = ({ data, data2, data3 }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/achieve/info`);
    setContents(response.data);
    console.log(response.data);
  };
  //let contents = data2.content;
  return (
    <div className="services-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      {/* <DetailsSection data={data} /> */}

      <section className="about-section-area-wrapper section-top-space section-bottom-space">
        <div className="container custom-container-01">
          {contents?.map((item, indx) => {
            return indx % 2 == 0 ? (
              <div className={`row align-items-center`} key={item.id}>
                <div className="col-lg-6 col-md-12">
                  <div className="thumbnail ">
                    <div className="">
                      <img src={item.url} alt={item.image} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="about-content">
                    <h3 className="content-title"> {item.title} </h3>
                    <p className="paragraph">{item.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`row align-items-center`} key={item.id}>
                <div className="col-lg-6 col-md-12">
                  <div className="about-content">
                    <h3 className="content-title"> {item.title} </h3>
                    <p className="paragraph">{item.description}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="thumbnail ">
                    <div className="">
                      <img src={item.url} alt={item.image} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <DetailsSection data={data3} /> */}
    </div>
  );
};

export default ServicesDetails;

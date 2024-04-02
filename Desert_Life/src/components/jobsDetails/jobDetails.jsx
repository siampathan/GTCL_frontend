import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_Link } from "../../api/api";
import axios from "axios";

import "./jobDetails-style.css";
//import "./clientsDetails-style.css";

const JobDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/jobs/${id}`);
    setData(response.data);
  };

  return (
    <>
      {/* <div className="clients_details_wrap">
        <div className="details_header" key={data.id}>
          <div className="img_wrap pb-4">
            <img src={data.url} alt={data.image} />
          </div>
          <div className="title">
            <h3 className="text-center"> {data.title} </h3>
          </div>
        </div>

        <div className="description">
          <p> {data.job_list} </p>
        </div>
      </div> */}
      <div className="job__details__wrap" key={data.id}>
        <div className="job__details__top">
          <div className="container">
            <div className="img__wrap__contain">
              <img
                src={data.url}
                alt={data.image}
                className="rounded"
                loading="lazy"
              />
            </div>

            <div className="top__title">
              <h3 className="text-center"> {data.title} </h3>
            </div>
          </div>
        </div>
        <div className="job__details__bottom">
          <div className="container p-4">
            <p className="text-center fw-normal fs-4"> {data.job_list} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

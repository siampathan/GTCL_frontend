import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { API_Link } from "../../api/api";
import JobsSection from "../jobsSection/jobsSection";
import BreadSection from "../breadSection/breadSection";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/jobs`);
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
          <BreadSection menu="Our Jobs" />
          <section className="section pt-0">
            <section class="innerpage__head">
              <div class="container">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">
                      <i class="fa fa-home"></i> Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Our Jobs
                  </li>
                </ol>
              </div>
            </section>
            <div className="container">
              <div className="notices__heading">
                <div className="row">
                  <div className="col-lg-4">
                    <h2 className="section__heading">Our Available Jobs</h2>
                  </div>
                </div>
              </div>

              <JobsSection jobsData={data} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Jobs;

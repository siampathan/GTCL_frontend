import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { API_Link } from "../../api/api";
import axios from "axios";
import "./achivement-style.css";
import BreadSection from "../breadSection/breadSection";

const Achivment = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/achieve`);
    setData(response.data);
    setIsLoading(false);
  };

  const styles = {
    box__space: {
      marginBottom: "50px",
    },
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <ClipLoader color="#36d7b7" className="loader" />
        </div>
      ) : (
        <>
          <BreadSection menu="Our Papers" />
          <div className="achivment_wrap">
            <section class="innerpage__head">
              <div class="container">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">
                      <i class="fa fa-home"></i> Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Papers
                  </li>
                </ol>
              </div>
            </section>
            {data?.map((items, indx) => {
              return indx % 2 == 0 ? (
                <div
                  className="row align-items-center container custom-container"
                  style={styles.box__space}
                  data-aos="fade-right"
                  key={items.id}
                >
                  <div className="col-lg-6 col-md-12">
                    <div className="thumbnail shadow rounded p-3">
                      <img src={items.url} alt={items.image} loading="lazy" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="content_wrap text-center p-4">
                      <h3>{items.title}</h3>
                      <p className="h1">{items.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="row align-items-center container custom-container pb-3"
                  style={styles.box__space}
                  data-aos="fade-left"
                  key={items.id}
                >
                  <div className="col-lg-6 col-md-12">
                    <div className="content_wrap text-center p-4">
                      <h3>{items.title}</h3>
                      <p className="h1">{items.description}</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="thumbnail shadow rounded p-3">
                      <img src={items.url} alt={items.image} loading="lazy" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Achivment;

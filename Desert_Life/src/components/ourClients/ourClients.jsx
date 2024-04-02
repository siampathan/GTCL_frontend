import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { API_Link } from "../../api/api";
import { Link } from "react-router-dom";
import "./ourclients-style.css";
import BreadSection from "../breadSection/breadSection";

const OurClients = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/clients`);
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
          <BreadSection menu="Our Clients" />
          <section class="innerpage__head">
            <div class="container">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">
                    <i class="fa fa-home"></i> Home
                  </Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Our Clients
                </li>
              </ol>
            </div>
          </section>
          <div className="clients__container">
            {data.map((item) => {
              return (
                <Link
                  to={`/clients-details/${item.id}`}
                  className="container__txt shadow border rounded p-4 bg-light"
                  key={item.id}
                >
                  <h3 className="text-center text-secondary-emphasis">
                    {item.title}
                  </h3>
                  <div className="flag__container">
                    <img src={item.url} alt={item.image} loading="lazy" />
                  </div>
                  <p className="text-center pb-2 h4 text-primary">View More</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default OurClients;

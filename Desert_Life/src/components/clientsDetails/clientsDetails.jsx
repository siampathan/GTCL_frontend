import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_Link } from "../../api/api";
import axios from "axios";
import "./clientsDetails-style.css";

const ClientsDetails = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/clients/${id}`);
    setData(response.data);
  };
  return (
    <div className="bg-light">
      <div className="clients_details_wrap">
        <div className="details_header" key={data.id}>
          <div className="img_wrap pb-4">
            <img src={data.url} alt={data.image} loading="lazy" />
          </div>
          <div className="title">
            <h3 className="text-center"> {data.title} </h3>
          </div>
        </div>

        <div className="description">
          <p> {data.description} </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsDetails;

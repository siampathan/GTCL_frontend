import { useState, useEffect } from "react";
import axios from "axios";
import { API_Link } from "../../api/api";

import Client from "../../assets/images/clients/client_01-hover.png";
import Client2 from "../../assets/images/clients/client_01.png";
import Client3 from "../../assets/images/clients/client_02-hover.png";
import Client4 from "../../assets/images/clients/client_02.png";
import Client5 from "../../assets/images/clients/client_03-hover.png";
import Client6 from "../../assets/images/clients/client_03.png";
import Client7 from "../../assets/images/clients/client_04-hover.png";
import Client8 from "../../assets/images/clients/client_04.png";
import Client9 from "../../assets/images/clients/client_06-hover.png";
import Client10 from "../../assets/images/clients/client_06.png";
import Client11 from "../../assets/images/clients/client_05-hover.png";
import Client12 from "../../assets/images/clients/client_05.png";
import { TestimoniSlickSlid } from "../testimoniSlickSlid/testimoniSlickSlid";
import ClientPartner from "../clientPartner/clientPartner";

const bannerList = [
  {
    imageLink: `${Client}`,
    hoverImage: `${Client2}`,
  },
  {
    imageLink: `${Client3}`,
    hoverImage: `${Client4}`,
  },
  {
    imageLink: `${Client5}`,
    hoverImage: `${Client6}`,
  },
  {
    imageLink: `${Client7}`,
    hoverImage: `${Client8}`,
  },
  {
    imageLink: `${Client9}`,
    hoverImage: `${Client10}`,
  },
  {
    imageLink: `${Client11}`,
    hoverImage: `${Client12}`,
  },
];

const content = [
  {
    title: "Russia is a country spanning Eastern Europe and North Asia.",
    description: `The East Slavs emerged as a recognised group in Europe between the 3rd and 8th centuries CE. 
      The first East Slavic state, Kievan Rus', arose in the 9th century, and in 988,  
      Rus' ultimately disintegrated, with the Grand Duchy of Moscow growing to become the Tsardom of Russia. `,
    url: `https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/125px-Flag_of_Russia.svg.png`,
  },
  {
    title: "Russia is a country spanning Eastern Europe and North Asia.",
    description: `The East Slavs emerged as a recognised group in Europe between the 3rd and 8th centuries CE. 
      The first East Slavic state, Kievan Rus', arose in the 9th century, and in 988,  
      Rus' ultimately disintegrated, with the Grand Duchy of Moscow growing to become the Tsardom of Russia. `,
    url: `https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png`,
  },
  {
    title: "Russia is a country spanning Eastern Europe and North Asia.",
    description: `The East Slavs emerged as a recognised group in Europe between the 3rd and 8th centuries CE. 
      The first East Slavic state, Kievan Rus', arose in the 9th century, and in 988,  
      Rus' ultimately disintegrated, with the Grand Duchy of Moscow growing to become the Tsardom of Russia. `,
    url: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/125px-Flag_of_Switzerland_%28Pantone%29.svg.png`,
  },
];

const UserTestimoi = () => {
  // const [content, setContent] = useState([]);

  // useEffect(() => {
  //   getContent();
  // }, []);

  // const getContent = async () => {
  //   const response = await axios.get(`${API_Link}/slider/info`);
  //   setContent(response.data);
  // };
  return (
    <section className="section pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section__heading section__heading-center">
              Our Partners
            </h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 offset-lg-3 text-center mb-20">
            <div
              className="d-flex justify-content-center"
              style={{ maxWidth: "600px" }}
            >
              {/* <TestimoniSlickSlid data={content} /> */}
            </div>
          </div>
        </div>
        <div className="client_wrap" style={{ maxWidth: "70rem" }}>
          <ClientPartner images={bannerList} />
        </div>
      </div>
    </section>
  );
};

export default UserTestimoi;

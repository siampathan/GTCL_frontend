// import Image from "../../assets/images/blog/thumbnail/img-blog-thumbnail-01.jpg";
// import Image2 from "../../assets/images/blog/thumbnail/img-blog-thumbnail-02.jpg";
// import Image3 from "../../assets/images/blog/thumbnail/img-blog-thumbnail-03.jpg";

// import Man from "../../assets/images/avatar-man.jpg";
// import Women from "../../assets/images/avatar-women.jpg";
// import RecommendedSlid from "../recommendedSlid/recommendedSlid";

// const recommendedList = [
//   {
//     imageLink: `${Image}`,
//     label: `News &amp; Article`,
//     comment: 23,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Man}`,
//     postBy: "Ence iif",
//     date: `29 Des 2018`,
//   },
//   {
//     imageLink: `${Image2}`,
//     label: `News &amp; Article`,
//     comment: 24,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Women}`,
//     postBy: "Ence iif",
//     date: `29 Des 2019`,
//   },
//   {
//     imageLink: `${Image3}`,
//     label: `News &amp; Article`,
//     comment: 33,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Man}`,
//     postBy: "Ence iif",
//     date: `29 Des 2018`,
//   },
//   {
//     imageLink: `${Image}`,
//     label: `News &amp; Article`,
//     comment: 23,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Women}`,
//     postBy: "Ence iif",
//     date: `24 Des 2021`,
//   },
//   {
//     imageLink: `${Image3}`,
//     label: `News &amp; Article`,
//     comment: 29,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Man}`,
//     postBy: "Ence iif",
//     date: `29 Des 2018`,
//   },
//   {
//     imageLink: `${Image2}`,
//     label: `News &amp; Article`,
//     comment: 23,
//     cardTitle: `Sit in pertinax petentium est ne mucius`,
//     avater: `${Man}`,
//     postBy: "Ence iif",
//     date: `29 Des 2018`,
//   },
// ];
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { API_Link } from "../../api/api";
import SERVICE from "../../assets/img/services.png";
import VALUES from "../../assets/img/values.png";

const RecommendedSection = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const response = await axios.get(`${API_Link}/choice`);
  //   setData(response.data);
  // };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section__heading section__heading-center">
              Why choose us
            </h2>
          </div>
        </div>
        <div className="row p-2" data-aos="fade-left">
          <div className="col-lg-7">
            <div className="container-fluid p-4">
              <img
                src={SERVICE}
                alt=""
                className="img-thumbnail p-3 shadow"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-5 mt-5 mb-3">
            <div className="mt-4">
              <h3 className="h1 pb-2">Our Services</h3>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Visa Processing in all
                Approves Countries
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Ticket Processing in all
                approves Countries
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Export Manpower to abroad
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Skill Development for
                abroad
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span> Providing all skill and
                unskilled candidate
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Visit Visa Processig in
                All Countries
              </p>
            </div>
          </div>
        </div>

        <div className="row p-2" data-aos="fade-right">
          <div className="col-lg-6 mt-5 mb-3">
            <div className="mt-4">
              <h3 className="h1 pb-2">Values</h3>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span> Honesty, Integrity and
                Objectivity
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Open Communication and
                Transparenct
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Professional Skill and
                Due Care
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Confidentiality and
                Professional Behavior
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Inclusiveness,
                Impartiality and Respect
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Consideration, Empathy
                and Inspiration
              </p>
              <p className="h4 pb-2">
                <span className="h2 pr-2">&rarr;</span>Conducting Responsiveness
                and responsibilities
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="container-fluid p-4">
              <img
                src={VALUES}
                alt=""
                className="img-thumbnail p-3 shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;

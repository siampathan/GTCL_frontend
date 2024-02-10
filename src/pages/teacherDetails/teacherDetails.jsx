import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_Link } from "../../components/api/api";

//import CardContainer from "../../components/cardContainer/cardContainer";

const AboutInstructor = ({ data, data2, data3, data4 }) => {
  const [instructors, setInstructors] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/teachers/info/${id}`);
    setInstructors(response.data);
  };

  return (
    <div className="team-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="about-section-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">About Instructor</h3>
                <p className="paragraph">{instructors.description}</p>
                <div className="check-point-wrap"></div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-6 col-md-7 col-xl-4">
              <div className="single-instructor-details-wrap">
                <div className="thumb">
                  <img src={instructors.url} alt={instructors.image} />
                </div>
                <div className="content">
                  <div className="badge-box">
                    <span className="badges">{instructors.designation}</span>
                  </div>
                  <h4 className="title">{instructors.title}</h4>

                  <div className="d-flex justify-content-center">
                    <ul class="ul feedback-icon-list d-flex  ">
                      <li class="single-feedback-item">
                        <i class="fas fa-star icon"></i>
                      </li>
                      <li class="single-feedback-item">
                        <i class="fas fa-star icon"></i>
                      </li>
                      <li class="single-feedback-item">
                        <i class="fas fa-star icon"></i>
                      </li>
                      <li class="single-feedback-item">
                        <i class="fas fa-star icon"></i>
                      </li>
                      <li class="single-feedback-item">
                        <i class="fas fa-star icon"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInstructor;

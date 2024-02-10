import AboutPosterSection from "../aboutPosterSection/aboutPosterSection";
import CounterWrap from "../counterWrap/counterWrap";
import Slider from "react-slick";

//import Poster_image from "../../assets/img/sections/courses/courses-01.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./aboutUs-style.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { API_Link } from "../api/api";

const AboutUs = ({ data, data2, data3, data4 }) => {
  let contents = data.content;
  let contents2 = data3.content;

  const [contents3, setContents] = useState([]);
  const [items, setItems] = useState([]);
  const [sliders, setSlider] = useState([]);

  useEffect(() => {
    getItems();
    getData();
    getSlider();
  }, []);

  const getItems = async () => {
    const response = await axios.get(`${API_Link}/counter/menu/37`);
    setContents(response.data);
  };

  const getData = async () => {
    const response = await axios.get(`${API_Link}/section/menu/37/2`);
    setItems(response.data);
  };

  const getSlider = async () => {
    const response = await axios.get(`${API_Link}/slider/info`);
    setSlider(response.data);
  };

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div class="about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="about-section-area section-bottom-space">
        <AboutPosterSection />
      </section>

      <section className="our-team-area-wrapper section-top-space">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title-wrapper text-center">
                  <h4 className="section-title">Meet Expert Instructors</h4>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, voluptatum.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  <div className="slick-main slick-main global-slick-init dots-style-03 dots-space">
                    <Slider {...settings}>
                      {sliders.map((slid, indx) => {
                        return (
                          <div className="slick-item" key={indx}>
                            <div className="course-single-item">
                              <div className="thumbnail slide-image">
                                <img src={slid.url} alt="" />
                              </div>
                              <div className="content">
                                <p className="instructor">{slid.title}</p>
                                <h6 className="course-name">
                                  {slid.description}
                                </h6>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-area-wrapper">
        <div className="counter-section-area">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="counter-section-inner style-01">
                  {contents3?.map((item) => {
                    return <CounterWrap data={item} key={item.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chose-area-wrapper section-bottom-space">
        {items?.map((item) => {
          return (
            <div
              className="chose-area-inner bg-color-01"
              style={{ backgroundColor: "#81ca99" }}
            >
              <div
                className="bg-image background-image"
                style={{
                  backgroundImage: `url(${item?._url})`,
                  marginLeft: "70px",
                }}
              ></div>
              <div className="container custom-container-01">
                <div className="row justify-content-end">
                  <div className="col-lg-6">
                    <div className="img-box"></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content-wrap">
                      <div className="section-title-wrapper">
                        <h4 className="section-title">{item._heading}</h4>
                        <p className="description color-02">
                          {item._description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="testimonial-area-wrapper section-top-space">
        <div className="container custom-container-01">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-wrapper text-center">
                <h4 className="section-title">{data4?.title}</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-wrapper">
                <div className="slick-main slick-main global-slick-init dots-style-03 dots-space">
                  <Slider {...settings}>
                    {sliders.map((slid, indx) => {
                      return (
                        <div className="slick-item" key={indx}>
                          {/* <div className="course-single-item">
                            <div className="thumbnail slide-image">
                              <img src={slid.url} alt="" />
                            </div>
                            <div className="content">
                              <p className="instructor">{slid.title}</p>
                              <h6 className="course-name">
                                {slid.description}
                              </h6>
                            </div>
                          </div> */}
                          <div class="testimonial-single-items style-01 v-02">
                            <div class="content">
                              <p class="feedback-text">{slid.description}</p>
                            </div>

                            <div class="client-and-quote">
                              <div class="client-details">
                                <div class="thumb">
                                  <img src={slid.url} alt={slid.image} />
                                </div>
                                <div class="content">
                                  <p class="client-name"> {slid.title} </p>
                                  <p class="designation">
                                    Central African Republic
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

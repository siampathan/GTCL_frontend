import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { API_Link } from "../api/api";

const ContactUs = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`${API_Link}/company/info`);
    setItems(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Form Submitted Successfully !");
  };

  return (
    <div className="contact-us-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">Contact us</h3>
                <p className="details">
                  We have professional alliance's with leading Universities and
                  Colleges around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-form-area-wrapper section-bottom-space">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="apply-form-inner">
                <div className="row justify-content-between">
                  <div className="col-lg-5">
                    <div className="contact-address">
                      <h3 className="title">Get in touch</h3>
                      {items?.map((item, indx) => (
                        <ul className="ul contact-address-list" key={indx}>
                          <li className="single-address-item">
                            <span className="icon-wrap color-01">
                              <i className="fa-sharp fa-solid fa-location-dot icon" />
                            </span>
                            <span className="text">{item.address}</span>
                          </li>
                          <li className="single-address-item">
                            <span className="icon-wrap color-02">
                              <i className="fa-solid fa-phone icon" />
                            </span>
                            <span className="text">{data.phone}</span>
                          </li>
                          <li className="single-address-item">
                            <span className="icon-wrap color-03">
                              <i className="fa-solid fa-envelope-open icon" />
                            </span>
                            <span className="text">{item.email}</span>
                          </li>
                        </ul>
                      ))}

                      <ul className="ul social-media-list style-01 color-02">
                        <li className="single-social-item">
                          <a href="#" tabIndex={-1}>
                            <i className="fa-brands fa-facebook-f icon" />
                          </a>
                        </li>
                        <li className="single-social-item">
                          <a href="#" tabIndex={-1}>
                            <i className="fa-brands fa-youtube icon" />
                          </a>
                        </li>
                        <li className="single-social-item">
                          <a href="#" tabIndex={-1}>
                            <i className="fa-brands fa-linkedin-in icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact-form">
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="part">
                          <h5 className="title">Primary Information</h5>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Full name"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-6">
                                <i className="fa-solid fa-envelope-open" />
                                <input
                                  type="email"
                                  placeholder="Email address"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-6">
                                <i className="fa-solid fa-phone" />
                                <input
                                  type="tel"
                                  placeholder="Phone number"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-6">
                                <i className="fa-solid fa-user" />
                                <input
                                  type="text"
                                  placeholder="Full name"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-element">
                            <div className="row">
                              <div className="col-lg-12">
                                <textarea
                                  className="textarea"
                                  placeholder="Write description..."
                                  rows={10}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-submit text-right">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            {data?.buttonContent}
                          </button>
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {items.map((item, indx) => (
        <div className="map-wrapper section-top-space" key={indx}>
          <iframe
            className="w-100"
            src={item.map_view}
            height={510}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ))}
    </div>
  );
};

export default ContactUs;

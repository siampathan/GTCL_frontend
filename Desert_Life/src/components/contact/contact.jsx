import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import NeedHelp from "../needHelp/needHelp";
import { API_Link } from "../../api/api";
import axios from "axios";
import BreadSection from "../breadSection/breadSection";

const Contact = () => {
  const [contactinfo, setContactInfo] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const getCompanyInfo = async () => {
    const response = await axios.get(`${API_Link}/contact`);
    setContactInfo(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formateData = new FormData();

      formateData.append("name", name);
      formateData.append("email", email);
      formateData.append("subject", subject);
      formateData.append("comment", comment);

      await axios.post(`${API_Link}/message`, formateData);
      console.log("Submit Successful");

      setName("");
      setEmail("");
      setSubject("");
      setComment("");
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <>
      <BreadSection menu="Contact" />
      <section class="innerpage__head">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <i class="fa fa-home"></i> Home
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </section>
      <section className="section section__contact p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-4 js-match-height">
              <div className="contact__main">
                <h2 className="section__heading">Contact us</h2>
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="emal">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      id="emal"
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emal"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      value={subject}
                      id="sub"
                      onChange={(e) => setSubject(e.target.value)}
                      aria-describedby="text"
                      placeholder="Enter your Subject"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      className="form-control"
                      id="comment"
                      value={comment}
                      aria-describedby="comment"
                      onChange={(e) => setComment(e.target.value)}
                      rows={8}
                      defaultValue={"Enter your comments"}
                      required
                    />
                  </div>
                  <div className="col-md-12 form-action">
                    <button
                      type="submit"
                      className="btn btn-primary btn-rounded"
                    >
                      Sand a message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 js-match-height">
              <aside className="aside__left contact__aside">
                {contactinfo.map(({ id, address, mobile, phone, email }) => {
                  return (
                    <div className="contact__aside--content" key={id}>
                      <div className="contact__aside--widget">
                        <h5 className="contact__aside--widget-title">
                          <i className="fa fa-home" /> Office address
                        </h5>
                        <p>{address}</p>
                      </div>
                      <div className="contact__aside--widget">
                        <h5 className="contact__aside--widget-title">
                          <i className="fa fa-phone" /> Phone number
                        </h5>
                        <p>{mobile}</p>
                        <p> {phone} </p>
                      </div>
                      <div className="contact__aside--widget">
                        <h5 className="contact__aside--widget-title">
                          <i className="fa fa-envelope" /> Email address
                        </h5>
                        <p>{email}</p>
                      </div>
                    </div>
                  );
                })}
              </aside>
            </div>
          </div>
        </div>
      </section>

      <div className="location-sec mt-5 pt-4">
        <iframe
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3140240767457!2d90.41077917602979!3d23.73617878932084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85f9dc753d9%3A0x8874edef2ea652d0!2sDesert%20Life%20International%20Ltd!5e0!3m2!1sbn!2sbd!4v1710757805178!5m2!1sbn!2sbd"
          width={600}
          height={510}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contact;

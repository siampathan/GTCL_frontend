import { Link } from "react-router-dom";
import POSTER from "../../assets/img/selection.png";

const Features = () => {
  const styles = {
    fontsize: "18px",
  };

  return (
    <section className="section section__gray pb-4">
      <div className="container">
        <div className="row" data-aos="fade-right" data-aos-once="false">
          <div className="col-lg-7 pb-3">
            <div className="container-fluid p-4">
              <img
                src={POSTER}
                alt="poster"
                className="img-thumbnail p-3 shadow"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-5 mt-5 mb-3">
            <p className="mt-5" style={{ fontSize: "35px" }}>
              Selection & Deployment Process
            </p>
            <p style={{ fontSize: "20px" }}>
              Our Selection and Deployment Process has some rules and policies.
              So you have to fully fill up this process, If you want to know
              about these details checkout.
            </p>
            <button className="btn btn-primary btn-lg h2 mt-4">
              <Link to="/selection-details" className="text-white">
                Read more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

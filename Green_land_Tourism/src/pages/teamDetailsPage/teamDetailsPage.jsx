import BreadCumb from "../../components/breadcumb/breadcumb";
import ContactArea from "../../components/contactArea/contactArea";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";

const TeamDetailsPage = () => {
  return (
    <>
      <BreadCumb location={" Team Details"} title={"Team Details"} />

      <section className="space">
        <div className="container">
          <div className="about-card">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="about-card__img">
                  <img
                    className="w-100"
                    src="/src/assets/img/team/team_details.jpg"
                    alt="team image"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-card__box">
                  <div className="about-card__top">
                    <div>
                      <h2 className="about-card__title">Michel Marsh</h2>
                      <span className="about-card__desig">
                        Switzerland Guide
                      </span>
                    </div>
                    <div className="ot-social">
                      <a target="_blank" href="https://facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a target="_blank" href="https://twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a target="_blank" href="https://instagram.com/">
                        <i className="fab fa-instagram" />
                      </a>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <h4 className="about-card__subtitle">Biography</h4>
                  <p className="mb-30">
                    Compellingly myocardinate resource-leveling testing
                    procedures before multidiscip linary customer service.
                    Enthusiastically monetize intermandated e-tailers whereas
                    2.0 manufactured products. Rapidiously harness open-source
                    leadership and client-centered niches. Conveniently
                    customize.
                  </p>
                  <div className="about-info-wrap">
                    <p className="about-info">
                      <i className="fal fa-calendar-days" />
                      <strong>Born on:</strong>May 23, 1987
                    </p>
                    <p className="about-info">
                      <i className="fal fa-city" />
                      <strong>lives in:</strong>Switzerland
                    </p>
                    <p className="about-info">
                      <i className="fal fa-envelope" />
                      <strong>Email:</strong>
                      <a href="mailto:michelm@travon.com">michelm@travon.com</a>
                    </p>
                    <p className="about-info">
                      <i className="fal fa-phone" />
                      <strong>Phone:</strong>
                      <a href="tel:+16322543654">+163 2254 3654</a>
                    </p>
                    <p className="about-info">
                      <i className="fal fa-school" />
                      <strong>Education:</strong>University of Boxon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactArea />
      <SubscriptionArea />
    </>
  );
};

export default TeamDetailsPage;

import FaqWrap from "../faqWrap/faqWrap";

const FaqSection = ({ data }) => {
  return (
    <section className="faq-section-area margin-top-90">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-6">
            <div className="theme-section-title">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">{data?.title}</h4>
            </div>
            <div className="faq-content">
              <h6 className="subtitle">
                {data?.desc} <br />
                {data?.desc2}
              </h6>
              <div className="btn-wrap">
                <a href="#0" className="btn-common flat-btn">
                  {data?.buttonContent}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-wrapper">
              {/* accordion wrapper */}
              <FaqWrap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

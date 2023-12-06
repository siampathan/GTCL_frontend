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
              <div id="accordionOne">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        1. How is get admission in abroad university?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        2. Do you offer complete solution for students?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        3. Which country is safe and better for higher study?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse show"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        4. Which country offer PR after study getting job?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        5. Can i get scholarship with my low cGPA?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingSix">
                    <h5 className="mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        6. Do you allow accomadation for students in abroad?
                      </a>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="card-body">
                      Norway, USA, UK, Germany &amp; Italy is most safest
                      country in the world for Bangladeshi students for higer
                      study.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

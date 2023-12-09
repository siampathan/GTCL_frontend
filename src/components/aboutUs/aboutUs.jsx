import CounterUp from "../counterUp/counterUp";

const AboutUs = ({ data, data2, data3, data4 }) => {
  let contents = data.content;
  let contents2 = data3.content;
  let contents3 = data2.content;
  return (
    <div class="about-page-area-wrapper single-page-section-top-space single-page-section-bottom-space">
      <section className="about-section-area section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">{data?.title}</h3>
                <p className="paragraph">{data?.desc}</p>
                <p className="paragraph">{data?.desc2}</p>
                <div className="icon-box-with-text-wrap">
                  <ul className="ul icon-box-with-text style-01">
                    {contents?.map((item, indx) => {
                      return (
                        <li className="single-icon-box-with-text" key={indx}>
                          <div className="icon-wrap color-01">
                            <img src={item.imageLink} alt="" />
                          </div>
                          <div className="content">
                            <p className="text">{item.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="btn-wrap">
                  <a href="#" className="btn-common btn-new">
                    {data?.buttonContent}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail ">
                <div className="right-frame">
                  <img src={data?.imageLink} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team-area-wrapper section-top-space">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title-wrapper text-center">
                  <h5 className="subtitle">{data2?.title}</h5>
                  <h4 className="section-title">{data2?.subtitle}</h4>
                  <p className="description">{data2?.desc}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Card slider ....</h2>
              {/* <div className="col-lg-12">
                <div
                  className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                  data-infinite="true"
                  data-arrows="true"
                  data-fade="false"
                  data-speed={500}
                  data-slidestoshow={3}
                  data-slidestoscroll={1}
                  data-swipetoslide="true"
                  data-autoplay="true"
                  data-autoplayspeed={2500}
                  data-dots="true"
                  data-responsive='[
                                              {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                                              {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                                              {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                                              ]'
                >
                  <div className="slick-item">
                    <div className="single-team-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/team/style-01/01.jpg"
                          alt="team image"
                        />
                        <ul className="ul social-media-list style-01">
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">Cody Fisher</a>
                        </h4>
                        <p className="designation">
                          Senior Consultants, Eduplan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="single-team-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/team/style-01/02.jpg"
                          alt="team image"
                        />
                        <ul className="ul social-media-list style-01">
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">Brooklyn Simmons</a>
                        </h4>
                        <p className="designation">Consultants, Eduplan</p>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="single-team-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/team/style-01/03.jpg"
                          alt="team image"
                        />
                        <ul className="ul social-media-list style-01">
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">Jenny Wilson</a>
                        </h4>
                        <p className="designation">
                          Senior Consultants, Eduplan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="single-team-item style-01">
                      <div className="thumbnail">
                        <img
                          src="assets/img/team/style-01/03.jpg"
                          alt="team image"
                        />
                        <ul className="ul social-media-list style-01">
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-instagram icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f icon" />
                            </a>
                          </li>
                          <li className="single-social-item">
                            <a href="#">
                              <i className="fa-brands fa-youtube icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">Jenny Wilson</a>
                        </h4>
                        <p className="designation">
                          Senior Consultants, Eduplan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
                  {contents3?.map((item, indx) => {
                    return (
                      <div className="single-counterup" key={indx}>
                        <div className="image-wrap">
                          <img src={item.imageLink} alt="" />
                        </div>
                        <div className="content-wrap">
                          <div className="odo-area">
                            <h3 className="odometer odo-title">
                              <CounterUp data={item.endNum} />
                            </h3>
                          </div>
                          <div className="content">
                            <h6 className="subtitle">{item.title}</h6>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chose-area-wrapper section-bottom-space">
        <div className="chose-area-inner bg-color-01">
          <div
            className="bg-image background-image"
            style={{ backgroundImage: `url(${data3?.imageLink})` }}
          ></div>
          <div className="container custom-container-01">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="img-box"></div>
              </div>
              <div className="col-lg-6">
                <div className="content-wrap">
                  <div className="section-title-wrapper">
                    <h4 className="section-title">{data3?.title}</h4>
                    <p className="description color-02">{data3?.desc}</p>
                  </div>
                  <div className="icon-box-with-text-wrap">
                    <ul className="ul icon-box-with-text style-02">
                      {contents2?.map((item, indx) => {
                        return (
                          <li className="single-icon-box-with-text" key={indx}>
                            <div className="icon-wrap">
                              <img src={item.imageLink} alt="" />
                            </div>
                            <div className="content">
                              <h4 className="title">{item.title}</h4>
                              <p className="paragraph">{item.desc}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-area-wrapper section-top-space">
        <div className="container custom-container-01">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title-wrapper text-center">
                <h5 className="subtitle">{data4?.subtitle}</h5>
                <h4 className="section-title">{data4?.title}</h4>
              </div>
            </div>
          </div>
          <h2>Card Slider .....</h2>
          {/* <div className="row">
            <div className="col-lg-12">
              <div
                className="slick-main global-slick-init"
                data-infinite="true"
                data-arrows="true"
                data-fade="false"
                data-speed={500}
                data-dots="false"
                data-slidestoshow={3}
                data-slidestoscroll={1}
                data-swipetoslide="true"
                data-autoplay="true"
                data-autoplayspeed={2500}
                data-responsive='[
                          {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                          {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                          {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                          ]'
              >
                <div className="slick-item">
                  <div className="testimonial-single-items style-01 v-02">
                    <div className="feedback-wrap">
                      <ul className="ul feedback-icon-list">
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <p className="feedback-text">
                        “I able to prove potential employers that i have a solid
                        understanding of computers &amp; hardware- and started
                        to receive real, viable job offers”.
                      </p>
                    </div>
                    <div className="client-and-quote">
                      <div className="client-details">
                        <div className="thumb">
                          <img
                            src="assets/img/sections/testimonial/tesi-01.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="client-name">Savannah Nguyen</p>
                          <p className="designation">
                            Central African Republic
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-item">
                  <div className="testimonial-single-items style-01 v-02">
                    <div className="feedback-wrap">
                      <ul className="ul feedback-icon-list">
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <p className="feedback-text">
                        “I able to prove potential employers that i have a solid
                        understanding of computers &amp; hardware- and started
                        to receive real, viable job offers”.
                      </p>
                    </div>
                    <div className="client-and-quote">
                      <div className="client-details">
                        <div className="thumb">
                          <img
                            src="assets/img/sections/testimonial/testi-02.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="client-name">Kathryn Murphy</p>
                          <p className="designation">Monaco</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-item">
                  <div className="testimonial-single-items style-01 v-02">
                    <div className="feedback-wrap">
                      <ul className="ul feedback-icon-list">
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <p className="feedback-text">
                        “I able to prove potential employers that i have a solid
                        understanding of computers &amp; hardware- and started
                        to receive real, viable job offers”.
                      </p>
                    </div>
                    <div className="client-and-quote">
                      <div className="client-details">
                        <div className="thumb">
                          <img
                            src="assets/img/sections/testimonial/testi-03.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="client-name">Kristin Watson</p>
                          <p className="designation">Guinea</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slick-item">
                  <div className="testimonial-single-items style-01 v-02">
                    <div className="feedback-wrap">
                      <ul className="ul feedback-icon-list">
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                        <li className="single-feedback-item">
                          <i className="fas fa-star icon" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <p className="feedback-text">
                        “I able to prove potential employers that i have a solid
                        understanding of computers &amp; hardware- and started
                        to receive real, viable job offers”.
                      </p>
                    </div>
                    <div className="client-and-quote">
                      <div className="client-details">
                        <div className="thumb">
                          <img
                            src="assets/img/sections/testimonial/testi-02.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="client-name">Savannah Nguyen</p>
                          <p className="designation">
                            Central African Republic
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

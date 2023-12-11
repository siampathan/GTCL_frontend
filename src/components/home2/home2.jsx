import Marquee from "react-fast-marquee";
import "./home2-style.css";
import AboutPosterSection from "../aboutPosterSection/aboutPosterSection";

const Home2 = ({ data, data2, data3, data4 }) => {
  let images = data.content;
  let marquee_image = data2.content;
  let contents = data4.content;
  return (
    <>
      <div className="nav_bg">
        <section className="banner-area home-two">
          <div className="container custom-container-01">
            <div className="banner-wrapper">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="banner-inner">
                    <p className="subtitle">
                      <img src={data?.imageLink} alt="celebrate-icon" />
                      {data?.subtitle}
                    </p>
                    <h1 className="title">
                      Learn <span>{data?.highlights}</span> {data?.title}
                    </h1>
                    <p>{data?.desc}</p>
                    <div className="header-btn">
                      <div className="btn-wrap">
                        <a href="#0" className="btn-common flat-btn">
                          {data?.buttonContent}
                        </a>
                      </div>
                      <div className="btn-wrap desktop-right margin-left-20">
                        <a href="#0" className="more-btn style-01">
                          {data?.buttonContent2}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  {images?.map((item, indx) => {
                    return (
                      <div className="thumbnail" key={indx}>
                        <img
                          src={item.imageLink}
                          alt="Ellipse"
                          className={item.className}
                        />
                      </div>
                    );
                  })}

                  <div className="enrolled">
                    <div className="icon">
                      <img src={data?.imageLink2} alt="" />
                    </div>
                    <div className="content">
                      <h6 className="title">{data?.heading}</h6>
                      <p>{data?.sub_heading}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-section">
          <div className="container custom-container-01">
            <h4 className="client-title">
              {data?.title}
              <span>{data?.subtitle}</span>
            </h4>
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                  style={{ maxWidth: "900px" }}
                >
                  <Marquee>
                    {marquee_image?.map((item, indx) => {
                      return (
                        <div className="slick-item" key={indx}>
                          <div className="brand-item">
                            <img src={item} alt="koc university" />
                          </div>
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-section-area">
          <div className="container custom-container-01">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrapper d-flex justify-content-between">
                  <div className="theme-section-title">
                    <span className="subtitle">{data3?.subtitle}</span>
                    <h4 className="title">{data3?.title}</h4>
                  </div>
                  <div className="btn-wrap">
                    <a href="course.html" className="btn-common fill-btn">
                      {data3?.buttonContent}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  {/* <div
                    className="slick-main slick-main global-slick-init dots-style-03 dots-space"
                    data-infinite="true"
                    data-arrows="true"
                    data-fade="false"
                    data-speed={500}
                    data-slidestoshow={3}
                    data-slidestoscroll={1}
                    data-swipetoslide="true"
                    data-autoplay="false"
                    data-autoplayspeed={2500}
                    data-dots="true"
                    data-responsive='[
                                  {"breakpoint": 1367,"settings": {"slidesToShow": 3}},
                                  {"breakpoint": 992,"settings": {"slidesToShow": 2}},
                                  {"breakpoint": 600, "settings": {"slidesToShow": 1}}
                                  ]'
                  >
                    <div className="slick-item">
                      <div className="course-single-item">
                        <div className="thumbnail">
                          <img
                            src="assets/img/sections/courses/courses-01.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="instructor">Harverd University</p>
                          <h6 className="course-name">
                            Become Ethereum Blockchain Developer
                          </h6>
                          <div className="ratings">
                            <div className="icon">
                              <img src="assets/img/icon/star.png" alt="" />
                              <span>4.8 (756)</span>
                            </div>
                            <h6 className="price">$25.50</h6>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <p className="instructor">Leslie Alexander</p>
                          <h6 className="course-name">
                            Beginner friendly web development course A2Z
                          </h6>
                          <p>
                            We have professional alliance's with leading
                            Universities Colleges around the world.
                          </p>
                          <div className="duration">
                            <div className="user">
                              <img
                                src="assets/img/icon/2people.png"
                                alt="group"
                              />
                              <span>548796</span>
                            </div>
                            <div className="hours">
                              <img
                                src="assets/img/icon/clock.png"
                                alt="clock-image"
                              />
                              <span>23 hr 54 min</span>
                            </div>
                          </div>
                          <div className="video-wrap">
                            <a
                              className="video-popup mfp-iframe"
                              href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                            >
                              <svg
                                width={15}
                                height={16}
                                viewBox="0 0 15 16"
                                fill="none"
                              >
                                <path
                                  d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                            <span>Watch Intro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="course-single-item">
                        <div className="thumbnail">
                          <img
                            src="assets/img/sections/courses/courses-02.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="instructor">Esther Howard</p>
                          <h6 className="course-name">
                            Learn Python: The Complete Python
                          </h6>
                          <div className="ratings">
                            <div className="icon">
                              <img src="assets/img/icon/star.png" alt="" />
                              <span>4.8 (756)</span>
                            </div>
                            <h6 className="price">$25.50</h6>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <p className="instructor">Leslie Alexander</p>
                          <h6 className="course-name">
                            Beginner friendly web development course A2Z
                          </h6>
                          <p>
                            We have professional alliance's with leading
                            Universities Colleges around the world.
                          </p>
                          <div className="duration">
                            <div className="user">
                              <img
                                src="assets/img/icon/2people.png"
                                alt="group"
                              />
                              <span>548796</span>
                            </div>
                            <div className="hours">
                              <img
                                src="assets/img/icon/clock.png"
                                alt="clock-image"
                              />
                              <span>23 hr 54 min</span>
                            </div>
                          </div>
                          <div className="video-wrap">
                            <a
                              className="video-popup mfp-iframe"
                              href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                            >
                              <svg
                                width={15}
                                height={16}
                                viewBox="0 0 15 16"
                                fill="none"
                              >
                                <path
                                  d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                            <span>Watch Intro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="course-single-item">
                        <div className="thumbnail">
                          <img
                            src="assets/img/sections/courses/courses-03.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="instructor">Leslie Alexander</p>
                          <h6 className="course-name">
                            Data Science and Machine Learning Bootcamp
                          </h6>
                          <div className="ratings">
                            <div className="icon">
                              <img src="assets/img/icon/star.png" alt="" />
                              <span>4.8 (756)</span>
                            </div>
                            <h6 className="price">$25.50</h6>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <p className="instructor">Leslie Alexander</p>
                          <h6 className="course-name">
                            Beginner friendly web development course A2Z
                          </h6>
                          <p>
                            We have professional alliance's with leading
                            Universities Colleges around the world.
                          </p>
                          <div className="duration">
                            <div className="user">
                              <img
                                src="assets/img/icon/2people.png"
                                alt="group"
                              />
                              <span>548796</span>
                            </div>
                            <div className="hours">
                              <img
                                src="assets/img/icon/clock.png"
                                alt="clock-image"
                              />
                              <span>23 hr 54 min</span>
                            </div>
                          </div>
                          <div className="video-wrap">
                            <a
                              className="video-popup mfp-iframe"
                              href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                            >
                              <svg
                                width={15}
                                height={16}
                                viewBox="0 0 15 16"
                                fill="none"
                              >
                                <path
                                  d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                            <span>Watch Intro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slick-item">
                      <div className="course-single-item">
                        <div className="thumbnail">
                          <img
                            src="assets/img/sections/courses/courses-04.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="instructor">Ralph Edwards</p>
                          <h6 className="course-name">
                            The Ultimate Drawing Course - Beginner
                          </h6>
                          <div className="ratings">
                            <div className="icon">
                              <img src="assets/img/icon/star.png" alt="" />
                              <span>4.8 (756)</span>
                            </div>
                            <h6 className="price">$25.50</h6>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <p className="instructor">Leslie Alexander</p>
                          <h6 className="course-name">
                            Beginner friendly web development course A2Z
                          </h6>
                          <p>
                            We have professional alliance's with leading
                            Universities Colleges around the world.
                          </p>
                          <div className="duration">
                            <div className="user">
                              <img
                                src="assets/img/icon/2people.png"
                                alt="group"
                              />
                              <span>548796</span>
                            </div>
                            <div className="hours">
                              <img
                                src="assets/img/icon/clock.png"
                                alt="clock-image"
                              />
                              <span>23 hr 54 min</span>
                            </div>
                          </div>
                          <div className="video-wrap">
                            <a
                              className="video-popup mfp-iframe"
                              href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                            >
                              <svg
                                width={15}
                                height={16}
                                viewBox="0 0 15 16"
                                fill="none"
                              >
                                <path
                                  d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                            <span>Watch Intro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <h2>Card Slider ....</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="features-section home-two section-bottom-space">
          <AboutPosterSection data={data4} data2={contents} />
        </section>
      </div>
    </>
  );
};

export default Home2;

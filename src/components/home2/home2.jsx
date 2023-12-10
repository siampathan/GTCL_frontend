import Marquee from "react-fast-marquee";

const Home2 = ({ data, data2 }) => {
  let images = data.content;
  let marquee_image = data2.content;
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
                  style={{ maxWidth: "700px" }}
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
      </div>
    </>
  );
};

export default Home2;

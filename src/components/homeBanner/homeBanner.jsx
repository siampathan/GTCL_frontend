const HomeBanner = ({ data }) => {
  return (
    <section className="banner-area home-01">
      <div className="container custom-container-01">
        <div className="banner-wrapper">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              <div className="banner-inner">
                <p className="subtitle">{data?.subtitle}</p>
                <h1 className="title">
                  Your <span>{data?.title}</span> {data?.title2}
                </h1>
                <p>
                  {data?.desc}
                  <br /> {data?.desc2}
                </p>
                <div className="header-btn">
                  <div className="btn-wrap">
                    <a href="#0" className="btn-common flat-btn btn-active">
                      apply online
                    </a>
                  </div>
                  <div className="btn-wrap margin-left-20">
                    <a href="contact.html" className="btn-common fill-btn">
                      {data?.buttonContent}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="thumbnail">
                <img src={data?.image1} className="element-01" alt="Ellipse" />
                <img src={data?.image2} className="element-02" alt="Ellipse" />
                <img src={data?.image3} className="element-03" alt="vector" />
                <img src={data?.image4} className="element-04" alt="plane" />
                <img src={data?.image5} className="element-05" alt="location" />
                <img src={data?.image6} className="banner-img" alt="Student" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

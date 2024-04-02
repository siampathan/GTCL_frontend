import CounterUp from "../counterUp/counterUp";

const AboutSection = ({ data }) => {
  let contents = data.content;
  return (
    <section className="about-section-area section-top-space about-home-02">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="theme-section-title">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">
                {data?.title}
                <svg
                  className="title-shape style-01"
                  width={355}
                  height={15}
                  viewBox="0 0 355 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path"
                    d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
                    stroke="#764AF1"
                    strokeWidth={3}
                    strokeLinecap="square"
                  />
                  <path
                    className="path"
                    d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
                    stroke="#764AF1"
                    strokeWidth={3}
                    strokeLinecap="square"
                  />
                  <path
                    className="path"
                    d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
                    stroke="#FFC44E"
                    strokeWidth={3}
                    strokeLinecap="square"
                  />
                </svg>
              </h4>
            </div>
            <div className="about-content-wrap">
              <p>{data?.desc}</p>
              <p>{data?.desc2}</p>
              <span className="core">{data?.extra}</span>
            </div>
            <div className="counter-section-inner style-a">
              {contents?.map((item, indx) => {
                return (
                  <div className={item.className} key={indx}>
                    <div className="content-wrap">
                      <div className="odo-area d-flex">
                        <h3
                          className={item.className2}
                          data-odometer-final={15}
                        >
                          {/* {item.endNum} */}
                          <CounterUp data={item.endNum} />
                        </h3>
                        <h3 class="title"> {item.percent} </h3>
                      </div>
                      <div className="content">
                        <h6 className="subtitle">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="btn-wrap">
              <a href="#" className="btn-common fill-btn">
                Get Free Consultation
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="thumbnail">
              <img src={data?.imageLink} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

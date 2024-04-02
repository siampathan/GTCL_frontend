import DetailsSection from "../../components/detailsSection/detailsSection";

const ServicesDetails = ({ data, data2, data3 }) => {
  let contents = data2.content;
  return (
    <div className="services-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <DetailsSection data={data} />

      <section className="about-section-area-wrapper section-top-space section-bottom-space">
        <div className="container custom-container-01">
          <div className="row align-items-center row-reverse">
            <div className="col-lg-6 col-md-12">
              <div className="thumbnail ">
                <div className="left-frame">
                  <img src={data2?.imageLink} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 className="content-title">{data2?.title}</h3>
                <p className="paragraph">{data2?.desc}</p>
                <ul className="ul check-point-list style-01">
                  {contents?.map((item, indx) => {
                    return (
                      <li className="single-check-point" key={indx}>
                        <span className="icon-wrap">
                          <i className="fa-solid fa-check icon" />
                        </span>
                        <span className="content">
                          <p className="text">{item}</p>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailsSection data={data3} />
    </div>
  );
};

export default ServicesDetails;

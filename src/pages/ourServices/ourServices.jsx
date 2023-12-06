const OurServices = ({ data }) => {
  let contents = data.content;
  return (
    <div className="out-services-wrapper single-page-section-top-space single-page-section-bottom-space">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
                <p className="details">{data?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="our-services-area-wrapper">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row column-gap-50">
              {contents?.map((item, indx) => {
                return (
                  <div className="col-md-6 col-lg-4" key={indx}>
                    <div className="single-our-services-item style-01">
                      <div className="icon">
                        <img src={item.imageLink} alt="team image" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#" tabIndex={-1}>
                            {item.title}
                          </a>
                        </h4>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;

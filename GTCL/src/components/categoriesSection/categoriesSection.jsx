const CategoriesSection = ({ data }) => {
  let contents = data.content;
  let contents2 = data.content2;
  return (
    <section className="category-section-area">
      <div className="container custom-container-01">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrapper d-flex justify-content-between">
              <div className="theme-section-title">
                <span className="subtitle">{data?.subtitle}</span>
                <h4 className="title">{data?.title}</h4>
              </div>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#discipline"
                  >
                    {data?.button}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#collage"
                  >
                    {data?.button2}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="discipline">
            <div className="destination-items-wrap">
              {contents?.map((item, indx) => {
                return (
                  <div
                    className="destination-single-item style-01 shadow"
                    key={indx}
                  >
                    <div className="thumbnail">
                      <img src={item.imageLink} alt="" />
                    </div>
                    <h6 className="name">
                      {item.title} <br /> {item.subtitle}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tab-pane fade" id="collage">
            <div className="destination-items-wrap">
              {contents2?.map((item, indx) => {
                return (
                  <div className="destination-single-item style-01" key={indx}>
                    <div className="thumbnail">
                      <img src={item.imageLink} alt="" />
                    </div>
                    <h6 className="name">
                      {item.title} <br /> {item.subtitle}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

const Instructors = ({ data }) => {
  let contents = data.content;
  return (
    <div className="instructors-wrapper single-page-section-top-space single-page-section-bottom-space">
      <div className="breadcrumb-wrap style-01">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h3 className="title">{data?.title}</h3>
                <p className="details">{data?.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="our-team-area-wrapper">
        <div className="our-team-inner">
          <div className="container custom-container-01">
            <div className="row column-gap-50">
              {contents?.map((item, indx) => {
                return (
                  <div className="col-md-6 col-lg-6 col-xl-4" key={indx}>
                    <div className="single-team-item style-03">
                      <div className="thumbnail">
                        <img src={item.imageLink} alt="team image" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#" tabIndex={-1}>
                            {item.title}
                          </a>
                        </h4>
                        <p className="designation">{item.position}</p>
                        <p className="paragraph">{item.desc}</p>
                      </div>
                      <div className="hover-content">
                        <div className="btn-wrap">
                          <div className="btn-common btn-active">Read More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination">
                  <ul className="pagination-list">
                    <li>
                      <a href="#" className="page-number able left-arrow">
                        PREV
                      </a>
                    </li>
                    <li>
                      <a href="#" className="page-number current">
                        01
                      </a>
                    </li>
                    <li>
                      <a href="#" className="page-number">
                        02
                      </a>
                    </li>
                    <li>
                      <a href="#" className="page-number">
                        03
                      </a>
                    </li>
                    <li>
                      <a href="#" className="page-number able right-arrow">
                        NEXT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;

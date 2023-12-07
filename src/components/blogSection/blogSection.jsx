import BlogrightSection from "../blogrightSection/blogrightSection";

const BlogSection = ({ data, data2, data3 }) => {
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
      <section className="blog-grid-sectin">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-items-wrap">
                <div className="row">
                  {contents?.map((item, indx) => {
                    return (
                      <div className="col-sm-6 col-md-6 col-lg-6" key={indx}>
                        <div className="blog-grid-item-02">
                          <div className="thumbnail">
                            <img src={item.imageLink} alt="" />
                            <a href="#" className="tag">
                              <img src={item.tag_icon} alt="Tag" />
                              {item.tag}
                            </a>
                          </div>
                          <div className="content">
                            <ul className="post-categories">
                              <li>
                                <img src={item.companyIcon} alt="" />
                                {item.companyName}
                              </li>
                              <li>
                                <img src={item.calanderIcon} alt="" />
                                {item.date}
                              </li>
                            </ul>
                            <h4 className="title">
                              <a href="blog-single.html">{item.title}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-pagination margin-bottom-30 desktop-center mobile-left">
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
                            <a
                              href="#"
                              className="page-number able right-arrow"
                            >
                              NEXT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogrightSection data={data2} data2={data3} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;

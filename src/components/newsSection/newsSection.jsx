const NewsSection = ({ data }) => {
  let contents = data.content;
  return (
    <section className="news-section-area margin-top-110">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">{data?.title}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {contents?.map((item, indx) => {
            return (
              <div className="col-md-6 col-lg-4" key={indx}>
                <div className="blog-grid-item">
                  <div className="thumbnail">
                    <img
                      src={item.imageLink}
                      alt=""
                      className="border-radius-20"
                    />
                  </div>
                  <div className="content">
                    <ul className="post-categories">
                      <li>
                        <img src={item.calander} alt="" />
                        {item.date}
                      </li>
                      <li>{item.time}</li>
                    </ul>
                    <h4 className="title">{item.title}</h4>
                    <div className="btn-wrap">
                      <a href="#0" className="more-btn">
                        Read More <i className="fa-solid fa-angle-right icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

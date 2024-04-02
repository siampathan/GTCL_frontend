const Footer = ({ data, data2 }) => {
  let contents = data2.content;
  let contents2 = data2.content2;
  let contents3 = data2.content3;
  let contensts4 = data2.content4;
  return (
    <footer className="footer-area style-01">
      <div className="footer-top">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="footer-widget widget widget_subscribe">
                <div className="subscibe-wrapper">
                  <div className="content-wrap">
                    <div className="icon">
                      <img src={data?.imageLink} alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">{data?.title}</h4>
                      <p>{data?.desc}</p>
                    </div>
                  </div>
                  <div className="subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Enter your Email..."
                        className="form-control"
                        required=""
                        aria-required="true"
                      />
                      <div className="btn-wrap">
                        <a href="service-single.html" className="subscribe-btn">
                          <img src={data?.imageLink2} alt="" />
                          {data?.buttonContent}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">{data2?.title}</h4>
                  <ul>
                    {contents?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">{data2?.title2}</h4>
                  <ul>
                    {contents2?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">{data2?.title3}</h4>
                  <ul>
                    {contents3?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">{data2?.title4}</h4>
                  <ul>
                    {contensts4?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget widget widget_nav_menu">
                  <h4 className="widget-headline">{data?.location_heading}</h4>
                  <ul className="contact_info_list">
                    <li className="single-info-item">
                      <div className="icon">
                        <img src={data?.location_image} alt="" />
                      </div>
                      <div className="details">{data?.address}</div>
                    </li>
                    <li className="single-info-item">
                      <div className="icon me-4">
                        <img src={data?.icon_image} alt="" />
                      </div>
                      <div className="icon">
                        <img src={data?.icon_image2} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">
                <p>
                  {data?.copyright_desc}
                  <span>{data?.sub_copyright}</span>
                </p>
                <div className="footer-social-area">
                  <ul className="social-icon-02">
                    <li>
                      <a href="#0">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

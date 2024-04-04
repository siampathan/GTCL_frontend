const FooterArea = () => {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        style={{ marginTop: "-6rem" }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="ot-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img
                          src="/src/assets/img/logo-white.svg"
                          alt="Travon"
                        />
                      </a>
                    </div>
                    <p className="about-text">
                      Globally communicate adaptive e-markets &amp; timely
                      manufactured product. Objectively exploit collaborative
                      relationships vis-a-vis competitive manufactured.
                    </p>
                    <div className="ot-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="tour.html">Tour</a>
                      </li>
                      <li>
                        <a href="destination.html">Destinations</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="ot-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-location-dot" />
                      </div>
                      <p className="info-box_text">
                        5807 W 63rd St, Chicago, IL 60638, United States
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-phone" />
                      </div>
                      <p className="info-box_text">
                        <a href="tel:+11234567890" className="info-box_link">
                          +(1) 123 456 7890
                        </a>
                        <a href="tel:+10987654321" className="info-box_link">
                          +(1) 098 765 4321
                        </a>
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <p className="info-box_text">
                        <a
                          href="mailto:info@travon.com"
                          className="info-box_link"
                        >
                          info@travon.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Gallery Showcase</h3>
                  <div className="sidebar-gallery">
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_1.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_1.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_2.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_2.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_3.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_3.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_4.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_4.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_5.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_5.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                    <div className="gallery-thumb">
                      <img
                        src="/src/assets/img/widget/gallery_1_6.jpg"
                        alt="Gallery Image"
                      />
                      <a
                        href="/src/assets/img/widget/gallery_1_6.jpg"
                        className="gallery-btn popup-image"
                      >
                        <i className="fas fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap style2">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> {getYear()}
                  <a href="#"> Softin</a>. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Terms of Use</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Environmental Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterArea;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sidemenu-wrapper d-none d-lg-block">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget footer-widget">
            <div className="ot-widget-about">
              <div className="about-logo">
                <Link to="">
                  <img src="/src/assets/img/logo-white.svg" alt="Travon" />
                </Link>
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
          <div className="widget footer-widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/recent-post-2-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      5 Ways to Get Your Dream Photos On Picnic
                    </a>
                  </h4>
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      21 June, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="/src/assets/img/blog/recent-post-2-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      9 Essential Tips For Making the Most of Your
                    </a>
                  </h4>
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      22 June, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <a href="mailto:info@travon.com" className="info-box_link">
                    info@travon.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="ot-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fal fa-phone" />
                      <a href="tel:+256214203215">256 214 203 215</a>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fal fa-envelope" />
                      <a href="mailto:info@travon.com">info@travon.com</a>
                    </li>
                    <li>
                      <i className="fal fa-location-dot" />
                      9550 Bolsa Ave #126, United States
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-lg-inline-block">
                      <i className="far fa-user" />
                      <a href="contact.html">Login / Register</a>
                    </li>
                    <li>
                      <div className="header-social">
                        <span className="social-title">Follow Us:</span>
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
                        <a href="https://www.youtube.com/">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="">
                      <img src="/src/assets/img/logo.svg" alt="Travon" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Destination</a>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/destination">Destination</Link>
                          </li>
                          <li>
                            <Link to="/destination-details">
                              Destination Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Tour Types</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="tour.html">Tour</a>
                          </li>
                          <li>
                            <a href="tour-details.html">Tour Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/team-details">Team Details</Link>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="ot-menu-toggle d-inline-block d-lg-none"
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button type="button" className="icon-btn searchBoxToggler">
                      <i className="far fa-search" />
                    </button>
                    <a href="#" className="icon-btn sideMenuToggler">
                      <i className="fa-regular fa-bars" />
                    </a>
                    <a href="contact.html" className="ot-btn ml-25">
                      Book Your Stay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

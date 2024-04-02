import { Link } from "react-router-dom";
import "./header-style.css";

const Header = () => {
  return (
    <header className="header js-header-scroll">
      <nav hidden="">
        <div className="nav-header">
          <Link to="/" className="brand">
            <img
              src="https://www.softintechnology.com/images/softin_logo.svg"
              className="logo"
              alt="Smooth"
            />
          </Link>
          <button className="toggle-bar">
            <span className="fa fa-bars" />
          </button>
        </div>
        {/* Start Header menu for mobile */}
        <div className="header__mobile js-header-menu">
          <a href="#" className="header__mobile-brand">
            Menu
          </a>
          <button className="toggle-bar header__mobile-toggle">
            <span className="fa fa-remove" />
          </button>
        </div>
        {/* End Header menu for mobile */}
        <ul className="menu">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="megamenu">
            <a href="#">Megamenu</a>
            <div className="megamenu-content megamenu-product">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-megamenu">
                    <div className="megamenu__widget">
                      <h6 className="megamenu__widget-title">Products</h6>
                      <div className="megamenu__widget-group">
                        <a
                          href="https://themeforest.net/item/bacotna-creative-agency-and-corporate-template/20789432"
                          className="megamenu__widget-group-link"
                        >
                          Bacotna
                          <span>Creative Agency and Corporate Template</span>
                        </a>
                      </div>
                      <div className="megamenu__widget-group">
                        <a
                          href="https://themeforest.net/item/anakual-multipurpose-and-responsive-corporate-template/19504220"
                          className="megamenu__widget-group-link"
                        >
                          Anakual
                          <span>Multipurpose and responsive corporate</span>
                        </a>
                      </div>
                      <div className="megamenu__widget-group">
                        <a
                          href="https://themeforest.net/item/creativica-multiple-creative-html5-template/19061883"
                          className="megamenu__widget-group-link"
                        >
                          Creativica
                          <span>Multiple Creative HTML5 Template</span>
                        </a>
                      </div>
                      <div className="megamenu__widget-group">
                        <a
                          href="https://themeforest.net/item/inspired-multipurpose-corporate-and-creative-template/18412306"
                          className="megamenu__widget-group-link"
                        >
                          Inspired
                          <span>
                            Multipurpose corporate and creative template
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-megamenu">
                    <div className="megamenu__widget">
                      <h6 className="megamenu__widget-title">Corporate site</h6>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="about-us.html"
                              className="megamenu__widget-group-link"
                            >
                              About us
                              <span>
                                Premium Landing page and HTML template
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="gallery.html"
                              className="megamenu__widget-group-link"
                            >
                              Gallery
                              <span>Photo, image and assets</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="services.html"
                              className="megamenu__widget-group-link"
                            >
                              Our services
                              <span>
                                Dicit decore numquam ei vel eos ex feugait
                                albucius
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="faq.html"
                              className="megamenu__widget-group-link"
                            >
                              F.A.Q
                              <span>
                                Eu pertinax referrentur definitiones ius
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <Link
                              to="/team"
                              className="megamenu__widget-group-link"
                            >
                              Our team
                              <span>Meet our professional teams</span>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="career.html"
                              className="megamenu__widget-group-link"
                            >
                              Career
                              <span>Join with our team</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="blog-left-sidebar.html"
                              className="megamenu__widget-group-link"
                            >
                              Blog
                              <span>News, article, and events</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="megamenu__widget-group">
                            <a
                              href="testimoni.html"
                              className="megamenu__widget-group-link"
                            >
                              Testimoni
                              <span>The client is talking about us</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="blog-left-sidebar.html">Blog</a>
            <ul className="dropdown-menu">
              <li>
                <a href="blog-left-sidebar.html">Single Post Left Sidebar</a>
              </li>
              <li>
                <a href="blog-right-sidebar.html">Single Post Right Sidebar</a>
              </li>
              <li className="dropdown">
                <a href="blog-grid-left-sidebar.html">Blog Grid</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="blog-grid-left-sidebar.html">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-grid-right-sidebar.html">
                      Blog Right Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="blog-single-post-left-sidebar.html">Blog Listing</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="blog-single-post-left-sidebar.html">
                      Blog Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-single-post-right-sidebar.html">
                      Blog Right Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Dropdown Lavel</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Dropdown 3</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="attributes">
          <li className="header__button">
            <a
              href="https://themeforest.net/user/99webpage/portfolio"
              className="btn btn-primary btn-rounded btn-xs btn-header"
            >
              Try free
            </a>
          </li>
          <li className="header__download-icon">
            <a href="https://themeforest.net/user/99webpage/portfolio">
              <i className="fa fa-download" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

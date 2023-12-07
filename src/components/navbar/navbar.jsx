import { Link } from "react-router-dom";

const Navbar = ({ data, data2 }) => {
  let contents = data.content;
  let contents2 = data2.content;
  return (
    <>
      <div className="nav-area-wrapper-relative">
        <nav className="navbar navbar-area navbar-expand-lg navigation-style-02">
          <div className="container custom-container custom-container-01">
            <div className="responsive-menu">
              <div className="logo-wrapper">
                <a href="index.html" className="logo">
                  <img src={data.imageLink} alt="" />
                </a>
              </div>
              <button
                className="navbar-toggler navbar-bs-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#themeim_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="themeim_main_menu">
              <ul className="navbar-nav">
                <li className="menu-item-has-children current-menu-item">
                  <a href="#0">{data.title}</a>
                  <ul className="sub-menu">
                    {contents?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <Link to={`/${item.link}`}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">{data2?.title}</a>
                  <ul className="sub-menu">
                    {contents2?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <Link to={`/${item.link}`}>{item.title}</Link>
                        </li>
                      );
                    })}
                    {/* <li>
                      <a href="services-details.html">Services Details</a>
                    </li>
                    <li>
                      <a href="our-team.html">Team</a>
                    </li>
                    <li>
                      <a href="instructors.html">Instructors</a>
                    </li>
                    <li>
                      <a href="about-instructor.html">About Instructor</a>
                    </li>
                    <li>
                      <a href="country-details.html">Country Details</a>
                    </li>
                    <li>
                      <a href="all-course.html">All Course</a>
                    </li>
                    <li>
                      <a href="all-course-widget.html">
                        All Course with widget
                      </a>
                    </li>
                    <li>
                      <a href="course-details.html">Course Details</a>
                    </li>
                    <li>
                      <a href="apply-online.html">Apply Online</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">Shop Cart</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="cart-empty.html">Cart Empty</a>
                    </li> */}
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-classic.html">Blog Classic</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="nav-right-content">
              <div className="icon-part">
                <ul>
                  <li id="search">
                    <a href="#">
                      <img src="assets/img/icon/search-icon.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-wrap">
                <a href="#" className="btn-common nav-btn">
                  Free consultation
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

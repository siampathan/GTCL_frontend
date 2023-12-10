import { Link } from "react-router-dom";

const Navbar = ({ data, data2, data3 }) => {
  let contents = data.content;
  let contents2 = data2.content;
  let contents3 = data3.content;
  return (
    <>
      <div className="nav-area-wrapper-relative nav_bg">
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
                  <Link to={`/${data?.link}`}>{data?.title2}</Link>
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
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">{data3?.title}</a>
                  <ul className="sub-menu">
                    {contents3.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <Link to={`/${item.link}`}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <Link to={`/${data?.link2}`}>{data?.title3}</Link>
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

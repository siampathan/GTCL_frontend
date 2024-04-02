import CardContainer from "../../components/cardContainer/cardContainer";
import Pagination from "../../components/pagination/pagination";

const AllCourses = ({ data }) => {
  let contents = data.content;
  return (
    <div className="all-course-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
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
      <section className="course-area-wrapper">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrapper">
                <form className="form">
                  <div className="form-element">
                    <div className="row">
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Category</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">Web Design</option>
                          <option value="America">Hacking</option>
                          <option value="London">Design</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Duration</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">1 Hour</option>
                          <option value="America">2 Hours</option>
                          <option value="London">3 Hours</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Tutor</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada"> Google</option>
                          <option value="America">Apple</option>
                          <option value="London">Amazon</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <span className="title">Level</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">Beginner</option>
                          <option value="America">Intermediate</option>
                          <option value="London">Advance</option>
                        </select>
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-1">
                        <span className="title">Language</span>
                        <select name="" id="">
                          <option disabled="" selected="" hidden="">
                            Select
                          </option>
                          <option value="Canada">English</option>
                          <option value="America">Arabic</option>
                          <option value="London">Bangla</option>
                        </select>
                      </div>
                      <div className="offset-lg-1 col-sm-2 col-md-2 col-lg-2">
                        <div className="btn-wrap">
                          <button
                            type="submit"
                            className="btn-common btn-active"
                          >
                            filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row column-gap-50">
            <CardContainer data={contents} />
          </div>
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default AllCourses;

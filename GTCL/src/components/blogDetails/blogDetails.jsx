import BlogCard from "../blogCard/blogCard";
import BlogrightSection from "../blogrightSection/blogrightSection";
import { Link } from "react-router-dom";

const BlogDetails = ({ data, data2, data3, data4, data5, data6 }) => {
  let contents = data.content;
  let contents2 = data.content2;
  let blog_content = data2.content;
  let blog_card = data3.content;
  return (
    <div className="blog-details-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
      <section className="blog-details-section">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-grid-item-02 style-02 blog-details">
                <h3 className="main-title">{data?.title}</h3>
                <div className="content">
                  <ul className="post-categories style-01">
                    {contents?.map((item, indx) => {
                      return (
                        <li key={indx}>
                          <img src={item.imageLink} alt="" />
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="thumbnail main">
                  <img src={data?.imageLink} alt="Group Study" />
                </div>
              </div>
              <div className="blog-details-content">
                <p>{data?.desc}</p>
              </div>
              <div className="list-items-wrap">
                <ul className="list-parent">
                  {contents2?.map((item, indx) => {
                    return (
                      <li className="list-child" key={indx}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="blog-details-content">
                <p>{data?.desc2}</p>
                <div className="row">
                  <div className="col-sm-6 col-lg-6 col-md-6">
                    <div className="thumbnail">
                      <img src={data2?.imageLink} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-md-6">
                    <div className="thumbnail">
                      <img src={data2?.imageLink2} alt="" />
                      <a
                        className="video-play-btn mfp-iframe"
                        href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                      >
                        <svg
                          width={14}
                          height={25}
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.124 12.6362L0.364909 24.7606L0.36491 0.511875L13.124 12.6362Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {blog_content?.map((item, indx) => {
                return (
                  <div className="blog-details-content" key={indx}>
                    <h6 className="title">{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
              <blockquote>
                <p>{data2?.quote}</p>
                <cite>{data2?.author}</cite>
              </blockquote>
              <div className="blog-details-footer">
                <ul className="tags">
                  <li className="title">{data3?.tag_heading} </li>
                  <li>
                    <a href="#" rel="tag">
                      {data3?.title}
                    </a>
                    <a href="E" rel="tag">
                      {data3?.title2}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="single-post-navigation">
                <div className="prev-post">
                  <a href="#0">
                    <i className="fas fa-angle-left" />
                  </a>
                </div>
                <div className="center-grid">
                  <Link to="/blog">
                    <img src={data3?.imageLink} alt="" />
                  </Link>
                </div>
                <div className="next-post">
                  <a href="#0">
                    <i className="fas fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="top-rated-section">
                <div className="top-rated-title">
                  <p>Top Related Post</p>
                </div>
                <div className="related-post-slider-wrap">
                  <div className="related-post-slider">
                    <BlogCard data={blog_card} />
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <h3 className="comments-title">Comments (02)</h3>
                <ul className="comment-list">
                  <li>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <span>om</span>
                      </div>
                      <div className="content">
                        <h4 className="title">Olushola Michael F.</h4>
                        <span className="date">23 september, 2022</span>
                        <p>
                          i love it. its explanatry enough for anybody,
                          irrespective your background in IT.
                        </p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="has-children">
                    <ul>
                      <li>
                        <div className="single-comment-wrap">
                          <div className="thumb">
                            <span>jd</span>
                          </div>
                          <div className="content">
                            <h4 className="title">Johhny Deep</h4>
                            <span className="date">23 september, 2022</span>
                            <p>
                              i love it. its explanatry enough for anybody,
                              irrespective your background in IT.
                            </p>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="comment-form-wrap bg-liteblue margin-top-70">
                  <h3 className="reply-title">{data6?.title}</h3>
                  <p>{data6?.desc}</p>
                  <form
                    action="blog-details.html"
                    className="comment-form padding-top-25"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group textarea">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Write message*"
                            cols={30}
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="btn-wrap">
                          <a href="#0" className="btn-common flat-btn">
                            {data6?.buttonContent}
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <BlogrightSection data={data4} data2={data5} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

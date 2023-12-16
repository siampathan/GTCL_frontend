import BlogCard from "../blogCard/blogCard";
import BlogrightSection from "../blogrightSection/blogrightSection";
import Pagination from "../pagination/pagination";

const BlogSection = ({ data, data2, data3 }) => {
  let contents = data.content;

  return (
    <div className="out-services-wrapper single-page-section-top-space single-page-section-bottom-space nav_bg">
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
                <BlogCard data={contents} />
                <Pagination />
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

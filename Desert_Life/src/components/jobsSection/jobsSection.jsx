import { Link } from "react-router-dom";

const JobsSection = ({ jobsData }) => {
  const styles = {
    img_wrap: {
      width: "300px",
    },
  };

  return (
    <div className="row">
      {jobsData?.map((items) => {
        return (
          <div
            className="col-lg-4 box-wrap"
            data-aos="fade-left"
            key={items.id}
          >
            <div className="d-flex align-items-center row">
              <div className="img-wrap p-2 col-4" style={styles.img_wrap}>
                <img
                  src={items.url}
                  alt={items.image}
                  className="rounded"
                  loading="lazy"
                />
              </div>

              <div className="txt-wrap col-8">
                <h4 className="pl-3">{items.title}</h4>
                <Link
                  to={`/job-details/${items.id}`}
                  className="pl-4 text-primary pl-3"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobsSection;

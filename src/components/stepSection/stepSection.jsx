import Icon from "../../assets/service.png";

const StepSection = ({ data }) => {
  let contents = data.content;
  return (
    <section className="destination-section style-01 margin-top-110 instruction">
      <div className="container custom-container-01">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="theme-section-title desktop-center text-center">
              <span className="subtitle">{data?.subtitle}</span>
              <h4 className="title">{data?.title}</h4>
            </div>
          </div>
        </div>
        <div className="destination-items-wrap">
          {contents?.map((item, indx) => {
            return (
              <div className="destination-single-item style-02" key={indx}>
                <div className="thumbnail">
                  <img src={Icon} alt="Icon" />
                </div>
                <h6 className="name">Identify Section</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepSection;

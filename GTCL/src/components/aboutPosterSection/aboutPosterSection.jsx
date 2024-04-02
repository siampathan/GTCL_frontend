const AboutPosterSection = ({ data, data2 }) => {
  return (
    <div className="container custom-container-01">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <h3 className="content-title">{data?.title}</h3>
            <p className="paragraph">{data?.desc}</p>
            <p className="paragraph">{data?.desc2}</p>
            <div className="icon-box-with-text-wrap">
              <ul className="ul icon-box-with-text style-01">
                {data2?.map((item, indx) => {
                  return (
                    <li className="single-icon-box-with-text" key={indx}>
                      <div className="icon-wrap color-01">
                        <img src={item.imageLink} alt="" />
                      </div>
                      <div className="content">
                        <p className="text">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="btn-wrap">
              <a href="#" className="btn-common btn-new">
                {data?.buttonContent}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="thumbnail ">
            <div className="right-frame">
              <img src={data?.imageLink} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPosterSection;

import Image from "../../assets/images/team/team-01.jpg";
import Image2 from "../../assets/images/team/team-02.jpg";
import Image3 from "../../assets/images/team/team-03.jpg";
import Image4 from "../../assets/images/team/team-04.jpg";
import Image5 from "../../assets/images/team/team-05.jpg";
import Image6 from "../../assets/images/team/team-06.jpg";
import Image7 from "../../assets/images/team/team-07.jpg";
import Image8 from "../../assets/images/team/team-08.jpg";
import NeedHelp from "../needHelp/needHelp";

const OurTeam = () => {
  const teamMembers = [
    {
      imageLink: `${Image}`,
      title: "Jhonathan doe",
      position: "Founder",
    },
    {
      imageLink: `${Image2}`,
      title: "Jhonathan doe",
      position: "UI/UX",
    },
    {
      imageLink: `${Image3}`,
      title: "Jhonathan doe",
      position: "Software Engineer",
    },
    {
      imageLink: `${Image4}`,
      title: "Jhonathan doe",
      position: "System Deginer",
    },
    {
      imageLink: `${Image5}`,
      title: "Jhonathan doe",
      position: "Founder",
    },
    {
      imageLink: `${Image6}`,
      title: "Jhonathan doe",
      position: "Founder",
    },
    {
      imageLink: `${Image7}`,
      title: "Jhonathan doe",
      position: "Founder",
    },
    {
      imageLink: `${Image8}`,
      title: "Jhonathan doe",
      position: "Founder",
    },
  ];
  return (
    <div>
      <>
        <section className="innerpage__head">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="fa fa-home" /> Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Page</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Team
              </li>
            </ol>
          </div>
        </section>
        <section className="section pt-40 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="section__heading section__heading-center">
                  Meet our team
                </h2>
              </div>
            </div>
            <div className="row">
              {teamMembers.map((item, indx) => {
                return (
                  <div className="col-md-6 col-lg-4" key={indx}>
                    <div className="team__card js-match-height">
                      <div className="team__thumbnail">
                        <img
                          src={item.imageLink}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="team__content">
                        <div className="team__content--heading">
                          <h4 className="team__name">{item.title}</h4>
                          <span className="team__position">
                            {item.position}
                          </span>
                        </div>
                        {/* <ul className="team__network">
                          <li>
                            <a href="#" className="team__network--link">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="team__network--link">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="team__network--link">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-md-12 col-lg-4">
                <div className="team__card--join js-match-height">
                  <a href="#" className="team__card--join-link">
                    Join with us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <NeedHelp />
        </section>
      </>
    </div>
  );
};

export default OurTeam;

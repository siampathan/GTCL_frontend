import Marquee from "react-fast-marquee";
import "./clientPartner.css";

const ClientPartner = ({ images }) => {
  return (
    <Marquee pauseOnHover={true} gradient={true} speed={20}>
      <div className="client_wrap">
        {images.map((image, indx) => {
          return (
            <div className="item" key={indx}>
              <a href="#" className="client">
                <img
                  src={image.imageLink}
                  className="client_logo-hover"
                  alt="Client name"
                />
                <img
                  src={image.hoverImage}
                  className="client_logo"
                  alt="Client name"
                />
              </a>
            </div>
          );
        })}
      </div>
    </Marquee>
  );
};

export default ClientPartner;

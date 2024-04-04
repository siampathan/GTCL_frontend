import { useEffect } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Destination from "../destination/destination";
import { AboutUs } from "../aboutUs/aboutUs";
import CounterUp from "../counterUp/counterUp";
import TripArea from "../tripArea/tripArea";
import FeatureArea from "../featureArea/featureArea";
import CtaArea from "../ctaArea/ctaArea";
import TourArea from "../tourArea/tourArea";
import DealArea from "../dealArea/dealArea";
import HomeVideo from "../homeVideo/homeVideo";
import Testimonial from "../testimonial/testimonial";
import NewsUpdate from "../newsUpdate/newsUpdate";
import SubscriptionArea from "../subscriptionArea/subscriptionArea";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const elementsWithDataBgSrc = document.querySelectorAll("[data-bg-src]");

    elementsWithDataBgSrc.forEach((element) => {
      const src = element.getAttribute("data-bg-src");
      element.style.backgroundImage = `url(${src})`;
      element.removeAttribute("data-bg-src");
      element.classList.add("background-image");
    });
  }, []);

  return (
    <>
      <div className="ot-hero-wrapper hero-1">
        <div className="hero-slider ot-carousel" data-fade="true">
          <Slider {...settings}>
            <div className="ot-hero-slide">
              <div
                className="ot-hero-bg"
                data-bg-src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-travel-travel-map-background-image_2162731.jpg"
              />
              <div className="container z-index-common">
                <div className="hero-style1">
                  <span
                    className="sub-title hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.1s"
                  >
                    Relax &amp; Enjoy
                    <span className="shape right">
                      <span className="dots" />
                    </span>
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Make Your Holiday
                  </h1>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    Memorable
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Fine Hotel And Ticket With Best Experience. Intrinsicly
                    architect superior core competencies vis-a-vis interactive
                    partnerships.
                  </p>
                  <a
                    href="about.html"
                    className="ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="ot-hero-slide">
              <div
                className="ot-hero-bg"
                data-bg-src="https://www.desktopbackground.org/download/2560x1440/2011/04/21/191485_luxury-travel-travel-wallpapers_2560x1600_h.jpg"
              />
              <div className="container z-index-common">
                <div className="hero-style1">
                  <span
                    className="sub-title hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.1s"
                  >
                    Relax &amp; Enjoy
                    <span className="shape right">
                      <span className="dots" />
                    </span>
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Enjoy Holiday By
                  </h1>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    Traveling
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Fine Hotel And Ticket With Best Experience. Intrinsicly
                    architect superior core competencies vis-a-vis interactive
                    partnerships.
                  </p>
                  <a
                    href="about.html"
                    className="ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="ot-hero-slide">
              <div
                className="ot-hero-bg"
                data-bg-src="https://getwallpapers.com/wallpaper/full/8/7/5/150995.jpg"
              />
              <div className="container z-index-common">
                <div className="hero-style1">
                  <span
                    className="sub-title hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.1s"
                  >
                    Relax &amp; Enjoy
                    <span className="shape right">
                      <span className="dots" />
                    </span>
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Start Your Travel
                  </h1>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    With Travon
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Fine Hotel And Ticket With Best Experience. Intrinsicly
                    architect superior core competencies vis-a-vis interactive
                    partnerships.
                  </p>
                  <a
                    href="about.html"
                    className="ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <Destination />
      <AboutUs />
      <CounterUp />
      <TripArea />
      <FeatureArea />
      <CtaArea />
      <TourArea />
      <DealArea />
      <HomeVideo />
      <Testimonial />
      <NewsUpdate />
      <SubscriptionArea />
    </>
  );
};

export default Home;

import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import SlidCard from "../slidCard/slidCard";

//import Slider from "react-slick";

export const SlidComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <SlidCard />
        <SlidCard />
        <SlidCard />
      </Slider>
    </div>
  );
};

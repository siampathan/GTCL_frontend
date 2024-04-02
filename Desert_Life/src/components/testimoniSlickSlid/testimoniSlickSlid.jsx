import Slider from "react-slick";
import TestimoniCard from "../testimoniCard/testimoniCard";
import "./testimoniSlick-style.css";

export const TestimoniSlickSlid = ({ data }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slide_wrap">
      <Slider {...settings}>
        {data.map((items, indx) => {
          return <TestimoniCard key={indx} {...items} />;
        })}
      </Slider>
    </div>
  );
};

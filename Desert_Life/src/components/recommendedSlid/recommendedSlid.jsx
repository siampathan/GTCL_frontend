import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import RecommendedCard from "../recommendedCard/recommendedCard";

const RecommendedSlid = ({ data }) => {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="recommended_wrap">
      <Slider {...settings}>
        {data.map((item, indx) => {
          return <RecommendedCard key={indx} {...item} />;
        })}
      </Slider>
    </div>
  );
};

export default RecommendedSlid;

import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import "./productSlidSlick.css";
import ProductCard from "../productCard/productCard";

export const ProductSlidSlick = ({ data }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
  };
  return (
    <div className="main_container">
      <Slider {...settings}>
        {data.map((image, indx) => {
          return <ProductCard key={indx} items={image} />;
        })}
      </Slider>
    </div>
  );
};

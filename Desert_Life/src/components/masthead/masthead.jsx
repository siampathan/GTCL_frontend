//import SlickSlider from "../slickSlider/slickSlider";
//import Slider from "../slider/slider";
import Slider from "../slider/slider";
import "./masthed-style.css";

const Masthead = ({ data }) => {
  return (
    // <section className=" text-center pb-0">
    //   <div className="wrap_container"></div>
    // </section>
    <>
      <Slider dataInfo={data} />
    </>
  );
};

export default Masthead;

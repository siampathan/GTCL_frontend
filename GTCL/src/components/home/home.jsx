import AboutSection from "../aboutSection/aboutSection";
import CategoriesSection from "../categoriesSection/categoriesSection";
import Destination from "../destination/destination";
import FaqSection from "../faqSection/faqSection";
import FeatureSection from "../featureSection/featureSection";
import FeedBacks from "../feedBacks/feedBacks";
import HomeBanner from "../homeBanner/homeBanner";
import NewsSection from "../newsSection/newsSection";
import StepSection from "../stepSection/stepSection";

const Home = ({
  data,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
}) => {
  return (
    <>
      <div className="nav_bg">
        <HomeBanner data={data} />
        <FeatureSection data={data2} />
        <FeedBacks data={data3} />
        <Destination data={data4} />
        <AboutSection data={data5} />
        <CategoriesSection data={data6} />
        <StepSection data={data7} />
        <NewsSection data={data8} />
        <FaqSection data={data9} data2={data10} />
      </div>
    </>
  );
};

export default Home;

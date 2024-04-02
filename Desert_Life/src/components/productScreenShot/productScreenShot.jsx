import Image from "../../assets/images/video-cover-app.png";
import Image2 from "../../assets/images/thumbnail-cover-app.png";
import Image3 from "../../assets/images/zoom-cover-app.png";
import Image4 from "../../assets/images/video-cover-app.png";

import { ProductSlidSlick } from "../productSlickSlide/productSlidSlick";

const ProductScreenShot = () => {
  const images = [`${Image}`, `${Image2}`, `${Image3}`, `${Image4}`];
  return (
    <section className="section section__gray pt-30 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section__heading section__heading-center">
              Product screenshot
            </h2>
          </div>
        </div>
        <ProductSlidSlick data={images} />
      </div>
    </section>
  );
};

export default ProductScreenShot;

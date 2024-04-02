//import { Link } from "react-router-dom";
//import LicenseDoc from "../../assets/license/gtcl_training_broucher.pdf";
import { Link } from "react-router-dom";
import LicenseDoc from "../../assets/license/licen.png";
import "./license-style.css";
import BreadSection from "../breadSection/breadSection";

const License = () => {
  return (
    <>
      <BreadSection menu="License" />
      <section class="innerpage__head">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <i class="fa fa-home"></i> Home
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              License
            </li>
          </ol>
        </div>
      </section>
      <div className="license__wrap">
        <div className="txt">
          <h3>Desert Life International Limited</h3>
          <a
            class="text-black"
            download="desert_life_international"
            rel="noreferrer"
            href="https://desertlifebd.com/assets/licen-vRbANzsv.png"
            target="_blank"
          >
            Download
          </a>
        </div>

        <div className="license__img">
          <img
            src={LicenseDoc}
            alt="licenceDoc"
            className="img-thumblin p-2 shadow rounded"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default License;

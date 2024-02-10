import { Link } from "react-router-dom";

import Brocher from "../../assets/gtcl_training_broucher.pdf";

const EmptyCart = ({ data }) => {
  return (
    <div>
      <div className="error-wrapper nav_bg">
        <div className="container custom-container-01">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-12">
              <div className="error-inner">
                <div className="row align-items-center row-reverse">
                  <div className="offset-lg-1 col-lg-3">
                    <div className="content">
                      <h5 className="title">Brochure</h5>
                      <span className="text">
                        <a
                          href={Brocher}
                          download="gtcl_training_broucher"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download .pdf file
                        </a>
                      </span>
                      <div className="btn-wrap">
                        <Link
                          to="/"
                          className="btn-common add-to-cart btn-active"
                        >
                          {data.buttonContent}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <iframe
                      src={Brocher}
                      width={"100%"}
                      height={600}
                      frameborder="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;

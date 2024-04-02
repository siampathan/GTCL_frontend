const PackegSection = () => {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section__heading section__heading-center">
              Choose our package &amp; Acteved to premium
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center mb-40">
            <p>
              Unum liber commune in mel, ut pri tritani propriae menandri. Cum
              et magna porro intellegat. Homero sapientem per id, id sonet
              veniam commune vis, ei nam nonumy fuisset.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="pricing">
              {/* Start pricing 1*/}
              <div className="pricing__column pricing__green pp-fist">
                <div className="pricing__heading">
                  <i className="fa fa-paper-plane pricing__icon" />
                  <h3 className="text-normal">Besic</h3>
                </div>
                <div className="pricing__content">
                  <p>
                    From
                    <span className="pricing__content-price">
                      <em className="pricing__content-currency">$</em>
                      59
                    </span>
                    <small className="pricing__content-muted">/mo</small>
                  </p>
                  <a
                    href="#"
                    className="pricing__content-package"
                    data-toggle="modal"
                    data-target="#besicPackage"
                  >
                    What’s included ?
                  </a>
                </div>
                <div className="pricing__action">
                  <button
                    type="button"
                    className="btn btn-green btn-stroke btn-rounded pricing__button"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              {/* End pricing 1*/}
              {/* Start pricing 2*/}
              <div className="pricing__column pricing__popular">
                <div className="pricing__heading">
                  <i className="fa fa-shield pricing__icon" />
                  <h3>Premium</h3>
                </div>
                <div className="pricing__content">
                  <p>
                    From
                    <span className="pricing__content-price">
                      <em className="pricing__content-currency">$</em>
                      120
                    </span>
                    <small className="pricing__content-muted">/mo</small>
                  </p>
                  <a
                    href="#"
                    className="pricing__content-package"
                    data-toggle="modal"
                    data-target="#premiumPackage"
                  >
                    What’s included ?
                  </a>
                </div>
                <div className="pricing__action">
                  <button
                    type="button"
                    className="btn btn-primary btn-stroke btn-rounded pricing__button"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              {/* End pricing 2*/}
              {/* Start pricing 3*/}
              <div className="pricing__column pricing__red pp-last">
                <div className="pricing__heading">
                  <i className="fa fa-rocket pricing__icon" />
                  <h3 className="text-normal">Business</h3>
                </div>
                <div className="pricing__content">
                  <p>
                    From
                    <span className="pricing__content-price">
                      <em className="pricing__content-currency">$</em>
                      299
                    </span>
                    <small className="pricing__content-muted">/mo</small>
                  </p>
                  <a
                    href="#"
                    className="pricing__content-package"
                    data-toggle="modal"
                    data-target="#businessPackage"
                  >
                    What’s included ?
                  </a>
                </div>
                <div className="pricing__action">
                  <button
                    type="button"
                    className="btn btn-red btn-stroke btn-rounded pricing__button"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              {/* End pricing 3*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackegSection;

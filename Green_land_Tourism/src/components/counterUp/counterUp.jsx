import { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="space-bottom">
        <div className="container">
          <div className="row gx-0 justify-content-between">
            <div className="col-6 col-lg-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/src/assets/img/icon/counter_1_1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <span className="counter-number">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={100000}
                            duration={2}
                            delay={0}
                          />
                        )}
                      </span>
                      +
                    </ScrollTrigger>
                  </h2>
                  <p className="counter-card_text">Our Explorers</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/src/assets/img/icon/counter_1_2.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <span className="counter-number">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={5000}
                            duration={2}
                            delay={0}
                          />
                        )}
                      </span>
                      +
                    </ScrollTrigger>
                  </h2>
                  <p className="counter-card_text">Destinations</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/src/assets/img/icon/counter_1_3.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <span className="counter-number">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={10000}
                            duration={2}
                            delay={0}
                          />
                        )}
                      </span>
                      +
                    </ScrollTrigger>
                  </h2>
                  <p className="counter-card_text">More Trips</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="/src/assets/img/icon/counter_1_4.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <span className="counter-number">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={2000}
                            duration={2}
                            delay={0}
                          />
                        )}
                      </span>
                      +
                    </ScrollTrigger>
                  </h2>
                  <p className="counter-card_text">Luxary Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterUp;

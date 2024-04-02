import { useState, useEffect } from "react";
import "./scrollTop-style.css";

const GoTop = () => {
  const [isVisible, setVisible] = useState(false);

  const gotToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="wrap-top shadow">
      {isVisible && (
        <div className="top-btn" onClick={gotToBtn}>
          <p className="top-btn--icon">&uarr;</p>
        </div>
      )}
    </div>
  );
};

export default GoTop;

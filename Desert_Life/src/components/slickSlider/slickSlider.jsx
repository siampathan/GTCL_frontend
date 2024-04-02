import { useState } from "react";
import "animate.css";
import "./slickSlider-style.css";

const SlickSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 2;
    }
    setActiveIndex(prevIndex);
  };

  const handleMouseEnter = () => {
    // Disable autoplay
    $(".carousel").carousel("pause");
  };

  const handleMouseLeave = () => {
    // Re-enable autoplay
    $(".carousel").carousel("cycle");
  };

  const slides = [
    {
      imageUrl:
        "https://www.softintechnology.com/images/slider/slider_img1.jpg",
      caption: "First slide label",
      text: "Some representative placeholder content for the first slide.",
    },
    {
      imageUrl: "https://www.softintechnology.com/images/08.jpg",
      caption: "Second slide label",
      text: "Some representative placeholder content for the second slide.",
    },
    {
      imageUrl: "https://www.softintechnology.com/images/07.jpg",
      caption: "Third slide label",
      text: "Some representative placeholder content for the third slide.",
    },
  ];

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? "active" : ""}`}
            data-bs-ride="carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-bs-interval="3000"
          >
            <img src={slide.imageUrl} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
              <h5>{slide.caption}</h5>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>

        <span className="visually-hidden">Next</span>
      </button>
    </div>
    // <div
    //   id="carouselExampleInterval"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div
    //       className="carousel-item active"
    //       data-bs-interval={3000}
    //       data-bs-pause="false"
    //     >
    //       <img
    //         src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?w=1380&t=st=1702270461~exp=1702271061~hmac=ff44b8f25d4ce77ca6d505b0afb5b6ad5232beec76df91dbac9896ef8010f064"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5 className="animate__animated animate__fadeInUp">
    //           First slide label
    //         </h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div
    //       className="carousel-item"
    //       data-bs-interval={3000}
    //       data-bs-pause="false"
    //     >
    //       <img
    //         src="https://img.freepik.com/premium-photo/there-are-small-waterfalls-primeval-forest-water-is-very-clear_186367-982.jpg"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5 className="animate__animated animate__fadeInUp">
    //           Second slide label
    //         </h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div
    //       className="carousel-item"
    //       data-bs-interval={3000}
    //       data-bs-pause="false"
    //     >
    //       <img
    //         src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1702270524~exp=1702271124~hmac=b9c27ecbaf5185f17c81335265521aa0942fa9fa563a293690a8e734eab0120e"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5 className="animate__animated animate__fadeInUp">
    //           Third slide label
    //         </h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleInterval"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default SlickSlider;

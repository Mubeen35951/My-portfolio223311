import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import CSS

const slides = [
  { src: "https://picsum.photos/800/400?random=1", link: "https://example.com/preview1" },
  { src: "https://picsum.photos/800/400?random=2", link: "https://example.com/preview2" },
  { src: "https://picsum.photos/800/400?random=3", link: "https://example.com/preview3" },
];

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel autoPlay interval={3000} infiniteLoop>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-button"
            >
              Preview
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

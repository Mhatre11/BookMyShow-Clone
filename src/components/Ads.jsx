import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ads = () => {
  const images = [
    { src: "src/assets/ad-1.avif", alt: "Ad 1" },
    { src: "src/assets/ad-2.avif", alt: "Ad 2" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    arrows: true,
    autoplay: true,
    ref: sliderRef,
  };

  return (
    <Slider className="py-2 bg-gray-100 overflow-hidden" {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default Ads;

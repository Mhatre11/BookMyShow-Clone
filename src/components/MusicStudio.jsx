import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import musicStudioData from "../json/musicStudio.json";

const MusicStudio = () => {
  const [musicStudioItems, setMusicStudioItems] = useState([]);

  useEffect(() => {
    setMusicStudioItems(musicStudioData);
  }, []);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden px-20">
      <h2 className="text-2xl font-bold mb-3">Music Studio</h2>
      <Slider {...settings}>
        {musicStudioItems.map((item) => (
          <div key={item.id} className="flex flex-col ml-3">
            <img
              src={item.poster_url}
              alt={item.title}
              className="w-56 rounded-lg"
            />
            <h1 className=" font-semibold mt-3 text-left">{item.title}</h1>
            <p className="text-gray-600 text-left">{item.location}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MusicStudio;

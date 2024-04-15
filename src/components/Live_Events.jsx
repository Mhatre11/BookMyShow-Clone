import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import liveEventsData from "../json/liveEvents.json";

const Live_Events = () => {
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    setLiveEvents(liveEventsData);
  }, []);

  let settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <section className="flex justify-center my-16 overflow-hidden">
        <img
          className="w-10/12 h-auto"
          src="src/assets/stream-ad.avif"
          alt="stream ad"
        />
      </section>

      <section className="overflow-hidden">
        <h1 className="font-bold text-2xl mb-2 mt-5 ml-20">
          The Best of Live Events
        </h1>
        <div className="slider-container mx-16">
          <Slider {...settings}>
            {liveEvents.map((event, id) => (
              <div key={id} className=" mx-4">
                <img
                  src={event.poster_url}
                  alt="event poster"
                  className="w-56 h-auto rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Live_Events;

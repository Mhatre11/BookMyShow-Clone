import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import premiereData from "../json/premiere.json";

const Premiere = () => {
  const [premiereMovies, setPremiereMovies] = useState([]);

  useEffect(() => {
    setPremiereMovies(premiereData);
  }, []);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

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
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <section className="bg-[#2b3149] my-10">
        <div className="flex justify-around">
          <img
            className="w-3/4 my-5 mr-24"
            src="src/assets/premiere/premiere-banner.avif"
            alt="premiere banner"
          />
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl ml-36">Premieres</h1>
          <p className="text-sm ml-36">Brand new release every Friday</p>
          <div className="mx-32 my-3">
            <Slider {...settings}>
              {premiereMovies.map((movie) => (
                <div key={movie.id}>
                  <img
                    src={movie.poster_url}
                    alt={movie.movie_name}
                    className="w-52 ml-3 rounded-lg"
                  />
                  <h2 className="text-lg font-semibold mt-1 ml-3 ">
                    {movie.movie_name}
                  </h2>
                  <p className="text-gray-500 ml-3">{movie.language}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Premiere;

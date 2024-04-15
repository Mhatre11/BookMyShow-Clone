import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import recommendedMoviesData from "../json/recommendedMovies.json"; //The data of json file

const RecommendedMovies = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    setRecommendedMovies(recommendedMoviesData);
  }, []);

  let settings = {
    arrows: true,
    infinite: false,
    speed: 300,
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
      <section className="my-2">
        <h1 className="font-bold text-2xl ml-20">Recommended Movies</h1>
      </section>
      <div className="slider-container mx-16 p-2  rounded-md">
        <Slider {...settings}>
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="w-50 h-96 rounded-lg p-1 bg-white">
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="w-56 h-full  rounded-lg"
              />
              <h1 className="font-bold font-sans text-lg mx-1">
                {movie.title}
              </h1>
              <p className="text-gray-600 mx-1">{movie.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RecommendedMovies;

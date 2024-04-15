import { useState, useEffect } from "react";
import trendingSearchData from "../json/trendingSearch.json";

const TrendingSearches = () => {
  const [trendingSearchesItems, setTrendingSearchesItems] = useState([]);

  useEffect(() => {
    setTrendingSearchesItems(trendingSearchData);
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <h1 className="text-2xl font-bold ml-20 mt-14">
          Trending Searches Right Now
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-3 mx-20 mt-5 overflow-hidden">
        {trendingSearchesItems.map((item, index) => (
          <div
            key={index}
            className="p-3 w-auto bg-white rounded-md border hover:shadow-lg cursor-pointer"
          >
            <h1 className="text-[#f84471] font-semibold">{item.title}</h1>
            <p className="text-gray-500">{item.category}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default TrendingSearches;

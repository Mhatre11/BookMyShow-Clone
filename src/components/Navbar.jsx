const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between gap-3 px-4 py-2 bg-white  ">
        <div className="flex items-center gap-4">
          <img
            width={125}
            src="src/assets/bookmyshow.png"
            alt="bookmyshow logo"
          />
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search For Movies, Events, Plays, Sports and Activities "
              className="w-[30rem] px-4 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            />
            <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h5 className="flex items-center gap-3 cursor-pointer">
            Mumbai
            <img
              className="w-6"
              src="src/assets/angle-small-down.svg"
              alt="Down arrow"
            />
          </h5>
          <button className="bg-[#F64464] px-4 py-1 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign in
          </button>
          <img width={20} src="src/assets/menu.svg" alt="menu" />
        </div>
      </nav>

      <div className="flex justify-between bg-gray-100 px-4 py-2 list-none">
        <div className="flex">
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">
            Movies
          </li>
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">
            Stream
          </li>
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">
            Events
          </li>
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">Plays</li>
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">
            Sports
          </li>
          <li className="px-1 py-1 hover:text-red-500 cursor-pointer">
            Activities
          </li>
        </div>
        <div className="flex text-right">
          <li className="px-2 py-1 text-sm hover:text-red-500 cursor-pointer">
            ListYourShow
          </li>
          <li className="px-2 py-1 text-sm hover:text-red-500 cursor-pointer">
            Cooperates
          </li>
          <li className="px-2 py-1 text-sm hover:text-red-500 cursor-pointer">
            Offers
          </li>
          <li className="px-2 py-1 text-sm hover:text-red-500 cursor-pointer">
            Gift Cards
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <>
      <section className="mt-20">
        <div className="bg-[#313035] text-white flex  p-5 items-center gap-4">
          <img src="src/assets/Footer/hut.svg" alt="hut" />
          <h1 className="font-semibold">List your show</h1>
          <p>
            Got a show, event, activity or a great experience? Partner with us &
            get listed on BookMyShow
          </p>
          <div className="absolute right-20">
            <button className="bg-[#ec5e71] px-7 py-[0.55rem] rounded-md transition duration-300 hover:bg-[#d94c63]">
              Contact today!
            </button>
          </div>
        </div>

        <div className="bg-[#404043] flex justify-around items-center text-sm py-5 w-auto">
          <div className="flex flex-col items-center gap-2 hover:text-white cursor-pointer">
            <img
              src="src/assets/Footer/callCenter.svg"
              alt="call Center icon"
              className="w-14 "
            />
            <p className="transition duration-300 ">24/7 CUSTOMER CARE</p>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white cursor-pointer">
            <img
              src="src/assets/Footer/resendBooking.svg"
              alt="Resend Booking Confirmation icon"
              className="w-14"
            />
            <p className="transition duration-300 ">
              RESEND BOOKING CONFIRMATION
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 hover:text-white cursor-pointer">
            <img
              src="src/assets/Footer/newsLetter.svg"
              alt="News Letter icon"
              className="w-14"
            />
            <p className="transition duration-300 ">
              SUBSCRIBE TO THE NEWSLETTER
            </p>
          </div>
        </div>
        <div className="bg-[#333338] flex flex-col gap-5 p-7 font-Roboto px-20">
          {/* Movies Now showing in Mumbai */}
          <h1 className="text-[#aaaaad]">MOVIES NOW SHOWING IN MUMBAI</h1>
          <div className="text-[#7F7F7F] text-sm ">
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
mr-2  hover:text-white"
              href="#"
            >
              Bade Miyan Chote Miyan
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
 mr-2 hover:text-white"
              href="#"
            >
              Maidaan
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
 mr-2 hover:text-white"
              href="#"
            >
              Crew
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
mr-2  hover:text-white"
              href="#"
            >
              Madgaon Express
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
 mr-2 hover:text-white"
              href="#"
            >
              Godzilla x kong: The New Empire
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
 mr-2 hover:text-white"
              href="#"
            >
              Swatantrya veer Savarkar
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
 mr-2 hover:text-white"
              href="#"
            >
              Kung Fu Panda 4
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out mr-2 hover:text-white"
              href="#"
            >
              Laapataa Ladies
            </a>
            <a
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out mr-2 hover:text-white"
              href="#"
            >
              Aavesham
            </a>
            <a
              className="mr-2 transition duration-250 ease-in-out hover:text-white"
              href="#"
            >
              Varshangalkku Shesham
            </a>
          </div>
          {/* Upcoming Movies */}
          <h1 className="text-[#aaaaad] mt-4">UPCOMING MOVIES IN MUMBAI</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
mr-2  hover:text-white"
            >
              Suga: Agust D Tour D-Day The Movie
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-250 ease-in-out
mr-2  hover:text-white"
            >
              Civil War
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Valllavan Vaguthathada
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              The Legacy of Jineshwar
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Appu
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Maaranaayudham
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Ratna
            </a>

            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Luv You Shankar
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2  hover:text-white"
            >
              Mylek
            </a>
          </div>
          {/* Movie by genre */}
          <h1 className="text-[#aaaaad] mt-4">MOVIES BY GENRE</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Drama Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Comedy Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Action Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Thriller Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Romantic Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Adventure Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Biography Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Sci-Fi Movies
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Crime Movies
            </a>
            <a
              href="#"
              className=" transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Adaptation Movies
            </a>
          </div>
          {/* Movies by language */}
          <h1 className="text-[#aaaaad] mt-4">MOVIES BY LANGUAGE</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Hindi
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in English
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Malayalam
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Telugu
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Marathi
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Chattisgarhi
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Khasi
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Assamese
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Sindhi
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Movies in Nepali
            </a>
          </div>
          {/* Sports Events in Mumbai */}
          <h1 className="text-[#aaaaad] mt-4">SPORTS EVENTS IN MUMBAI</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Cricket
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Running
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Chess
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Cycling
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Football
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Sailing
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Tennis
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Archery
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Athletics
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Badminton
            </a>
          </div>
          {/* Events in top cities */}
          <h1 className="text-[#aaaaad] mt-4">EVENTS IN TOP CITIES</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Mumbai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Delhi-NCR
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Chennai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Bengaluru
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Hyderabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Pune
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Ahmedabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in kolkata
            </a>
            <a
              href="#"
              className=" transition duration-300 ease-in-out
mr-2  hover:text-white"
            >
              Events in Kochi
            </a>
          </div>
          {/* Cinemas in top cities */}
          <h1 className="text-[#aaaaad] mt-4">CINEMAS IN TOP CITIES</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Mumbai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Delhi-NCR
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Chennai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Bengaluru
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Hyderabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Pune
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Ahmedabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Kolkata
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Cinemas in Kochi
            </a>
          </div>

          {/* Plays in top cities */}
          <h1 className="text-[#aaaaad] mt-4">PLAYS IN TOP CITIES</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Mumbai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Delhi-NCR
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Chennai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Bengaluru
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Hyderabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Pune
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Ahmedabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Kolkata
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Plays in Kochi
            </a>
          </div>

          {/* Activities in top cities */}
          <h1 className="text-[#aaaaad] mt-4">ACTIVITIES IN TOP CITIES</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Mumbai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Delhi-NCR
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Chennai
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Bengaluru
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Hyderabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Pune
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Ahmedabad
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Kolkata
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Activities in Kochi
            </a>

            <h1></h1>
          </div>
          {/* Movies now Showing */}
          <h1 className="text-[#aaaaad] mt-4">MOVIES NOW SHOWING</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Bade Miyan Chote Miyan
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Maidaan
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Tillu Square
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Romeo
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Geethanjali Malli Vachindhi
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              The Family Star
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Crew
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Manjummel Boys ( Telugu )
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Godzilla x Kong: The New Empire
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Yuva
            </a>
          </div>

          {/* Countries */}
          <h1 className="text-[#aaaaad] mt-4">COUNTRIES</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Indonesia
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Singapore
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              UAE
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Sri Lanka
            </a>
            <a
              href="#"
              className=" transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              West Indies
            </a>
          </div>

          {/* Help section */}
          <h1 className="text-[#aaaaad] mt-4">HELP</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Current opening
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Press Release
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Press Coverage
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Sitemap
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              FAQs
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className=" transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Privacy Policy
            </a>
          </div>

          {/* BookMyShow Exclusive */}
          <h1 className="text-[#aaaaad] mt-4">BOOKMYSHOW EXCLUSIVE</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Lollapalooza India
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Superstar
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              BookASmile
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Corporate Vouchers
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Gift Cards
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              List My Show
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Offers
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Stream
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Trailers
            </a>
          </div>

          {/* IPL 2024 */}
          <h1 className="text-[#aaaaad] mt-4">IPL 2024</h1>
          <div className="text-[#7F7F7F] text-sm">
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Mumbai indians
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Rajasthan Royals
            </a>
            <a
              href="#"
              className="separator border-r border-[#83828f] transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Kolkata Knight Riders
            </a>
            <a
              href="#"
              className="transition duration-300 ease-in-out mr-2 hover:text-white"
            >
              Lucknow Super Giants
            </a>
          </div>
        </div>

        <section className="bg-[#333338] flex items-center">
          <div className="w-2/5 ml-10 border-b border-gray-500"></div>
          <img
            src="src/assets/Footer/bookmyshow-logo.svg"
            alt="BookMyShow icon"
            className=" w-40 mx-5"
          />
          <div className="w-2/5 border-b border-gray-500"></div>
        </section>

        <section className="bg-[#333338] flex justify-center items-center p-5">
          <div className="flex gap-3">
            <img
              src="src/assets/Footer/facebook.svg"
              alt="Facebook Icon"
              className="w-10 rounded-full hover:bg-blue-600 cursor-pointer"
            />

            <img
              src="src/assets/Footer/twitter.svg"
              alt="twitter icon"
              className="w-10 rounded-full hover:bg-blue-400 cursor-pointer"
            />
            <img
              src="src/assets/Footer/instagram.svg"
              alt="Instagram Icon"
              className="w-10 rounded-full hover:bg-pink-500 cursor-pointer"
            />

            <img
              src="src/assets/Footer/youtube.svg"
              alt="YouTube Icon"
              className="w-10 rounded-full hover:bg-red-500 cursor-pointer"
            />

            <img
              src="src/assets/Footer/pinterest.svg"
              alt="Pinterest Icon"
              className="w-10 rounded-full hover:bg-red-500 cursor-pointer"
            />
            <img
              src="src/assets/Footer/linkedin.svg"
              alt="LinkedIn Icon"
              className="w-10 rounded-full hover:bg-blue-700 cursor-pointer"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;

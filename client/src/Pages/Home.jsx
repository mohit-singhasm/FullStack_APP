import { NavLink } from "react-router-dom";
import {
  about1,
  about2,
  about3,
  hero,
  icon4,
  icon5,
  icon6,
  icon7,
  iconPlay,
  shape10,
  shape11,
  shape12,
  shape13,
  shape14,
  shape16,
  shape3,
  shape4,
  shape6,
  shape7,
  shape8,
  team1,
  team2,
  team3,
} from "../images/ImagesExport.js";
import { RiContactsLine, RiTeamLine } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    // <>
    //   <main>
    //     <section className="section-hero">
    //       <div className="container grid grid-two-cols">
    //         <div className="hero-content">
    //           <p>We are the World Best IT Company</p>
    //           <h1>Welcome to Thapa Technical</h1>
    //           <p>
    //             Are you ready to take your business to the next level with
    //             cutting-edge IT solutions? Look no further! At Thapa Technical,
    //             we specialize in providing innovative IT services and solutions
    //             tailored to meet your unique needs.
    //           </p>
    //           <div className="btn btn-group">
    //             <NavLink to="/contact">
    //               <button className="btn">connect now</button>
    //             </NavLink>
    //             <NavLink to="/services">
    //               <button className="btn secondary-btn">learn more</button>
    //             </NavLink>
    //           </div>
    //         </div>

    //         {/* hero images  */}
    //         <div className="hero-image">
    //           <img
    //             src="/images/home.png"
    //             alt="coding together"
    //             width="400"
    //             height="500"
    //           />
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   {/* 2nd section  */}
    //   <Analytics />

    //   {/* 3rd section  */}
    //   <section className="section-hero">
    //     <div className="container grid grid-two-cols">
    //       {/* hero images  */}
    //       <div className="hero-image">
    //         <img
    //           src="/images/design.png"
    //           alt="coding together"
    //           width="400"
    //           height="500"
    //         />
    //       </div>

    //       <div className="hero-content">
    //         <p>We are here to help you</p>
    //         <h1>Get Started Today</h1>
    //         <p>
    //           Ready to take the first step towards a more efficient and secure
    //           IT infrastructure? Contact us today for a free consultation and
    //           let's discuss how Thapa Technical can help your business thrive in
    //           the digital age.
    //         </p>
    //         <div className="btn btn-group">
    //           <NavLink to="/contact">
    //             <button className="btn">connect now</button>
    //           </NavLink>
    //           <NavLink to="/services">
    //             <button className="btn secondary-btn">learn more</button>
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>

    <>
      <main className="flex flex-col">
        {/* section1 */}
        <div className="flex justify-between items-center p-4 mb-10">
          <div className="h-full w-1/2 px-8 py-[10rem]">
            <h1 className="text-[50px] leading-[62px] font-bold pb-4">
              We specialize in UI/UX, Web Development, Digital Marketing.
            </h1>
            <p className="text-gray-500 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
              consequat varius nisi quis, posuere magna.
            </p>
            <div className="flex gap-7 mt-8">
              <button className="bg-primary rounded-full mx-3 py-3 px-7 text-white">
                Get Started Now
              </button>
              <div>
                <a href="http://">Call us (0123) 456 – 789</a>
                <p className="text-gray-500 py-1">
                  For any question or concern
                </p>
              </div>
            </div>
          </div>
          <div className="block w-1/2 bg-green-300 -z-10">
            <img
              src={shape4}
              alt="Hero"
              className="w-1/2 absolute top-0 right-0"
            />
            <img
              src={hero}
              alt="Hero"
              className="w-1/2 absolute top-0 right-0"
            />
          </div>
        </div>
        {/* section2 */}
        <div className="flex px-7 gap-20">
          <div className="flex gap-7 items-center">
            <div className="flex justify-center items-center bg-red-400 rounded-full w-20 h-20 shrink-0">
              <RiContactsLine className="text-4xl text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold pb-2">24/7 Support</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet conse adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex gap-7 items-center">
            <div className="flex justify-center items-center bg-green-400 rounded-full w-20 h-20 shrink-0">
              <FaGlobeAmericas className="text-4xl text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold pb-2">Take Ownership</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet conse adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex gap-7 items-center">
            <div className="flex justify-center items-center bg-orange-400 rounded-full w-20 h-20 shrink-0">
              <RiTeamLine className="text-4xl text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold pb-2">Team Work</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet conse adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        {/* section3 */}
        <div className="flex px-9 my-32 gap-28">
          <div className="grid grid-cols-2 gap-8 w-1/2">
            <div className="flex flex-col gap-2">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={shape6} alt="" className="w-[20%] self-start" />
              <img src={about3} alt="" />
              <img src={shape7} alt="" className="w-[80%]" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h4 className="text-primary font-semibold text-xl mb-5">
              Why Choose Us
            </h4>
            <h2 className="text-primaryHeading font-semibold text-5xl mb-7 leading-[55px]">
              We Make Our customers happy by giving Best services.
            </h2>
            <p className="text-primaryText font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <NavLink href="/" className="mt-10 inline-flex gap-7 items-center">
              <span className="inline-flex relative w-12 h-12 bg-primary rounded-full items-center justify-center">
                <span className="opacity-75 bg-primary rounded-full w-full h-full inline-flex absolute animate-ping"></span>
                <img
                  src={iconPlay}
                  alt="play"
                  className="block align-middle absolute max-w-full h-auto"
                />
              </span>
              <span className="text-primaryText text-base font-semibold">
                SEE HOW WE WORK
              </span>
            </NavLink>
          </div>
        </div>

        {/* section4 */}
        <div className="flex flex-col justify-center items-center pt-24 mb-28 relative">
          <span className="block w-full h-2/3 bg-primaryBg absolute top-0 left-0 -z-10">
            <img src={shape8} alt="background" className="w-full" />
            <img
              src={shape10}
              alt="circle"
              className="absolute top-[5%] left-[20%]"
            />
            <img
              src={shape11}
              alt="Triangle"
              className="absolute top-[15%] right-[15%] animate-spin-slow"
            />
          </span>
          <div className="w-1/2 text-center">
            <h2 className="text-5xl text-primaryHeading font-semibold leading-[55px] mb-5">
              Meet With Our Creative Dedicated Team
            </h2>
            <p className="text-primaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
          <div className="img_container_box mt-16 flex flex-row gap-12">
            <div className="img_container">
              <div>
                <img src={team1} alt="" />
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4 className="mt-7 mb-1 text-center text-[26px] font-medium leading-8">
                Jemse Kemorun
              </h4>
              <p className="text-primaryText text-center text-base">
                Product Manager
              </p>
            </div>
            {/* Rough *********************** */}

            <div className="img_container">
              <div>
                <img src={team2} alt="" />
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4 className="mt-7 mb-1 text-center text-[26px] font-medium leading-8">
                Jemse Kemorun
              </h4>
              <p className="text-primaryText text-center text-base">
                Product Manager
              </p>
            </div>
            <div className="img_container">
              <div>
                <img src={team3} alt="" />
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4 className="mt-7 mb-1 text-center text-[26px] font-medium leading-8">
                Jemse Kemorun
              </h4>
              <p className="text-primaryText text-center text-base">
                Product Manager
              </p>
            </div>

            {/* *********************** */}
          </div>
        </div>

        {/* section5 */}

        <div className="flex flex-col justify-center items-center mb-16">
          <div className="w-1/2 text-center">
            <h2 className="text-5xl text-primaryHeading font-semibold leading-[55px] mb-5">
              We Offer The Best Quality Service for You
            </h2>
            <p className="text-primaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
          <div className="iconBox_container pt-12 grid grid-cols-3 px-[5.25rem]">
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon4} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
            {/* rought */}
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon5} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>{" "}
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon6} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>{" "}
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon7} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>{" "}
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon5} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
            <div className="iconBox hover:shadow-md transition-shadow duration-300 p-12">
              <div>
                <img src={icon6} alt="" />
              </div>
              <div>
                <h4 className="pt-11 pb-5 text-2xl leading-[30px] font-semibold">
                  Crafted for Startups
                </h4>
                <p className="text-primaryText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  convallis tortor.
                </p>
              </div>
            </div>
            {/* ************* */}
          </div>
        </div>

        {/* section6 */}

        <div className="flex flex-col justify-center items-center py-24 mb-12 relative">
          <span className="block w-full h-full bg-primaryBg absolute top-0 left-0 -z-10">
            <img
              src={shape13}
              alt="background"
              className="w-full h-auto absolute top-0 right-0"
            />
            <img
              src={shape12}
              alt="background"
              className="w-full h-auto absolute bottom-0 left-0"
            />
            <img
              src={shape6}
              alt="circle"
              className="absolute top-[5%] left-[10%]"
            />
            <img
              src={shape3}
              alt="Triangle"
              className="absolute top-[25%] right-[18%]"
            />
            <img
              src={shape7}
              alt="Triangle"
              className="absolute bottom-[8%] right-[3%] w-28"
            />
          </span>
          <div className="w-1/2 text-center">
            <h2 className="text-5xl text-primaryHeading font-semibold leading-[55px] mb-5">
              We Offer Great Affordable Premium Prices.
            </h2>
            <p className="text-primaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>

            <div className="toggle_btn py-8">
              <label className="inline-flex items-center mb-5 cursor-pointer">
                <span className="me-3 text-lg font-semibold">Bill Monthly</span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                <span className="ms-3 text-lg font-semibold">
                  Bill Annually
                </span>
              </label>
            </div>
          </div>
          <div className="prices_box mt-8 flex flex-row justify-center items-center w-full px-20 gap-9">
            <div className="prices_container px-8 py-10 bg-white text-center rounded-lg w-1/3">
              <h4 className="text-xl font-semibold mb-10">Starter</h4>
              <div className="flex items-center justify-center mb-2">
                <h2 className="text-[40px] leading-10 font-bold">₹142</h2>
                <span className="text-sm"> /per month</span>
              </div>
              <p className="text-primaryText mb-9">No credit card required</p>
              <a
                href="/"
                className="bg-primary rounded-full px-14 py-3 text-white font-semibold hover:bg-secondary duration-300"
              >
                Try for free
              </a>
              <ul className="my-9 flex flex-col gap-3 text-primaryText">
                <li>400 GB Storaget</li>
                <li>Unlimited Photos & Videos</li>
                <li>Exclusive Support</li>
              </ul>
              <p>7-day free trial</p>
            </div>
            {/* rough */}

            <div className="prices_container px-8 py-10 bg-white text-center rounded-lg w-1/3">
              <h4 className="text-xl font-semibold mb-10">Starter</h4>
              <div className="flex items-center justify-center mb-2">
                <h2 className="text-[40px] leading-10 font-bold">₹142</h2>
                <span className="text-sm"> /per month</span>
              </div>
              <p className="text-primaryText mb-9">No credit card required</p>
              <a
                href="/"
                className="bg-primary rounded-full px-14 py-3 text-white font-semibold hover:bg-secondary duration-300"
              >
                Try for free
              </a>
              <ul className="my-9 flex flex-col gap-3 text-primaryText">
                <li>400 GB Storaget</li>
                <li>Unlimited Photos & Videos</li>
                <li>Exclusive Support</li>
              </ul>
              <p>7-day free trial</p>
            </div>
            <div className="prices_container px-8 py-10 bg-white text-center rounded-lg w-1/3">
              <h4 className="text-xl font-semibold mb-10">Starter</h4>
              <div className="flex items-center justify-center mb-2">
                <h2 className="text-[40px] leading-10 font-bold">₹142</h2>
                <span className="text-sm"> /per month</span>
              </div>
              <p className="text-primaryText mb-9">No credit card required</p>
              <a
                href="/"
                className="bg-primary rounded-full px-14 py-3 text-white font-semibold hover:bg-secondary duration-300"
              >
                Try for free
              </a>
              <ul className="my-9 flex flex-col gap-3 text-primaryText">
                <li>400 GB Storaget</li>
                <li>Unlimited Photos & Videos</li>
                <li>Exclusive Support</li>
              </ul>
              <p>7-day free trial</p>
            </div>

            {/* **************** */}
          </div>
        </div>

        {/* section7 carousal */}

        <div className="flex flex-col justify-center items-center pt-6 mb-28 relative">
          <div className="w-1/2 text-center">
            <h2 className="text-5xl text-primaryHeading font-semibold leading-[55px] mb-5">
              Client’s Testimonials
            </h2>
            <p className="text-primaryText">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using.
            </p>
          </div>
          <Carousal />
        </div>

        {/* section8 */}

        <div className="bg-primaryBg py-24 px-36 flex justify-evenly items-center gap-8 mb-14 relative">
          <span className="absolute top-0 left-0 z-10 inline-block w-full h-full">
            <img
              src={shape14}
              alt="bgshape"
              className="absolute top-[4%] left-[35%]"
            />
            <img
              src={shape7}
              alt="bgshape"
              className="absolute top-[6%] right-[2%] rotate-90 scale-50"
            />
            <img
              src={shape11}
              alt="bgshape"
              className="absolute bottom-[6%] left-[3%] w-[5%] animate-spin-slow"
            />
          </span>
          <div>
            <h4 className="text-5xl leading-[62px] font-extrabold mb-[2px]">
              785
            </h4>
            <p className="text-primaryText text-xl">Global Brands</p>
          </div>
          <div>
            <h4 className="text-5xl leading-[62px] font-extrabold mb-[2px]">
              533
            </h4>
            <p className="text-primaryText text-xl">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-5xl leading-[62px] font-extrabold mb-[2px]">
              865
            </h4>
            <p className="text-primaryText text-xl">Winning Awards</p>
          </div>
          <div>
            <h4 className="text-5xl leading-[62px] font-extrabold mb-[2px]">
              346
            </h4>
            <p className="text-primaryText text-xl">Happy Clients</p>
          </div>
        </div>

        {/* section9 */}

        <div className="bg-primary text-white flex flex-wrap justify-around items-center py-20 px-5 relative">
          <span className="absolute bottom-0 right-0">
            <img src={shape16} alt="" className="" />
          </span>
          <div className="w-1/2">
            <h4 className="text-5xl leading-[55px] mb-4 font-semibold">
              Join with 5000+ Startups Growing with Base.
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis
              rhoncus.
            </p>
          </div>
          <div className="w-1/3 flex items-center justify-end">
            <a href="/" className="rounded-full bg-white text-black px-7 py-3">
              Get Started Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

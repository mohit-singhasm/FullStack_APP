import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { shape10, shape11, shape8, team1, team2, team3, icon4, icon5, icon6, icon7 } from "../images/ImagesExport";

const About = () => {
  const { user } = useAuth();
  const [username, setUserName] = useState("");
  useEffect(() => {
    if (user) {
      setUserName(user.username);
    } else {
      setUserName();
    }

    // return setUserName('')
  }, [user]);

  return (
    <>
      {/* <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Wellcome {username ? username : ""} to our website</p>
              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main> */}

      <main>
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
      </main>
    </>
  );
};

export default About;

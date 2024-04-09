import { useState } from "react";
import { useAuth } from "../store/auth";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { shape12, shape13, shape3, shape6 } from "../images/ImagesExport";

const Contact = () => {
  const { user } = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const constLink = "https://full-stack-app-xi.vercel.app/api"

  const [userAvai, setUserAvai] = useState(true);

  if (userAvai && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserAvai(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(contact);
    setData();
  };

  // handle sending contact to the backend

  const setData = async () => {
    try {
      const response = await fetch(`${constLink}/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      // console.log(response);
      if (response.ok) {
        const res_data = await response.json();
        // console.log(res_data);
        setContact((pre) => ({ ...pre, message: "" }));
      }
    } catch (error) {
      console.log("contact page", error);
    }
  };

  return (
    <>
      {/* <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section> */}

      <section className="py-40 flex flex-col justify-center items-center bg-primaryBg px-9 relative">
        <span className="block w-full h-full absolute top-0 left-0">
          <img
            src={shape6}
            alt="shapes"
            className="absolute top-[5%] left-[10%]"
          />
          <img
            src={shape3}
            alt="shapes"
            className="absolute top-[25%] right-[20%]"
          />
          <img
            src={shape13}
            alt="shapes"
            className="absolute top-0 right-0"
          />
          <img
            src={shape12}
            alt="shapes"
            className="absolute bottom-0 left-0"
          />
        </span>
        <div className="w-1/2 text-center">
          <h2 className="text-5xl text-primaryHeading font-bold leading-[55px] mb-5">
            Let’s Stay Connected
          </h2>
          <p className="text-primaryText">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
        <div className="mx-9 my-20 flex w-full gap-7">
          <div className="p-14 w-1/3 bg-white rounded-lg shadow-md z-10">
            <div>
              <div className="mb-10">
                <h2 className="text-xl text-primaryHeading font-medium">
                  Email Address
                </h2>
                <p className="text-primaryText">support@startup.com</p>
              </div>
              <div className="mb-10">
                <h2 className="text-xl text-primaryHeading font-medium">
                  Office Location
                </h2>
                <p className="text-primaryText">
                  76/A, Green valle, Califonia USA.
                </p>
              </div>
              <div className="mb-10">
                <h2 className="text-xl text-primaryHeading font-medium">
                  Phone Number
                </h2>
                <p className="text-primaryText">+009 8754 3433 223</p>
              </div>
              <div className="mb-10">
                <h2 className="text-xl text-primaryHeading font-medium">
                  Skype Email
                </h2>
                <p className="text-primaryText">example@yourmail.com</p>
              </div>
            </div>
            <div className="w-2/3">
              <span className="block bg-primaryText w-full h-[1px] mt-5 mb-10"></span>
              <div className="mb-10">
                <h2 className="text-xl text-primaryHeading font-medium mb-7">
                  Social Media
                </h2>
                <ul className="flex text-primaryText gap-6">
                  <li>
                    <a href="/">
                      <BsInstagram className="text-2xl hover:text-primary" />
                    </a>
                  </li>
                  {/* Rough */}

                  <li>
                    <a href="/">
                      <BsFacebook className="text-2xl hover:text-primary" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsTwitter className="text-2xl hover:text-primary" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsLinkedin className="text-2xl hover:text-primary" />
                    </a>
                  </li>

                  {/* ***** */}
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-2/3 bg-white rounded-lg shadow-md p-14 z-10">
            <div>
              <div className="flex flex-col mb-10">
                <label htmlFor="username" className="mb-3 text-primaryText">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  className="px-7 py-3 rounded-lg border border-1"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="email" className="mb-3 text-primaryText">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  className="px-7 py-3 rounded-lg border border-1"
                />
              </div>
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="message" className="mb-3 text-primaryText">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
                placeholder="Message"
                className="px-7 py-3 rounded-lg border border-1"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="bg-primary rounded-full mx-3 py-3 px-7 text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

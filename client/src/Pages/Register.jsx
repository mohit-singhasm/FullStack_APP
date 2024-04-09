import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import errorMsg from "../components/error.js";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { shape3, shape6 } from "../images/ImagesExport.js";
// import Axios from 'axios'

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  // lets tackle our handleInput
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    setData();
  };

  // handle backend data calling

  const setData = async () => {
    // try {
    //   const response = await Axios.post('http://localhost:3000/api/auth/register', user).then((res)=> {
    //   console.log(res)
    // })
    // console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }

    try {
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        storeTokenInLs(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        navigate("/");
      } else {
        toast.error(res_data[errorMsg(res_data)]);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <section>
        {/* <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="register img"
                  width='500'
                  height='500'
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name='username'
                      placeholder='username'
                      id='username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name='email'
                      placeholder='email'
                      id='email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name='phone'
                      placeholder='phone'
                      id='phone'
                      required
                      autoComplete='off'
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name='password'
                      placeholder='password'
                      id='password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type='submit' className='btn btn-submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main> */}
        <main className="py-36 flex flex-col justify-center items-center bg-primaryBg relative">
          <span className="block w-full h-full absolute top-0 left-0">
            <img
              src={shape6}
              alt="shapes"
              className="absolute top-[30%] left-[2%]"
            />
            <img
              src={shape3}
              alt="shapes"
              className="absolute bottom-[40%] right-[15%]"
            />
            <img
              src="https://base-tailwind.preview.uideck.com/images/shape-17.svg"
              alt="shapes"
              className="absolute bottom-[5%] right-[2%]"
            />
            <img
              src="https://base-tailwind.preview.uideck.com/images/shape-18.svg"
              alt="shapes"
              className="absolute bottom-0 right-0"
            />
          </span>
          <div className="bg-white w-2/5 px-16 py-14 relative flex flex-col rounded-xl overflow-hidden">
            <span className="inline-block absolute top-0 left-0 w-full">
              <span className="inline-block bg-primary w-1/2 h-2 absolute  top-0 left-0"></span>
              <span className="inline-block bg-secondary w-1/2 h-2 absolute top-0 right-0 "></span>
            </span>
            <div className="text-center">
              <h2 className="text-3xl text-primaryHeading font-semibold leading-[40px] mb-5">
                Create an Account
              </h2>
              <span className="relative block">
                <span className="absolute top-1/2 left-0 bg-primaryText block w-24 h-[1px]"></span>
                <p className="text-primaryText">Sign up with your email</p>
                <span className="absolute top-1/2 right-0 bg-primaryText block w-24 h-[1px]"></span>
              </span>
            </div>
            <form className="mt-9" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-6">
                <label htmlFor="username" className="mb-3">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  className="px-7 py-3 rounded-full border border-1"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="px-7 py-3 rounded-full border border-1"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="phone" className="mb-3">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  id="Phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  className="px-7 py-3 rounded-full border border-1"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="px-7 py-3 rounded-full border border-1"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-7 py-3 rounded-full w-full mt-8"
              >
                Register Now
              </button>
              <p className="text-primaryText text-lg text-center mt-7">
                Already have an account?&nbsp;
                <NavLink className="text-primary" to="/login">
                  Sign In
                </NavLink>
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;

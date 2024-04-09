import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import errorMsg from "../components/error.js";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const constLink = "https://full-stack-app-xi.vercel.app/api";

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

  // handle fomr getFormSubmissionInfo`
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const getData = async () => {
    // try {
    //   const response = await Axios.post('http://localhost:3000/api/auth/register', user).then((res)=> {
    //   console.log(res)
    // })
    // console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }

    try {
      const response = await fetch(`${constLink}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        console.log(errorMsg(res_data));
        toast.success(res_data.message);
        storeTokenInLs(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        console.log(errorMsg(res_data));
        toast.error(res_data[errorMsg(res_data)]);
      }
    } catch (error) {
      console.log("register", error);
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
                  src="/images/login.png"
                  alt="login img"
                  width='500'
                  height='500'
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
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
                  <button type='submit' className='btn btn-submit'>Login</button>
                </form>
              </div>
            </div>
          </div>
        </main> */}

        <main className="py-36 flex flex-col justify-center items-center bg-primaryBg relative">
          <span className="block w-full h-full absolute top-0 left-0">
            <img
              src="https://base-tailwind.preview.uideck.com/images/shape-06.svg"
              alt="shapes"
              className="absolute top-[30%] left-[2%]"
            />
            <img
              src="https://base-tailwind.preview.uideck.com/images/shape-03.svg"
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
                Sign in to your Account
              </h2>
              <span className="relative block">
                <span className="absolute top-1/2 left-0 bg-primaryText block w-24 h-[1px]"></span>
                <p className="text-primaryText">Sign in with your email</p>
                <span className="absolute top-1/2 right-0 bg-primaryText block w-24 h-[1px]"></span>
              </span>
            </div>
            <form className="mt-9" onSubmit={handleSubmit}>
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
                <label htmlFor="password" className="mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*****************"
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
                Don't have an account?&nbsp;
                <NavLink className="text-primary" to="/register">
                  Sign Up
                </NavLink>
              </p>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;

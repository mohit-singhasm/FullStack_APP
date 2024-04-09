import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Navigate, useParams } from "react-router-dom";
import { shape3, shape6 } from "../images/ImagesExport";

const UpdateUserPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
  });

  const constLink = "https://full-stack-app-xi.vercel.app/api";

  const [update, setUpdate] = useState(false);

  const { token } = useAuth();
  const params = useParams();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
    setUpdate(true);
  };

  //Getting the User from mongodb

  const getUser = async () => {
    try {
      const response = await fetch(
        `${constLink}/admin/users/${params.id}`,
        {
          method: "GET",
          headers: { Authorization: token },
        }
      );
      // console.log(response)
      const data = await response.json();
      if (response.ok) {
        setUser((pre) => ({ ...pre, ...data.user }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Sending the updated user data to the database

  const updateUser = async (user) => {
    try {
      const response = await fetch(
        `${constLink}/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(user),
        }
      );
    } catch (error) {
      console.log(error, "updateUser");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update User</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/info.png" alt="we are always ready to help" />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlhtmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlhtmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlhtmlFor="phone">Phone</label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlhtmlFor="isAdmin">Admin Status</label>
                                <select
                                    id="isAdmin"
                                    name="isAdmin"
                                    value={user.isAdmin}
                                    onChange={handleInput}>

                                    <option value="false">False</option>
                                    <option value="true">True</option>

                                </select>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

            </section> */}

      <main className="py-36 w-full flex flex-col justify-center items-center bg-primaryBg relative">
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
              User Details
            </h2>
            <span className="relative block">
              <span className="absolute top-1/2 left-0 bg-primaryText block w-12 h-[1px]"></span>
              <p className="text-primaryText">Update Your User Details</p>
              <span className="absolute top-1/2 right-0 bg-primaryText block w-12 h-[1px]"></span>
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
                type="text"
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
            <div>
              <label
                htmlFor="countries"
                className="block my-2 text-sm text-gray-900"
              >
                Admin Status
              </label>
              <select
                id="isAdmin"
                name="isAdmin"
                value={user.isAdmin}
                onChange={handleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-7 py-3 rounded-full w-full mt-8"
            >
              Submit
            </button>
          </form>
          {update && <Navigate to="/admin/users" replace={true} />}
        </div>
      </main>
    </>
  );
};

export default UpdateUserPage;

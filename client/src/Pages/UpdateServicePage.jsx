import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Navigate, useParams } from "react-router-dom";
import { shape3, shape6 } from "../images/ImagesExport";

const UpdateServicePage = () => {
  const [service, setService] = useState({
    imgUrl: "",
    provider: "",
    service: "",
    price: "",
    description: "",
  });

  const constLink = "https://full-stack-app-xi.vercel.app/api";

  const [update, setUpdate] = useState(false);

  const { token } = useAuth();
  const params = useParams();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setService((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(service);
    setUpdate(true);
  };

  //Getting the User from mongodb

  const getService = async () => {
    try {
      const response = await fetch(`${constLink}/data/service/${params.id}`, {
        method: "GET",
        headers: { Authorization: token },
      });
      // console.log(response)
      const data = await response.json();
      if (response.ok) {
        setService((pre) => ({ ...pre, ...data.service }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Sending the updated user data to the database

  const updateService = async (service) => {
    try {
      const response = await fetch(
        `${constLink}/data/service/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(service),
        }
      );
    } catch (error) {
      console.log(error, "updateService");
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    // const { provider, price, service, description } = e;
    <>
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
              <label htmlFor="provider" className="mb-3">
                Provider
              </label>
              <input
                type="text"
                name="provider"
                placeholder="provider"
                id="provider"
                required
                autoComplete="off"
                value={service.provider}
                onChange={handleInput}
                className="px-7 py-3 rounded-full border border-1"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="service" className="mb-3">
                Service
              </label>
              <input
                type="text"
                name="service"
                placeholder="Example@gmail.com"
                id="service"
                required
                autoComplete="off"
                value={service.service}
                onChange={handleInput}
                className="px-7 py-3 rounded-full border border-1"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="price" className="mb-3">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                id="price"
                required
                autoComplete="off"
                value={service.price}
                onChange={handleInput}
                className="px-7 py-3 rounded-full border border-1"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="description" className="mb-3">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
                id="description"
                required
                autoComplete="off"
                value={service.description}
                onChange={handleInput}
                className="px-7 py-3 rounded-full border border-1"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="Upload_Image" className="mb-3">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                placeholder="Upload Image"
                id="Upload_Image"
                required
                autoComplete="off"
                // value={service.imgUrl}
                onChange={(e) => {
                  setService((prev) => {
                    return { ...prev, imgUrl: e.target.files[0] };
                  });
                }}
                className="px-7 py-3 rounded-full border border-1"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-semibold px-7 py-3 rounded-full w-full mt-8"
            >
              Submit
            </button>
          </form>
          {update && <Navigate to="/admin/services" replace={true} />}
        </div>
      </main>
    </>
  );
};

export default UpdateServicePage;

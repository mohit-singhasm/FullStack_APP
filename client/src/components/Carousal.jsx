import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { brandLight2, iconquote, testimonial } from "../images/ImagesExport";

const Carousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 3) {
      newIndex = 3 - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousal">
      <div className="mx-[7.5rem] py-8 flex w-[1040px] overflow-hidden -z-10">
        <div
          className="carousal_Card flex rounded-lg w-full h-full shrink-0 shadow-lg overflow-hidden"
          style={{
            transform: `translateX(${-activeIndex * 100}%)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <div className="flex gap-12 p-10">
            <div className="photo_prt w-1/3">
              <img
                src={testimonial}
                alt="img"
              />
            </div>
            <div className="info_part w-2/3">
              <span>
                <img
                  src={iconquote}
                  alt="quotation"
                />
              </span>
              <p className="text-primaryText text-2xl leading-8 mb-8 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                dolor diam, feugiat quis enim sed, ullamcorper semper ligula.
                Mauris consequat justo volutpat.
              </p>
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold text-lg">David Smith</h4>
                  <p className="text-primaryText">Founter @democompany</p>
                </div>
                <div>
                  <img
                    src={brandLight2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="clr_prt flex flex-col">
            <span className="bg-primary h-1/2 inline-block w-1"></span>
            <span className="bg-secondary h-1/2 inline-block w-1"></span>
          </div>
        </div>

        {/* Rough */}
        
        <div
          className="carousal_Card flex rounded-lg w-full h-full shrink-0 shadow-lg overflow-hidden"
          style={{
            transform: `translateX(${-activeIndex * 100}%)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <div className="flex gap-12 p-10">
            <div className="photo_prt w-1/3">
              <img
                src={testimonial}
                alt="img"
              />
            </div>
            <div className="info_part w-2/3">
              <span>
                <img
                  src={iconquote}
                  alt="quotation"
                />
              </span>
              <p className="text-primaryText text-2xl leading-8 mb-8 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                dolor diam, feugiat quis enim sed, ullamcorper semper ligula.
                Mauris consequat justo volutpat.
              </p>
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold text-lg">David Smith</h4>
                  <p className="text-primaryText">Founter @democompany</p>
                </div>
                <div>
                  <img
                    src={brandLight2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="clr_prt flex flex-col">
            <span className="bg-primary h-1/2 inline-block w-1"></span>
            <span className="bg-secondary h-1/2 inline-block w-1"></span>
          </div>
        </div>
        <div
          className="carousal_Card flex rounded-lg w-full h-full shrink-0 shadow-lg overflow-hidden"
          style={{
            transform: `translateX(${-activeIndex * 100}%)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <div className="flex gap-12 p-10">
            <div className="photo_prt w-1/3">
              <img
                src={testimonial}
                alt="img"
              />
            </div>
            <div className="info_part w-2/3">
              <span>
                <img
                  src={iconquote}
                  alt="quotation"
                />
              </span>
              <p className="text-primaryText text-2xl leading-8 mb-8 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                dolor diam, feugiat quis enim sed, ullamcorper semper ligula.
                Mauris consequat justo volutpat.
              </p>
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold text-lg">David Smith</h4>
                  <p className="text-primaryText">Founter @democompany</p>
                </div>
                <div>
                  <img
                    src={brandLight2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="clr_prt flex flex-col">
            <span className="bg-primary h-1/2 inline-block w-1"></span>
            <span className="bg-secondary h-1/2 inline-block w-1"></span>
          </div>
        </div>

        {/* ************** */}
      </div>
      <div className="carousal_btn flex justify-center items-center pt-2 gap-3">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="rounded-full border border-solid border-primaryText text-primaryText text-2xl p-2 hover:bg-primary hover:text-white"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="rounded-full border border-solid border-primaryText text-primaryText text-2xl p-2 hover:bg-primary hover:text-white"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousal;

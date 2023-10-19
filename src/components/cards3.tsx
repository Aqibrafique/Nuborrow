import React from "react";
import { useState } from "react";
import Back from "../assets/back.svg";

interface all {
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
}

function Cards3({ setvalue, value, data, setData }: all) {
  const [slider, setSlider] = useState<string>("25000.0");
  const a = Number(slider);
  const handleclick = () => {
    setData({ ...data, cards3: slider });
    const a = { ...data, cards3: slider };
    localStorage.setItem("Users", JSON.stringify(a));
    setvalue(value + 1);
  };
  const Goback = () => {
    setvalue(value - 1);
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className=" border-neutral-200 bg-white my-16 xl:my-0 pb-10  xl:border-[8px] w-full h-auto  rounded-3xl ">
        <img
          className="w-14 h-14 xl:mt-4 xl:ml-4 pt-5 xl:pt-0"
          src={Back}
          alt="back error"
          onClick={Goback}
        />
        <p className=" text-4xl font-bold text-center mt-16 px-12">
          How much money do you need?
        </p>
        <div className="w-11/12 mx-3 mt-4 md:mx-7 font-Open_Sans font-normal text-sm">Question 4 of 5</div>
        {/* progress Bar */}
        <div className="w-11/12 mx-3 mt-2 md:mx-7 content-center    dark:bg-neutral-200">
          <div className="bg-main_theme-600 h-3  w-4/5"></div>
        </div>
        {/* value */}
        <div className="text-center text-3xl font-bold my-32">
          {formatter.format(a)}
        </div>
        {/* slider */}
        {/* <input
          type="range"
          min="25000.00"
          max="1000000"
          value={slider}
          step="10"
          onChange={(e) => setSlider(e.target.value)}
          className="w-11/12 m-3 md:m-7 appearance-none flex items-center cursor-pointer bg-transparent z-30
        [&::-webkit-slider-thumb]:bg-[#715BA8] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-[#715BA8] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none
        [&::-ms-thumb]:bg-[#715BA8] [&::-ms-thumb]:rounded-full [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-2.5 [&::-ms-thumb]:h-2.5 [&::-ms-thumb]:appearance-none
        [&::-webkit-slider-runnable-track]:bg-neutral-200 [&::-webkit-slider-runnable-track]:rounded-none [&::-webkit-slider-runnable-track]:overflow-hidden [&::-moz-range-track]:bg-[#715BA8] [&::-moz-range-track]:rounded-full [&::-ms-track]:bg-[#715BA8] [&::-ms-track]:rounded-full
        [&::-moz-range-progress]:bg-[#715BA8] [&::-moz-range-progress]:rounded-full [&::-ms-fill-lower]:bg-blue-400 [&::-ms-fill-lower]:rounded-full [&::-webkit-slider-thumb]:shadow-[-999px_0px_0px_990px_#715BA8]
    "
        ></input> */}
        <input
            className="w-11/12 m-3 md:m-7 cursor-pointer rounded-none bg-neutral-100 accent-main_theme-600"
            type="range"
            min="25000.00"
            max="1000000"
            step="10"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
          />
        <div className="w-11/12  flex items-center justify-center my-9">
          <button
            className="w-4/12 h-12 rounded-full text-center font-bold text-xl bg-main_theme-600 text-white"
            onClick={handleclick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards3;

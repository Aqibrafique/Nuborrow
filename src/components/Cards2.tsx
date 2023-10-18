import React from "react";
import { useState } from "react";
import Back from "../assets/back.svg";
interface all {
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
}

function Cards2({ value, setvalue, data, setData }: all) {
  const [slider, setSlider] = useState<string>("200000.00");
  const conv = Number(slider);

  const handleclick = () => {
    setData({ ...data, cards2: slider });
      const a = { ...data, cards2: slider }
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
          How much do you think your home is worth?
        </p>
        <p className="text-center my-3">
          {" "}
          Your best guess is ok. We will provide you with a no-cost home equity
          report{" "}
        </p>
        <div className="w-11/12 mx-3 mt-4 md:mx-7 font-Open_Sans font-normal text-sm">Question 3 of 5</div>
        {/* progress Bar */}
        <div className="w-11/12 mx-3 mt-2 md:mx-7 content-center    dark:bg-neutral-200">
          <div className="bg-[#715BA8] h-3  w-3/5 "></div>
        </div>
        {/* value */}
        <div className="text-center text-3xl font-bold my-32">
          {formatter.format(conv)}
        </div>
        {/* slider */}
        
        <div>
          <input
            className="w-11/12 m-3 md:m-7 border cursor-pointer rounded-none bg-neutral-100 accent-[#715BA8]"
            type="range"
            min="200000.00"
            max="1500000.00"
            step="10"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
          />
        </div>
        <div className="w-11/12  flex items-center justify-center my-9">
          <button
            className="w-4/12 h-12 rounded-full text-center font-bold text-xl bg-[#715BA8] text-white"
            onClick={handleclick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards2;

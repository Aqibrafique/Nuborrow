import React from "react";
import helpsection21 from "../assets/helpsection21.svg";
import helpsection22 from "../assets/helpsection22.svg";
import helpsection23 from "../assets/helpsection23.svg";
import helpsection24 from "../assets/helpsection24.svg";
import Back from "../assets/back.svg";


interface all {
     setvalue:React.Dispatch<React.SetStateAction<number>>
     value:number
}

function Cards1({setvalue, value}:all) {

const Goback = () =>{
    setvalue(value-1)
}
  

  const handleclick = () =>{
    setvalue(value+1)
  }

  
    return (
      <>
        {/* left div */}
        <div className=" border-neutral-200 bg-white border-[4px] md:border-[8px] w-full h-auto  rounded-3xl ">
          <img
            className="w-10 h-10 mt-4 ml-4"
            src={Back}
            alt="back error"
            onClick={Goback}
          />
          <p className="p-7 text-3xl font-bold">What can we help you with?</p>
          <div className="w-11/12 m-7   h-3">Question 2 of 5</div>
          {/* progress Bar */}
          <div className="w-11/12 m-7   h-3 dark:bg-neutral-200">
            <div className="bg-[#715BA8] h-3  w-2/5"></div>
          </div>
          {/* cards */}
          <div className="flex justify-around flex-wrap py-7 space-y-4 md:space-y-0">
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col " onClick={handleclick}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection21}
                alt="error"
              />
              <p className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Detached House
              </p>
            </div>
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection22}
                alt="error"
              />
              <p className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Semi-Detached House
              </p>
            </div>
          </div>
          <div className="flex justify-around flex-wrap py-7 space-y-4 md:space-y-0">
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection23}
                alt="error"
              />
              <p className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Townhouse
              </p>
            </div>
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection24}
                alt="error"
              />
              <p className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Condo
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Cards1;

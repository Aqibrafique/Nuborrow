import React from "react";
import helpsection21 from "../assets/helpsection21.svg";
import helpsection22 from "../assets/helpsection22.svg";
import helpsection23 from "../assets/helpsection23.svg";
import helpsection24 from "../assets/helpsection24.svg";
import Back from "../assets/back.svg";


interface all {
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
}

function Cards1({value, setvalue, data, setData }:all) {
  const handleclick = () => {
    const element = document.getElementById("Detached_House");
  
    if (element) {
      const text = element.textContent;
      setData({ ...data, cards1: text });
      const a = { ...data, cards1: text }
      localStorage.setItem("Users", JSON.stringify(a));
      console.log(a);
    } 
   else {
      console.log("Element not found");
    }
    setvalue(value + 1);
  };
  const handleclick1 = () => {
    const element = document.getElementById("Semi_Detached_House");
    if (element) {
      const text = element.textContent;
      setData({ ...data, cards1: text });
      const a = { ...data, cards1: text }
      localStorage.setItem("Users", JSON.stringify(a));
      console.log(a);
    } 
    else {
      console.log("Element not found");
    }
    setvalue(value + 1);
  };
  const handleclick2 = () => {
    const element = document.getElementById("Townhouse");
    if (element) {
      const text = element.textContent;
      setData({ ...data, cards1: text });
      const a = { ...data, cards1: text }
      localStorage.setItem("Users", JSON.stringify(a));
      
    } 
    else {
      console.log("Element not found");
    }
    setvalue(value + 1);
  };
  const handleclick3 = () => {
    const element = document.getElementById("Condo");
    if (element) {
      const text = element.textContent;
      setData({ ...data, cards1: text });
      const a = { ...data, cards1: text }
      localStorage.setItem("Users", JSON.stringify(a));
    } 
    else {
      console.log("Element not found");
    }
    setvalue(value + 1);
  };

const Goback = () =>{
    setvalue(value-1)
}
  

  
    return (
      <>
        {/* left div */}
        <div className=" border-neutral-200 bg-white my-16 xl:my-0 pb-10  xl:border-[8px] w-full h-auto  rounded-3xl ">
          <img
            className="w-14 h-14 xl:mt-4 xl:ml-4 pt-5 xl:pt-0"
            src={Back}
            alt="back error"
            onClick={Goback}
          />
          <p className="p-7 text-3xl font-Raleway font-bold">What can we help you with?</p>
          <div className="w-11/12 mx-3 mt-4 md:mx-7 font-Open_Sans font-normal text-sm ">Question 2 of 5</div>
          {/* progress Bar */}
          <div className="w-11/12 mx-3 mt-2 md:mx-7 content-center    dark:bg-neutral-200">
            <div className="bg-[#715BA8] h-3  w-2/5"></div>
          </div>
          {/* cards */}
          <div className="flex justify-around flex-wrap py-7 gap-12  md:gap-0">
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col " onClick={handleclick}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection21}
                alt="error"
              />
              <p id="Detached_House" className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Detached House
              </p>
            </div>
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick1}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection22}
                alt="error"
              />
              <p id="Semi_Detached_House" className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Semi-Detached House
              </p>
            </div>
          </div>
          <div className="flex justify-around flex-wrap py-7 gap-12 md:gap-0">
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick2}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection23}
                alt="error"
              />
              <p id="Townhouse" className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Townhouse
              </p>
            </div>
            <div className="border-neutral-200 border-[4px] text-center hover:shadow-md cursor-pointer  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick3}>
              <img
                className="w-60 h-36 p-4 m-3"
                src={helpsection24}
                alt="error"
              />
              <p id="Condo" className="pt-2 m-auto w-52 h-20   text-lg font-sans font-normal">
              Condo
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Cards1;

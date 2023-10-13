import React from 'react'
import {useState} from 'react'
import helpsection1 from "../assets/helpsection1.svg";
import helpsection12 from "../assets/helpsection12.svg";
import helpsection13 from "../assets/helpsection13.svg";
import helpsection14 from "../assets/helpsection14.svg";
import Cards1 from './Cards1';
interface all {
    setvalue:React.Dispatch<React.SetStateAction<number>>
    value:number
}

function Cards({value,setvalue}:all) {
    // const [data, Setdata] = useState("");
    const handleclick = () =>{
        setvalue(value+1)


    }
   
  return (
    <>

       {/* left div */}
       <div className=" border-neutral-200 bg-white my-16 xl:my-0 pb-10  xl:border-[8px] w-full h-auto  rounded-3xl ">
            <p className="p-7 text-3xl font-Raleway font-bold">What can we help you with?</p>
            <div className="w-11/12 m-3 md:m-7 font-Open_Sans font-normal text-sm  h-0">Question 1 of 5</div>
            {/* progress Bar */}
            <div className="w-11/12 m-3 md:mx-7 content-center   h-3 dark:bg-neutral-200">
              <div className="bg-[#715BA8] h-3  w-1/5"></div>
            </div>
            {/* cards */}
            <div className="flex justify-around flex-wrap py-7  gap-14 md:gap-0">
              <div className="border-neutral-200 border-[4px] cursor-pointer text-center hover:shadow-md  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
                <img
                  className="w-60 h-36 p-4 m-3"
                  src={helpsection1}
                  alt="error"
                />
                <p className="pt-2 m-auto w-52 h-20   text-lg font-Open_Sans font-normal">
                  Home Equity Loan - Cash Out
                </p>
              </div>
              <div className="border-neutral-200 border-[4px] text-center cursor-pointer hover:shadow-md  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
                <img
                  className="w-60 h-36 p-4 m-3"
                  src={helpsection12}
                  alt="error"
                />
                <p className="pt-2 m-auto w-52 h-20    text-lg font-Open_Sans font-normal">
                  Home Equity Line Of Credit
                </p>
              </div>
            </div>
            <div className="flex justify-around flex-wrap py-7  gap-14 md:gap-0">
              <div className="border-neutral-200 border-[4px] text-center cursor-pointer hover:shadow-md  md:border-[8px] flex rounded-3xl justify-center items-center flex-col " onClick={handleclick}>
                <img
                  className="w-60 h-36 p-4 m-3"
                  src={helpsection13}
                  alt="error"
                />
                <p className="pt-2 m-auto w-52 h-20    text-lg font-Open_Sans font-normal">
                  Debt Consolidation Home Equity Loan
                </p>
              </div>
              <div className="border-neutral-200 cursor-pointer border-[4px] text-center hover:shadow-md  md:border-[8px] flex rounded-3xl justify-center items-center flex-col" onClick={handleclick}>
                <img
                  className="w-60 h-36 p-4 m-3"
                  src={helpsection14}
                  alt="error"
                />
                <p className="pt-2 m-auto w-52 h-20    text-lg font-Open_Sans font-normal">
                  Refinance My Current Mortgage
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cards
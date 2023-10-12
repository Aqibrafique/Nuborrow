import React from 'react'
import {useState} from 'react'
import Back from '../assets/back.svg'

interface all {
    setvalue:React.Dispatch<React.SetStateAction<number>>
    value:number
}

function cards3({setvalue, value}:all) {
    const [data, setData] = useState<string>("200000.00");

    const handleclick = () =>{
        setvalue(value+1)
      }
      const Goback = () =>{
        setvalue(value-1)
    }
  return (
    <><div className=" border-neutral-200 bg-white border-[4px] md:border-[8px] w-full h-auto  rounded-3xl ">
    <img className="w-10 h-10 mt-4 ml-4" src={Back} alt="back error" onClick={Goback} />
    <p className=" text-4xl font-bold text-center mt-16 px-12">
    How much money do you need?
    </p>
    <div className="w-11/12 m-7   h-3">Question 4 of 5</div>
    {/* progress Bar */}
    <div className="w-11/12 m-7   h-3 dark:bg-neutral-200">
      <div className="bg-[#715BA8] h-3  w-4/5"></div>
    </div>
    {/* value */}
    <div className="text-center text-3xl font-bold m-32">
      <span>$</span>
      {data}
    </div>
    {/* slider */}
    <div>
      <input
        className="w-11/12 m-7 cursor-pointer rounded-none bg-neutral-200 appearance-none range-lg"
        type="range"
        min="200000.00"
        max="1500000.00"
        step="10"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
    <div className="w-11/12  flex items-center justify-center m-9">
      <button className="w-4/12 h-12 rounded-full text-center font-bold text-xl bg-[#715BA8] text-white" onClick={handleclick}>
        Next
      </button>
    </div>
  </div>
    
    </>
  )
}

export default cards3
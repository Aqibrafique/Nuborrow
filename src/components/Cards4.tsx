import React from 'react'
import Back from '../assets/back.svg'

interface all {
    setvalue:React.Dispatch<React.SetStateAction<number>>
    value:number
}

function Cards4({setvalue, value}:all) {
    const handleclick = () =>{
        setvalue(value+1)
      }
      const Goback = () =>{
        setvalue(value-1)
    }
  return (
    <>
    <div className=" border-neutral-200 bg-white border-[4px] md:border-[8px] w-full h-auto  rounded-3xl ">
    <img className="w-10 h-10 mt-4 ml-4" src={Back} alt="back error" onClick={Goback} />
    <p className=" text-4xl font-bold text-center mt-16 px-12">
    Amazing! You're no-cost reports are waiting for you.
    </p>
    <div className="w-11/12 m-7   h-3">Question 5 of 5</div>
    {/* progress Bar */}
    <div className="w-11/12 m-7   h-3 dark:bg-neutral-200">
      <div className="bg-[#715BA8] h-3  w-5/5"></div>
    </div>
    {/* form */}
    <div>
        <form className='flex flex-col w-12/12 gap-4 justify-center items-center'>
            <input className='border border-[#EDF3F3] bg-gray-50 rounded-full w-96 h-14 p-5 font-semibold' type='text' placeholder='Your name' />
            <input className='border border-[#EDF3F3] bg-gray-50 rounded-full w-96 h-14 p-5 font-semibold' type='text' placeholder='Your phone' />
            <input className='border border-[#EDF3F3] bg-gray-50 rounded-full w-96 h-14 p-5 font-semibold' type='text' placeholder='Your email' />
            <input className='border border-[#EDF3F3] bg-gray-50 rounded-full w-96 h-14 p-5 font-semibold' type='text' placeholder='your address' />
        </form>
    </div>
   
    {/* button */}
    <div className="w-11/12  flex items-center justify-center m-9">
      <button className="w-4/12 h-12 rounded-full text-center font-bold text-xl bg-[#715BA8] text-white" onClick={handleclick}>
        Next
      </button>
    </div>
  </div>
    </>
  )
}

export default Cards4
import React from 'react'
import Logo from '../assets/Logo.svg'
import Google from '../assets/google.svg'
function Header() {
  return (
    <>
    <div className=' w-full drop-shadow-xl'>
      <div className=' w-full  container p-4 m-auto flex flex-row justify-between items-center drop-shadow-2xl'>
    <div>
        <img className='h-26 w-40'  src={Logo} alt='error'/>
        <span>FSRA LIC 13115</span>
      
    </div>
    <div className='text-center'>
        <img className='h-30 w-56' src={Google} alt='error'/>
        <span className=''>1000's of online reviews</span>
    </div>

   </div>
   </div>
    </>
  )
}

export default Header
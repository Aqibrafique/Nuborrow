import React from 'react'
import Logo from '../assets/Logo.svg'
import Google from '../assets/google.svg'
function Header() {
  return (
    <>
    <div className=' w-full drop-shadow-xl'>
      <div className=' w-full container m-auto flex flex-row justify-between items-center'>
    <div>
        <img className='h-20 w-40'  src={Logo} alt='error'/>
    </div>
    <div>
        <img className='h-20 w-56' src={Google} alt='error'/>
    </div>

   </div>
   </div>
    </>
  )
}

export default Header
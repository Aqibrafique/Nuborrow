
import Logo from '../assets/Logo.svg'
import Google from '../assets/google.svg'
function Header() {
  return (
    <>
    <div className=' w-full drop-shadow-xl shadow-md'>
      <div className='container p-4  m-auto flex flex-row justify-between items-center '>
    <div className='py-0'>
        <img className='md:h-12 md:w-auto h-30 w-32 object-contain'  src={Logo} alt='error'/>
        <span className='text-xs md:text-base'>FSRA LIC 13115</span>
      
    </div>
    <div className='text-center'>
        <img className='md:h-12 md:w-auto h-30 w-36 object-contain' src={Google} alt='error'/>
        <span className='text-xs md:text-base'>1000's of online reviews</span>
    </div>

   </div>
   </div>
    </>
  )
}

export default Header

import Logo from '../assets/Logo.png'
import Google from '../assets/google.png'

function Indexpage() {
  return (
    <>
   <div className=' w-full container m-auto flex flex-row justify-between items-center  p-2 drop-shadow-lg'>
    <div>
        <img className='h-20 w-auto'  src={Logo} alt='error'/>
    </div>
    <div>
        <img className='h-20' src={Google} alt='error'/>
    </div>

   </div>
    </>
  )
}

export default Indexpage
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className= "mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className='ml-10 text-white text-[20px] font-bold'>Raseth</h1>
        </div>

        <div className="m-6 flex gap-3 text-2xl items-center justify-between">
            <FaLinkedin />
            <FaFacebook />
            <FaGithub />
            <FaInstagram/>
            
        </div>
    </nav>
  )
}

export default Navbar
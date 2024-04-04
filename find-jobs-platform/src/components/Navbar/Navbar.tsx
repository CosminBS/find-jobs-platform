import { useState } from "react"
import { navLinks} from "../../configs/Navlinks"
import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import UserNavData from "../UserNavData/UserNavData";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen)
    };



  return (
    <div className="w-full h-[9dvh] shadow-lg flex justify-center items-center">
        <nav className="w-full mx-auto px-4 flex justify-between items-center">
            <span className="font-poppins w-[250px] flex justify-start text-[1.4rem] font-semibold">
                <h1 className="text-[#80BCBD]">Find</h1>
                <h1 className="text-[#f8f59b]">Some</h1>
                <h1 className="text-[#80BCBD]">Jobs</h1>
            </span>
            <button onClick={handleMenu} className="absolute right-5 z-10">
                {isOpen ? <IoMdClose size={24} color="#000" /> : <FiMenu size={24} color="#000" />}
            </button>
        </nav>
        <div className={`w-full h-[120dvh] sm:h-[100dvh] pt-[70px] bg-[#ebedfb] transition-transform duration-500 absolute top-0 ${isOpen ? ' shadow-lg' : 'transform -translate-x-full'}`}>
            <div className="w-full flex flex-col px-[15px] mx-auto h-[100%] gap-3 ">
                <div className="w-full">
                    <UserNavData/>
                </div>
                <div className="flex flex-col gap-3 lg:grid grid-cols-2">
                    <div className="w-full bg-white rounded-sm flex flex-col justify-start">
                        <span className="w-full px-[15px] h-[55px] flex items-center uppercase">
                            <h1 className="text-[#80bcbdbc] font-bold text-[13px]">My Account</h1>
                        </span>
                        {navLinks.map((link, index) => (
                        <Link to={link.url} key={index} ><span className="font-poppins uppercase font-semibold text-[15px] flex items-center h-[45px] w-full  px-[15px] hover:bg-[#b6e8e9]">{link.name}</span></Link>
                        ))}
                    </div>
                    <div className="w-full bg-white rounded-sm flex flex-col justify-start">
                        <span className="w-full px-[15px] h-[55px] flex items-center uppercase">
                            <h1 className="text-[#80bcbdbc] font-bold text-[13px]">Usefull</h1>
                        </span>
                        <span>
                            <Link to='/accountSettings'><h1 className="font-poppins uppercase font-semibold text-[15px] flex items-center h-[45px] w-full  px-[15px] hover:bg-[#b6e8e9]">Account Settings</h1></Link>
                            <Link to='/accountSettings'><h1 className="font-poppins uppercase font-semibold text-[15px] flex items-center h-[45px] w-full  px-[15px] hover:bg-[#b6e8e9]">Jobs Saved</h1></Link>
                            <Link to='/accountSettings'><h1 className="font-poppins uppercase font-semibold text-[15px] flex items-center h-[45px] w-full  px-[15px] hover:bg-[#b6e8e9] gap-2">Log out < MdLogout/></h1></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
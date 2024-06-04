import { motion } from "framer-motion"
import { useUserDetails } from "../../context/UserDataContext"

const Navbar = () => {

    const { userDetails } = useUserDetails()

  return (
    <motion.div
    initial={{ y: '-100%' }}  
    animate={{ y: '0%' }}     
    transition={{ type: 'tween', duration: 1 }} 

    className="w-full h-screen bg-[#2929294f] absolute top-0"
    >
    <div>
        <div>
            <h1>{userDetails.companyName}</h1>
            <p>{userDetails.email}</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Navbar
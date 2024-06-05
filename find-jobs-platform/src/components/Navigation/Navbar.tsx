import { motion } from "framer-motion"
import { useUserDetails } from "../../context/UserDataContext"
import { logOut } from "../../api/methods/auth"
import { useNavigate } from "react-router"
import { XMarkIcon  } from "@heroicons/react/24/outline";


const Navbar = () => {

    const { userDetails, setLoading } = useUserDetails()
    console.log(userDetails)

    const navigate = useNavigate()

    const handleLogOut = async () => {
      try{
         setLoading(true)
         await logOut()
         localStorage.removeItem('loggedUser')
         navigate('/login')
      } catch(error){
          console.error(error)
      } finally {
          setLoading(false)
      }
  }

  return (
    <motion.div
    initial={{ y: '-100%' }}  
    animate={{ y: '0%' }}
    exit={{ y: '-100%' }}     
    transition={{ type: 'tween', duration: 0.5 }} 

    className="w-full h-screen bg-[#818181] absolute top-0"
    >
    <div>
        <div>
            <h1>{userDetails.companyName}</h1>
            <p>{userDetails.email}</p>
        </div>
        <button onClick={() => navigate('/')}>
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button>
    </div>
    </motion.div>
  )
}

export default Navbar
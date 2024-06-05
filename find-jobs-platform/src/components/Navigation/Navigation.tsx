import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUserDetails } from "../../context/UserDataContext"
import { motion } from "framer-motion"
import { Bars3Icon, ChevronDownIcon  } from "@heroicons/react/24/outline";



const Navigation = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const { userDetails } = useUserDetails()
    const navigate = useNavigate()


    const userLinks = [
        {name: 'Search Jobs', path: '/jobs'},
        {name: 'My CV', path: '/myCV'},
        {name: 'Applications', path: '/applications'}
    ]

    const companyLinks = [
        {name: 'Urmeaza', path: '/urmeaza'}
    ]

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return(
        <>
        {windowWidth >= 768
            ? (<motion.div className="px-3 py-3 flex gap-3 items-center border-b-[1px] border-[#40128B]">
                <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>
                <div className="w-full flex px-3 items-center justify-between">
                    <div className="flex gap-4">
                        {userDetails.role === 'user'
                        ? (userLinks.map(({name, path}) => (
                            <Link to={path} key={path} className="">{name}</Link>
                        )))
                        : (companyLinks.map(({name, path}) => (
                            <Link to={path} key={path}>{name}</Link>
                        )))}
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={() => navigate('/navbar-menu')} className="bg-[#40128B] text-white px-2 py-3 hover:bg-[#40128be0] rounded-md ">
                            {userDetails.role === 'user'
                            ? (
                                <div className="w-full flex gap-3 items-center justify-end">
                                    <h1>{userDetails.firstName} {userDetails.lastName} </h1>
                                    <ChevronDownIcon className="h-4 w-4 text-white" /> 
                                </div>
                            ) 
                            : (
                                <div>
                                    <h1 className="font-semibold">{userDetails.companyName} </h1>
                                    <ChevronDownIcon className="h-4 w-4 text-white" />
                                </div>
                            ) } 
                        </button>
                    </div>
                </div>
          </motion.div>)
           : (<div className="px-3 py-3 flex gap-3 items-center justify-between">
                <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>
                <button onClick={() => navigate('/navbar-menu')}>
                    <Bars3Icon className="h-6 w-6 text-[#40128B]" />
                </button>
           </div>)}
        </>
    )
}

export default Navigation
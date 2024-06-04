import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        {isOpen ? (<div>Da</div>) : (<Navbar/>)}
        </>
    )
}

export default Navigation
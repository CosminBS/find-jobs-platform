import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Navbar from "../components/Navbar/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
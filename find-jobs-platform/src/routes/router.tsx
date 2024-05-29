import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import CompanyRegister from "../pages/Register/Company/CompanyRegister"
import CandidateRegister from "../pages/Register/Candidate/CandidateRegister"
import { ToastProvider } from "../context/ToastContext"


const AppRouter = () => {

  const routes = [
    {name: <Register/>, path: '/register'},
    {name: <Login/>, path: '/login'},
    {name: <Home/>, path: '/'},
    {name: <CompanyRegister/>, path: '/register-as-company'},
    {name: <CandidateRegister/>, path: '/register-as-candidate'},
  ]

  return (
    <BrowserRouter>
      <ToastProvider>
      <Routes>
        {routes.map(({name, path}) => (
          <Route element={name} path={path} key={path} />
        ))}
      </Routes>
      </ToastProvider>

    </BrowserRouter>
  )
}

export default AppRouter
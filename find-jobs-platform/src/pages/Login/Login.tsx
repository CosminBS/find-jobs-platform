import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useToast } from "../../context/ToastContext"
import { User } from "../../interface/interface"
import { useUserDetails } from "../../context/UserDataContext"
import { loginUser } from "../../api/methods/auth"


const candidateLogIn = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const { toastSuccess, toastError } = useToast()
  const { userDetails, setUserDetails } = useUserDetails()

  const onSubmit: any = async(data: User) => {
    try{
      const loggedInSucces = await loginUser(data)
      if(loggedInSucces){
        toastSuccess('Logged in successfully.')
        setUserDetails(loggedInSucces)
      }

    } catch(error: any){
      toastError(error.message)
    }
  }

  return(
    <div>
        <form>
            Formular inregistrare candidat
        </form>
    </div>
  )

}

const Login = () => {

  return (
    <div className="w-full flex h-screen">
      

        <div className="w-full flex justify-between">
          <div className="w-full md:w-[60%] bg-[#f5f5ff] px-2 ">
              <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>
              <div className="w-full flex items-center justify-center flex-col bg-blue-500">
                  <div>
                    <button>Candidate</button>
                    <button>Company</button>
                  </div>
              </div>
          </div>
          <div className="w-[40%] bg-gradient-to-r from-[#9333EA] to-sky-300 h-screen hidden md:flex">

          </div>
        </div>

    </div>
  )
}

export default Login
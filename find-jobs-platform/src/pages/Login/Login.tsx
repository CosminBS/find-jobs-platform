import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "../../context/ToastContext"
import { Company, User } from "../../interface/interface"
import { useUserDetails } from "../../context/UserDataContext"
import { loginUser } from "../../api/methods/auth"

const Login = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()
  const { toastSuccess, toastError } = useToast()
  const { setUserDetails, setLoading } = useUserDetails()
  const navigate = useNavigate()

  const onSubmit: any = async(data: User | Company) => {
    try{
      setLoading(true)
      const loggedInSucces = await loginUser(data)

      if(loggedInSucces){
        toastSuccess('Logged in successfully.')
        setUserDetails(loggedInSucces)
        navigate('/')
      }

    } catch(error: any){
      toastError(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="w-full flex h-screen">
      

        <div className="w-full flex justify-between">
          <div className="w-full lg:w-[60%] bg-[#f5f5ff] px-2 py-5">
              <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>
              
              <div className="w-full h-[90%] flex items-center justify-center flex-col py-3">

                <div className=" w-full sm:w-[450px] flex flex-col shadow-lg rounded-md bg-white px-3 py-8 gap-4">
                    <span className="flex flex-col gap-2">
                      <h1 className="text-xl font-semibold">Login to your account.</h1>
                      <p className="text-[14px]">Update your CV and apply for jobs or find the talent you need</p>
                    </span>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                      <div className="w-full flex justify-between flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="e.g. mail@mail.com" id="email" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('email', {
                        required: {value: true, message: 'This filed is mandatory'},
                        pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address'
                          }
                        })}/>
                        <p className="text-xs h-3 text-red-600">{errors.email && errors.email.message as string}</p>
                      </div>

                      <div className="w-full flex justify-between flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="********" id="password" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('password', {required:{ value: true, message: 'This filed is mandatory' },
                          minLength: { value: 6, message: 'Password should be at least 6 characters'},
                          pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                          message: 'Password should contain letters, numbers, and a special character'
                          }} )}/>
                          <p className="text-xs h-3 text-red-600">{errors.password && errors.password.message as string}</p>
                          
                          <div className="w-full flex justify-end items-end">
                            <p className="text-[13px]"><Link to='/login'>Forgot password?</Link></p>
                          </div>
                      </div>

                      <div className="w-full py-4">
                        <button type="submit" className="py-3 w-full bg-[#40128B] text-white rounded-md hover:bg-[#40128be0]">Sign in</button>
                      </div>

                      <div className="w-full flex items-center justify-center gap-1">
                        <h1 className="text-[13px]">No account?</h1>
                        <p className="text-[15px] font-semibold"><Link to='/register'>Create an account.</Link></p>
                      </div>

                    </form>
                </div>
              
              </div>
          </div>
          <div className="w-[40%] bg-gradient-to-r from-[#9333EA] to-sky-300 h-screen hidden lg:flex">
          
          </div>
        </div>

    </div>
  )
}

export default Login
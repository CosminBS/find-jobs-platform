import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { User } from "../../../interface/interface"

const CandidateRegister = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()

  const onSubmit: any = async(data:User) => {
    console.log(data)
  }


  return (
    <div className="w-full flex py-7 px-3 flex-col gap-10 bg-gradient-to-r from-yellow-100 to-sky-300">

      <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>

      <div className="w-full flex items-center justify-center flex-col">

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3 py-3 justify-center bg-white rounded-sm shadow-md items-center px-4 sm:w-[450px]">

          <div className="gap-3 py-4 border-b-[1px] w-full border-grey-300">
            <h1 className="font-bold text-[18px]">Create your candidate account</h1>
            <p className="text-[14px]">One more step and the account is ready</p>
          </div>

          <div className="w-full flex justify-between flex-col sm:flex-row gap-2">
            <span className="flex gap-2 py-2 flex-col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" placeholder="e.g. John" id="firstName" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('firstName', {required: true})}/>
              <p className="text-xs text-red-600 h-3">{errors.firstName && 'This field are mandatory.'}</p>
            </span>
            <span className="flex gap-2 py-2 flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" placeholder="e.g. Doe" id="lastName" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('lastName', {required: true})}/>
              <p className="text-xs text-red-600 h-3">{errors.lastName && "This field are mandatory."}</p>
            </span>
          </div>

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
          </div>

          <div className="w-full flex justify-between flex-col gap-2">
            <label htmlFor="city">City</label>
            <input type="text" placeholder="e.g. Bucharest" id="city" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('city', {required: true})}/>
            <p className="text-xs h-3 text-red-600">{errors.city && 'This field are mandatory.'}</p>
          </div>

          <div className="w-full flex justify-between flex-col gap-2">
            <label htmlFor="birthDate">Birth date</label>
            <input type="date" id="birthDate" className="py-3 w-full px-2 border-[1px] border-gray-300 rounded-md outline-none text-[13px]" {...register('dateOfBirth', {required: {value: true, message:'This field is mandatory'},
            validate: value => {
              const selectedDate = new Date(value);
              const minAge = new Date();
              minAge.setFullYear(minAge.getFullYear() - 120);
              const maxAge = new Date();
              maxAge.setFullYear(maxAge.getFullYear() - 18);
              if(selectedDate < minAge || selectedDate > maxAge){
                return 'Age should be between 18 and 120 years';
              }
              return true;
            }
          })}/>
          <p className="text-xs h-6 text-red-600">{errors.dateOfBirth && errors.dateOfBirth.message as string}</p>
          </div>

          <div className="w-full py-4">
            <button type="submit" className="py-3 w-full bg-[#40128B] text-white rounded-md hover:bg-[#40128be0]">Create account</button>
          </div>

          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <h1 className="text-[13px]">Already have an account?</h1>
            <p className="text-[15px] font-semibold"><Link to='/login'>Login to your account</Link></p>
          </div>
          
        </form>

      </div>

    </div>
  )
}

export default CandidateRegister
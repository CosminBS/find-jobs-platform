import { useState } from "react";
import { useForm } from "react-hook-form"


const HomeCard = () => {

  let {register, handleSubmit, formState: {errors}} = useForm();
  const [formData, setFormData] = useState('');

  const onSubmit = (data) => {
    setFormData(data);
  }

  return(
    <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col justify-start gap-4 font-poppins sm:px-11 sm:py-11 xl:w-[50%] xl:bg-[#f1f2f9] xl:rounded-sm xl:shadow-xl">
      <span className="w-full flex flex-col gap-2">
        <h1 className="text-[1.5rem] font-semibold">We support you to do better.</h1>
        <p>Do you want a better job? It's on FindSomeJobs. Find it and apply now!</p>
      </span>
      <span className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-start gap-3">
            <input type="text" {...register('keywords')} placeholder="Keywords" className="w-full pl-2 h-[65px] outline-none rounded-sm shadow-lg"/>
            <input type="text" {...register('town')} placeholder="Town" className="w-full pl-2 h-[65px] outline-none rounded-sm shadow-lg"/>
            <button type="submit" className="w-full flex justify-center items-center h-[65px] shadow-xl rounded-sm bg-[#7bc4c4] text-white md:hover:bg-[#60a3a3]">Looking for a job</button>
        </form>
      </span>
    </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-[url('./assets/homeBg.jpg')] w-full h-[90dvh] bg-cover bg-center bg-no-repeat px-4 py-7">
        <HomeCard/>


    </div>
  )
}

export default Home
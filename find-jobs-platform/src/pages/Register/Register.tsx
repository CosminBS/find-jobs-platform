import { Link } from "react-router-dom"
import { BriefcaseIcon, UserCircleIcon, CheckBadgeIcon    } from "@heroicons/react/24/outline";

const Register = () => {
  return (
    <div className="flex flex-col py-10 px-5 bg-[#f5f5ff] gap-10 lg:h-screen">
        <span className="text-2xl font-bold text-[#40128B]"><Link to='/'>FindJobs.</Link></span>

        <div className="w-full flex items-center flex-col">
            <h1 className="font-semibold text-lg">Create new account</h1>
            <p>Choose the right account type for you</p>
        </div>

        <div className="flex flex-col gap-5 w-full items-center justify-center lg:flex-row">


            <div className="w-full flex flex-col items-center shadow-md bg-white rounded-md px-3 py-3 gap-10 md:w-[400px] lg:h-[400px] lg:justify-between">
                <span className="flex flex-col gap-2 items-center justify-center h-[140px]">
                    <UserCircleIcon  className="h-14 w-14 text-[#9336B4]" />
                    <h1>Candidate account</h1>
                </span>
                    <span className="w-full flex flex-col gap-6">
                        <span className="w-full flex flex-col gap-2 text-[13px]">
                            <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>Alot of available jobs</p>
                            <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>Manually verified ads and companies</p>
                            <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>Personalized job recommendations</p>
                     </span>
                     <Link to='/register-as-candidate'> 
                        <button className="py-3 w-full bg-[#9336B4] rounded-sm text-white font-semibold hover:bg-[#ce76ee]">I want to get hired
                        </button>
                    </Link>
                </span>

            </div>


            <div className="w-full flex flex-col items-center shadow-md bg-white rounded-md px-3 py-3 gap-10 md:w-[400px] lg:h-[400px] lg:justify-between">
                <span className="flex flex-col gap-2 items-center justify-center h-[140px]">
                    <BriefcaseIcon  className="h-14 w-14 text-[#40128B]" />
                    <h1>Company account</h1>
                </span>
                <span className="w-full flex flex-col gap-6">
                     <span className="w-full flex flex-col gap-2 text-[13px]">
                        <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>First Business ad free</p>
                        <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>High performing recruitment ads</p>
                        <p className="flex gap-2"><CheckBadgeIcon className="h-4 w-4 text-green-500"/>Impeccable customer care</p>
                     </span>
                    <Link to='/register-as-company'>
                        <button className="py-3 w-full bg-[#40128B] rounded-sm text-white hover:bg-[#866eb5]">
                            I want to hire
                        </button>
                    </Link>
                </span>

            </div>


        </div>

    </div>
  )
}

export default Register
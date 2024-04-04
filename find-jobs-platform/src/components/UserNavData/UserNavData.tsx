
const UserNavData = () => {
    return (
      <div className="w-[full] h-[100px] flex justify-start items-center bg-white px-[15px] mx-auto  rounded-sm gap-4">
        <span>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full ">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
        </div>
        </span>
          <span className="font-poppins">
              <h1 className="text-[1.3rem] font-semibold">Nume utilizator</h1>
              <h3 className="text-[14px]">utilizator@mail.com</h3>
          </span>
      </div>
    )
  }
  
  export default UserNavData
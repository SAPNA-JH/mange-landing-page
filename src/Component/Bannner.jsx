import React from 'react';

function Bannner() {
  return (
    <div className="w-screen min-h-[30vh] flex flex-col items-end justify-end  mt-5">
       <div className=" h-[30vh] w-full bg-orange-500 relative flex flex-col md:flex-row  justify-around items-center ">
        <img src="" alt="" />
        <p className="text-white text-4xl md:text-5xl text-center md:text-left font-bold md:w-2/5 ">
            simplify how your works today.
             </p>
        <button className="px-6 py-6 rounded-full text-orange-500 bg-white">
            Get Started
        </button>
       </div>
    </div>
  )
}

export default Bannner;

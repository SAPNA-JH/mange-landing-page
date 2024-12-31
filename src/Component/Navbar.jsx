import React from 'react';
import { Logo } from "../assests";

const Menu = [

    {
        id:1,
        name:"Pricing",
        link: "/#",
    },
    {
        id:2,
        name:"Product",
        link: "/#",
    },
    {
        id:3,
        name:"About us",
        link: "/#",
    },
    {
        id:4,
        name:"Careers",
        link: "/#",
    },
    {
        id:5,
        name:"Community",
        link: "/#",
    },

];
function Navbar() {
  return (
    <div>
      <div className="flex justify-around h-28 items-center relative">
        <div className="flex justify-between md:block px-3 w-full md:w-max md:ms-6">
            <a href="#" className="">
            <img src={Logo} alt="" className="h-7 md:h-10 md:w-56 " />

            </a>
        </div>

        <div className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
                {
                    Menu.map((data)=>(
                        <li key={data.div}>
                            <a href={data.link} className="inline-blockpx-4">
                                {data.name}
                            </a>

                        </li>
                    ))}
            </ul>
</div>
<div className="bg-orange-500 px-5  py-5 rounded-full  ">
    <button className="hidden md:block me-8 text-white">Get Started</button>
</div>

      </div>
</div>
  )
}

export default Navbar;
import React from "react";
import { IllustrationIntro } from "../assests";

function Landingpage() {
  return (
    <div className="min-h-[80vh] w-screen flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col justify-center items-center gap-5">
          <p className="text-3xl md:text-6xl text-center md:text-left font-semibold text-neutral-veryDarkBlue">
            Bring everyone together to build better products.
          </p>
          <p className="ext-center md:text-left md:text-xl text-neutral-darkGrayishBlue mb-6">
            Manage makes it simple for software teams to plan day to day tasks
            while keeping the larger team goals in view
          </p>
          <div className="bg-orange-600 px-8 py-5 rounded-full ">
            <button className="text-white">Get started</button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2  flex justify-center items-center">
        <img
          src={IllustrationIntro}
          className="mx-auto md:h-[85%] and w-[75%] ms-5"
          alt="IllustrationIntro"
        />
      </div>
    </div>
  );
}

export default Landingpage;
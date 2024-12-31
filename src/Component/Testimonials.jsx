import React from "react";
import {
    AliImg,
    AnishaImg,
    bigSimplifySectionTablet,
    RichardImg,
} from "../assests";

const testimonial = [
  {
    name: "Anisha Li",
    quote:
      "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    image: AnishaImg,
  },
  {
    name: "Ali Brave",
    quote:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    image: AliImg,
  },
  {
    name: "Richard Watts",
    quote:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
    image: RichardImg,
  },
];

function Testimonials() {
  return (
    <div className="min-h-[75vh] w-screen relative pt-16">
      <img
        src={bigSimplifySectionTablet}
        alt=""
        className=" absolute -top-[25rem] -left-[35rem] -z-10"

        
      />
      
          <p className="text-4xl text-center text-blue-900 font-bold">What they've said</p>
        
        <div className="flex flex-row justify-evenly m-10 p-6">
          {testimonial.map((item, index) => (
            <div key={index} className=" flex flex-col justify-center items-center gap-3  w-[90%] md:w-[30%] relative py-8 rounded-md px-3 ">
              <div className="h-[72%] bottom-0 w-full absolute -z-10 bg-slate-300"></div>
                <img src={item.image} alt={item.name}
                className=" h-20 w-20 rounded-xl"
                />
                <p className="text-blue-900 font-bold">{item.name}</p>
                <p className="text-gray-600 text-center">{item.quote}</p>
              
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-600 px-8 py-5 rounded-full">Get Started</button>
        </div>
    </div>
  );
}

export default Testimonials;

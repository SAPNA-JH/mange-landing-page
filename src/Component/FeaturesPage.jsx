import React from 'react';

const featuresItems = [
    {
    heading: "Track company-wide progress",
    subheading: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest details. Never lose sight of the bigger picture again.",

}, 
{
    heading: "Advanced built-in reports",
    subheading:
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    heading: "Everything you need in one place",
    subheading:
      "Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.",
  },




];

function FeaturesPage() {
  return (
    <div className="min-h-[70vh] w-screen mt-6 md:mt-0  flex flex-col justify-center items-center md:flex-row px-2 ">
        <div className="w-full md:w-1/2 h-3/5">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col h-full gap-5">
        <p className=" text-2xl md:text-4xl text-center  w-1/2 mx-auto md:w-full md:text-left font-semibold text-blue-950 ">
          What's different about Manage?
        </p>
        <p className=" text-center md:text-left text-gray-400 mb-6 md:w-3/5 mx-auto">
          Manage provide all the functionality your team needs. Without the complexity. Our software is tailor-made for modern digital product teams.
        </p>

      </div>
        </div>
      <div className=" w-full md:w-1/">
        <div className="w-full md:w-3/5 mx-auto  flex flex-col gap-6 ">
          {
            featuresItems.map((items, index)=>(
              <div key={index} className="flex gap-5">
                <p className="px-6 py-2 h-max rounded-full bg-orange-400 text-white">
                  0{index+1}
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-blue-950 text-2xl">{items.heading}</p>
                  <p  className="text-gray-400">{items.subheading}</p>

                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>

    
  )
}

export default FeaturesPage;

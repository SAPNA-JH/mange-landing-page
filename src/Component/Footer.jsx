import React from "react";
import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  IconYoutube,
  Logo,
} from "../assests";

const list = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Pricing",
    link: "/#",
  },
  {
    id: 3,
    name: "Products",
    link: "/#",
  },
  {
    id: 4,
    name: "About Us",
    link: "/#",
  },
];

function Footer() {
  return (
    <div className="flex bg-black  justify-around py-4">
      <div className=" flex flex-col gap-14 p-3">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-4">
          <img src={IconFacebook} alt="" />
          <img src={IconYoutube} alt="" />
          <img src={IconTwitter} alt="" />
          <img src={IconPinterest} alt="" />
          <img src={IconInstagram} alt="" />
        </div>
      </div>

        <div className="bg-black text-white">
          {list.map((item, index) => (
            <div key={item}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="text-white">
          {["Carrer", "Community", "Privacy Policy"].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>

      {/* <div className="text-white">heloo rj</div> */}
    </div>
  );
}
 
export default Footer;

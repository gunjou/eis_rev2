import React from "react";
import { FaBed, FaPeopleArrows, FaBookDead } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { MdPersonOff } from "react-icons/md";
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown, } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const CardQualityService = ({type}) => {
	let data;

	switch (type) {
    case "bor":
      data = { icon: <FaBed />, title: "BOR", value: "65.2", fill: "[#b494ff]" }; break;
    case "alos":
      data = { icon: <IoTime />, title: "ALOS", value: "6.4", fill: "[#ffba94]" }; break;
    case "toi":
      data = { icon: <FaPeopleArrows />, title: "TOI", value: "40.0", fill: "[#6e9ffe]" }; break;
    case "bto":
      data = { icon: <RiArrowLeftRightFill />, title: "BTO", value: "2.8", fill: "[#df3493]" }; break;
    case "ndr":
      data = { icon: <MdPersonOff />, title: "NDR", value: "50.5", fill: "[#55caaf]" }; break;
    case "gdr":
      data = { icon: <FaBookDead />, title: "GDR", value: "90.3", fill: "[#ea94ff]" }; break;
    default:
      break;
  }
  return (
    <div className="CardQualityService">
      <div className={"bg-"+data.fill+"/90" + " rounded-lg m-1 drop-shadow-lg text-white"}>
        <div className="p-1.5 flex">
          <div className={"text-"+data.fill + " text-xl p-2 rounded-lg bg-white"}>
            {data.icon}
          </div>
          <p className="title pl-5 font-semibold">{data.title}</p>
        </div>
        <div className="value pb-2 text-2xl font-semibold">{data.value}</div>
        <div className="text-xs text-left pl-3 flex">Trend : <IoMdArrowDropup />10.2%</div>
        <div className="text-xs text-left pl-3 pb-1 flex">Predict : <HiOutlineChevronDoubleDown />15.7%</div>
      </div>
    </div>
  );
};

export default CardQualityService;

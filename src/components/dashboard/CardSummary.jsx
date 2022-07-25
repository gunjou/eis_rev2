import React from "react";
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaHospital, FaMoneyCheckAlt, FaNotesMedical, FaStethoscope, } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdInventory2 } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";

const CardSummary = ({type}) => {
  let card;
  switch (type) {
    case "kunjungan":
        card = { title: "Kunjungan", icon: <FaHospital className="text-[#b494ff]"/>, url: "/service", value: 770, trend: 38.5, predict: 23.5, fill: "bg-[#b494ff]/90"}; break;
    case "pelayanan":
        card = { title: "Pelayanan", icon: <FaStethoscope className="text-[#ffba94]"/>, url: "/service", value: 1829, trend: 40.0, predict: 20.3, fill: "bg-[#ffba94]/90"}; break;
    case "inventory":
        card = { title: "Inventory", icon: <MdInventory2 className="text-[#6e9ffe]"/>, url: "/inventory", value: 1050, trend: 18.9, predict: 19.8, fill: "bg-[#6e9ffe]/90"}; break;
    case "medical-record":
        card = { title: "Medical Record", icon: <FaNotesMedical className="text-[#df3493]"/>, url: "/medical-record", value: 681, trend: 20.2, predict: 18.0, fill: "bg-[#df3493]/90"}; break;
    case "finance":
        card = { title: "Finance", icon: <FaMoneyCheckAlt className="text-[#55caaf]"/>, url: "/finance", value: 709, trend: 18.5, predict: 9.7, fill: "bg-[#55caaf]/90"}; break;
    case "human-resource":
        card = { title: "Human Resource", icon: <BsFillFileEarmarkPersonFill className="text-[#ea94ff]"/>, url: "/human-resource", value: 14, trend: 4.8, predict: 1.0, fill: "bg-[#ea94ff]/90"}; break;
    default:
        break;
}
  return (
    <div className="CardSummary grow w-36 lg:w-48 pr-3 text-[#eeeff1] font-semibold">
      <div className={card.fill + " p-2 rounded-md drop-shadow-lg"}>
        <div className="flex ">
          <div className="p-1 bg-[#eeeff1] rounded-lg text-[25px] absolute right-2">
            {card.icon}
          </div>
          <span className="text-base ">{card.title}</span>
        </div>
        <div className="text-2xl p-2 font-semibold flex cursor-default">
          {card.value}
          <Tooltip title="Trend" placement="top">
            <sup className="flex text-sm">
              <IoMdArrowDropup/>
              {card.trend}%
            </sup>
          </Tooltip>
        </div>
        <NavLink to={card.url}>
          <p className="text-xs text-left font-normal cursor-pointer">details ⟶</p>
        </NavLink>
        <Tooltip title="Predict" placement="top">
          <p className="flex text-sm absolute right-2 bottom-2">
            <HiOutlineChevronDoubleDown />
            {card.predict}%
          </p>
        </Tooltip>
      </div>
    </div>
  );
};

export default CardSummary;

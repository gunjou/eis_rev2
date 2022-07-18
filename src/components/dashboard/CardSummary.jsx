import React from "react";
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown } from "react-icons/hi";
import {
  FaHospital,
  FaMoneyCheckAlt,
  FaNotesMedical,
  FaStethoscope,
} from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const CardSummary = ({type}) => {
  let card;
  switch (type) {
    case "kunjungan":
        card = { title: "Kunjungan", icon: <FaHospital className="text-[#b494ff]"/>, value: 770, trend: 38.5, predict: 23.5, fill: "bg-[#b494ff]/90"}; break;
    case "pelayanan":
        card = { title: "Pelayanan", icon: <FaStethoscope className="text-[#ffba94]"/>, value: 1829, trend: 40.0, predict: 20.3, fill: "bg-[#ffba94]/90"}; break;
    case "inventory":
        card = { title: "Inventory", icon: <MdInventory2 className="text-[#6e9ffe]"/>, value: 1050, trend: 18.9, predict: 19.8, fill: "bg-[#6e9ffe]/90"}; break;
    case "medical-record":
        card = { title: "Medical Record", icon: <FaNotesMedical className="text-[#df3493]"/>, value: 681, trend: 20.2, predict: 18.0, fill: "bg-[#df3493]/90"}; break;
    case "finance":
        card = { title: "Finance", icon: <FaMoneyCheckAlt className="text-[#55caaf]"/>, value: 709, trend: 18.5, predict: 9.7, fill: "bg-[#55caaf]/90"}; break;
    case "human-resource":
        card = { title: "Human Resource", icon: <BsFillFileEarmarkPersonFill className="text-[#ea94ff]"/>, value: 14, trend: 4.8, predict: 1.0, fill: "bg-[#ea94ff]/90"}; break;
    default:
        break;
}
  return (
    <div className="CardSummary grow pr-3 text-[#eeeff1] font-semibold">
      <div className={card.fill + " p-2 rounded-md drop-shadow-lg"}>
        <div className="flex ">
          <div className="p-1 bg-[#eeeff1] rounded-lg text-lg">
            {card.icon}
          </div>
          <span className="text-base pl-3">{card.title}</span>
        </div>
        <div className="text-2xl p-2 font-semibold">{card.value}</div>
        <div className="flex gap-4">
          <div className="flex">
            <span className="text-[10px] pr-1.5">Trend</span>
            <span className="flex text-[10px]">
              {card.trend}%
              <HiOutlineChevronDoubleUp className="text-sm"/>
            </span>
          </div>
          <div className="flex">
            <span className="text-[10px] pr-1.5">Predict</span>
            <span className="flex text-[10px]">
              {card.predict}%
              <HiOutlineChevronDoubleDown className="text-sm"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;

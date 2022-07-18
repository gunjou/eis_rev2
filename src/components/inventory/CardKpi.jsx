import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";

const CardKpi = ({ type }) => {
  let data;

  switch (type) {
    case "optimal":
      data = { title: "Optimal", value: 1386500000, trend: 27.1, predict: 9.2, fill: "bg-[#55caaf]/90", }; break;
    case "understock":
      data = { title: "Understock", value: 650000000, trend: 26.6, predict: 2.4, fill: "bg-[#df3493]/90", }; break;
    case "overstock":
      data = { title: "Overstock", value: 327500000, trend: 7.2, predict: 2.9, fill: "bg-[#ffba94]/90", }; break;
    default:
      break;
  }
  return (
    <div className="CardKpi grow p-1">
      <div className={"p-2 " + data.fill + " text-white rounded-lg drop-shadow-lg"} >
        <div className="flex">
          <p className="title text-lg pb-2.5 font-semibold flex">
            {data.title}
            <IoMdArrowDropup className="text=lg" />
            {data.trend}%
          </p>
          <p className="text-sm absolute right-0 flex pr-3 p-1">
            predict : <HiOutlineChevronDoubleUp />
            {data.predict}%
          </p>
        </div>
        <div className="value text-3xl pb-3 font-semibold flex">
          Rp{data.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
          ,00
        </div>
        <p className="text-xs text-left cursor-pointer">details ⟶</p>
      </div>
    </div>
  );
};

export default CardKpi;

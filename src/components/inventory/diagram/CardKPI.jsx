import React from "react";
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { Tooltip } from "@mui/material";


function GetTrend(value) {
  if (value > 0) {
    return (<span className="text-white flex"><IoMdArrowDropup/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><IoMdArrowDropdown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

function GetPredict(value) {
  if (value > 0) {
    return (<span className="text-white flex"><HiOutlineChevronDoubleUp/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-500 flex"><HiOutlineChevronDoubleDown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

const text = [
  `Total nilai item yang berada pada status Optimal`,
  `Total nilai item yang berada pada status Understock`,
  `Total nilai item yang berada pada status Overstock`,
]

const CardKPI = ({type}) => {
    let data;

  switch (type) {
    case "optimal":
      data = { title: "Optimal", value: 1386500000, trend: 27.1, predict: 9.2, fill: "bg-[#55caaf]/90", info: text[0] }; break;
    case "understock":
      data = { title: "Understock", value: 650000000, trend: 26.6, predict: 2.4, fill: "bg-[#F78983]/90", info: text[1] }; break;
    case "overstock":
      data = { title: "Overstock", value: 327500000, trend: 7.2, predict: -2.9, fill: "bg-[#ffba94]/90", info: text[2] }; break;
    default:
      break;
  }
  return (
    <div className="CardKpi grow p-1">
      <div className={"p-2 " + data.fill + " text-white rounded-lg drop-shadow-lg"} >
        <div className="flex">
          <div className="title text-lg pb-2.5 font-semibold flex">
            {data.title}
            <Tooltip title="Trend" placement="top">
              <p className="flex cursor-default">
                {GetTrend(data.trend)}
              </p>
            </Tooltip>
          </div>
          <Tooltip title={data.info} placement="top">
            <div className="absolute right-3">
              <BsInfoCircleFill />
            </div>
          </Tooltip>
          <Tooltip title="Predict" placement="top">
            <p className="flex absolute right-3 bottom-1 cursor-default">
              {GetPredict(data.predict)}
            </p>
          </Tooltip>
        </div>
        <div className="value text-3xl pb-3 font-semibold flex">
          Rp{data.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
          ,00
        </div>
        <p className="text-xs text-left cursor-pointer">details ⟶</p>
      </div>
    </div>
  )
}

export default CardKPI
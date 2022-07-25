import React from "react";
import { FaBed, FaPeopleArrows, FaBookDead } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { MdPersonOff } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown, } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';


const text = [
  `BOR (Bed Occupancy Ratio), BOR yang ideal adalah antara 60-85%`,
  `ALOS (Average Length of Stay), ALOS yang ideal antara 6-9 hari`,
  `TOI (Turn Over Interval), idealnya tempat tidur kosong tidak terisi pada kisaran 1-3 hari`,
  `BTO (Bed Turn Over), idealnya dalam satu tahun, satu tempat tidur rata-rata dipakai 40-50 kali`,
  `NDR (Net Death Rate), idealnya pasien tidak lebih dari 25 per 1000 penderita keluar`,
  `Gros Death Rate (GDR), idealnya tidak lebih dari 45 per 1000 penderita keluar`,
]

const CardQualityService = ({type}) => {
	let data;

  switch (type) {
    case "bor":
      data = { icon: <FaBed />, title: "BOR", value: "65.2", fill: "[#b494ff]", detail: text[0], }; break;
    case "alos":
      data = { icon: <IoTime />, title: "ALOS", value: "6.4", fill: "[#ffba94]", detail: text[1], }; break;
    case "toi":
      data = { icon: <FaPeopleArrows />, title: "TOI", value: "2.8", fill: "[#6e9ffe]", detail: text[2], }; break;
    case "bto":
      data = { icon: <RiArrowLeftRightFill />, title: "BTO", value: "40.0", fill: "[#df3493]", detail: text[3], }; break;
    case "ndr":
      data = { icon: <MdPersonOff />, title: "NDR", value: "50.5", fill: "[#55caaf]", detail: text[4], }; break;
    case "gdr":
      data = { icon: <FaBookDead />, title: "GDR", value: "90.3", fill: "[#ea94ff]", detail: text[5], }; break;
    default:
      break;
  }
  return (
    <div className="CardQualityService">
      <div className={"bg-"+data.fill+"/90" + " rounded-lg m-1 drop-shadow-lg text-[#eeeff1]"}>
        <div className="p-1.5 flex pb-4">
          <div className={"text-"+data.fill + " text-xl p-2 rounded-lg bg-[#eeeff1]"}>
            {data.icon}
          </div>
          <p className="title pl-5 font-semibold">{data.title}</p>
            <Tooltip title={data.detail} placement="top-start">
              <div className="absolute right-2">
                <BsInfoCircleFill className="text-[#eeeff1]" />
              </div>
            </Tooltip>
        </div>
        <div className="m-auto ml-14 flex pb-9 text-2xl font-semibold cursor-default">
          {data.value}
          <Tooltip title="Trend" placement="top-start">
            <sup className="text-xs flex">
            <IoMdArrowDropup />10.2%
            </sup>
          </Tooltip>
        </div>
        <Tooltip title="Predict" placement="right">
          <div className="text-xs text-left pl-3 pb-1 flex absolute bottom-0 cursor-default"><HiOutlineChevronDoubleDown />15.7%</div>
        </Tooltip>
      </div>
    </div>
  );
};

export default CardQualityService;

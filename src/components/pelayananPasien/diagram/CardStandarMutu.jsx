import Tooltip from '@mui/material/Tooltip';
import { BsInfoCircleFill } from "react-icons/bs";
import { FaBed, FaBookDead, FaPeopleArrows } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { MdPersonOff } from "react-icons/md";
import { RiArrowLeftRightFill } from "react-icons/ri";

const text = [
  `BOR (Bed Occupancy Ratio), BOR yang ideal adalah antara 60-85%`,
  `ALOS (Average Length of Stay), ALOS yang ideal antara 6-9 hari`,
  `TOI (Turn Over Interval), idealnya tempat tidur kosong tidak terisi pada kisaran 1-3 hari`,
  `BTO (Bed Turn Over), idealnya dalam satu tahun, satu tempat tidur rata-rata dipakai 40-50 kali`,
  `NDR (Net Death Rate), idealnya pasien tidak lebih dari 25 per 1000 penderita keluar`,
  `Gros Death Rate (GDR), idealnya tidak lebih dari 45 per 1000 penderita keluar`,
]

const CardStandarMutu = ({type}) => {
	let data;

  switch (type) {
    case "bor":
      data = { icon: <FaBed />, title: "BOR", value: "65.2", fill: "[#aaca55]", detail: text[0], }; break;
    case "alos":
      data = { icon: <IoTime />, title: "ALOS", value: "6.4", fill: "[#aaca55]", detail: text[1], }; break;
    case "toi":
      data = { icon: <FaPeopleArrows />, title: "TOI", value: "2.8", fill: "[#aaca55]", detail: text[2], }; break;
    case "bto":
      data = { icon: <RiArrowLeftRightFill />, title: "BTO", value: "40.0", fill: "[#aaca55]", detail: text[3], }; break;
    case "ndr":
      data = { icon: <MdPersonOff />, title: "NDR", value: "50.5", fill: "[#aaca55]", detail: text[4], }; break;
    case "gdr":
      data = { icon: <FaBookDead />, title: "GDR", value: "90.3", fill: "[#aaca55]", detail: text[5], }; break;
    default:
      break;
  }
  return (
    <div className="CardStandarMutu">
			<div className={"bg-white" + " rounded-lg m-1 drop-shadow-lg text-gray-700"}>
        <div className="p-1.5 flex pb-1">
          <div className={"text-gray-700 text-xl p-1 rounded-lg bg-[#eeeff1]"}>
            {data.icon}
          </div>
      {/* <div className={"bg-"+data.fill+"/90" + " rounded-lg m-1 drop-shadow-lg text-[#eeeff1]"}>
        <div className="p-1.5 flex pb-1">
          <div className={"text-"+data.fill+" text-xl p-1 rounded-lg bg-[#eeeff1]"}>
            {data.icon}
          </div> */}
          <p className="title pl-5 font-semibold">{data.title}</p>
            <Tooltip title={data.detail} placement="top-start">
              <div className="absolute right-2 bottom-2">
                <BsInfoCircleFill className="text-gray-700" />
              </div>
            </Tooltip>
        </div>
        <div className="m-auto ml-2 flex pb-7 text-2xl font-semibold cursor-default">
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
  )
}

export default CardStandarMutu
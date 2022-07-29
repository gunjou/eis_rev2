import { Tooltip } from "@mui/material";
import React from "react";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const CardKunjungan = ({type}) => {
    let data;

  // temporary
  const value = [59, 89, 76, 50, 2, 3, 12, 6, 19, 21, 76, 50, 2, 3];

  switch (type) {
    case "pasien-rawat-inap":
    data = { img: "images/icon-pasien-rawat-inap.png", title: "Pasien Rawat Inap", value: value[2], fill: "bg-[#6e9ffe]/90" }; break;
    case "pasien-igd":
      data = { img: "images/icon-pasien-emergency.png", title: "Pasien IGD", value: value[1], fill: "bg-[#ffba94]/90" }; break;
    case "pasien-rawat-jalan":
      data = { img: "images/icon-pasien-rawat-jalan.png", title: "Pasien Rawat Jalan", value: value[0], fill: "bg-[#b494ff]/90" }; break;
    case "pasien-radiologi":
      data = { img: "images/icon-radiologi.png", title: "Pasien Radiologi", value: value[3], fill: "bg-[#94d9ff]/90" }; break;
    case "pasien-laboratorium":
      data = { img: "images/icon-laboratorium.png", title: "Pasien Laboratorium", value: value[4], fill: "bg-[#aaca55]/90" }; break;
    case "pasien-rehabilitasi":
      data = { img: "images/icon-pasien.png", title: "Pasien Rehabilitasi", value: value[5], fill: "bg-[#55caaf]/90" }; break;
    case "pasien-bedah":
      data = { img: "images/icon-bedah.png", title: "Pasien Bedah", value: value[6], fill: "bg-[#ff94aa]/90" }; break;
    case "farmasi":
      data = { img: "images/icon-farmasi.png", title: "Pasien Farmasi", value: value[7], fill: "bg-[#38b497]/90" }; break;
    default:
      break;
  }
  return (
    <div className="CardKunjungan grow">
      <div className={data.fill + " grid-cols-2 flex p-2 bg-white rounded-lg text-[#eeeff1] drop-shadow-lg"}>
        <div className="col-span-1 text-left ">
          <p className="title text-sm pb-2.5 font-semibold">{data.title}</p>
          <div className="value text-3xl pb-1.5 font-semibold flex">
						{data.value}
            <Tooltip title="Trend" placement="right">
              <sup className="flex text-base font-normal cursor-default">
              <IoMdArrowDropup className="text=lg" />
                12.3%
              </sup>
            </Tooltip>
					</div>
          <span className="text-xs text-left cursor-pointer">details ⟶</span>
					<img className="w-16 pb-2.5 absolute top-2 right-2" src={process.env.PUBLIC_URL + data.img} alt="icon" />
					<p className="padding w-20"></p>
          <Tooltip title="Predict" placement="left">
		  			<p className="flex text-xs absolute bottom-2 right-5 cursor-default">
	  					<HiOutlineChevronDoubleUp />20%
  					</p>
          </Tooltip>
        </div>
				{/* <div className="col-span-1 pl-3 m-auto">
				</div> */}
      </div>
    </div>
  )
}

export default CardKunjungan
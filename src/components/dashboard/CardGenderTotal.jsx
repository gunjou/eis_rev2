import React from "react";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaFemale, FaMale } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const CardGenderTotal = () => {
  return (
    <div className="CardGenderTotal text-[#eeeff1] font-semibold gap-2">
			{/* Male */}
      <div className="bg-[#6e9ffe] p-3 rounded-md mb-2">
        <div className="flex pb-3">
          <div className="icon text-xl bg-[#eeeff1] text-[#6e9ffe] p-2 rounded-lg">
            <FaMale />
          </div>
          <span className="pl-3 p-1">Laki-laki</span>
          <Tooltip title="Predict" placement="top">
            <p className="flex text-sm absolute right-5">
              <HiOutlineChevronDoubleDown />
              18.7%
            </p>
          </Tooltip>
        </div>
        <div className="pl-5 text-2xl flex">
          2817
          <Tooltip title="Trend" placement="top">
            <span className="flex pr-4 text-sm">
              <IoMdArrowDropdown className="text-base" />
              21.4%
            </span>
          </Tooltip>          
        </div>
      </div>

			{/* Female */}
      <div className="bg-[#ea94ff] p-3 rounded-md ">
        <div className="flex pb-3">
          <div className="icon text-xl bg-[#eeeff1] text-[#ea94ff] p-2 rounded-lg">
            <FaFemale />
          </div>
          <span className="pl-3 p-1">Perempuan</span>
          <Tooltip title="Predict" placement="top">
            <p className="flex text-sm absolute right-5">
              <HiOutlineChevronDoubleUp />
              7.5%
            </p>
          </Tooltip>
        </div>
        <div className="pl-5 text-2xl flex">
          3137
          <Tooltip title="Trend" placement="top">
            <span className="flex pr-4 text-sm">
              <IoMdArrowDropup className="text-base" />
              4.0%
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CardGenderTotal;

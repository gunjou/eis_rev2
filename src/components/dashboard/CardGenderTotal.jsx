import React from "react";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaFemale, FaMale } from "react-icons/fa";

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
          <span className="flex text-sm">
            <HiOutlineChevronDoubleUp />
            18.7%
          </span>
        </div>
        <div className="pl-5 text-2xl flex">
          2817
          <span className="flex pr-4 text-sm">
            <IoMdArrowDropup className="text-base" />
            21.4%
          </span>
        </div>
      </div>

			{/* Female */}
      <div className="bg-[#ea94ff] p-3 rounded-md ">
        <div className="flex pb-3">
          <div className="icon text-xl bg-[#eeeff1] text-[#ea94ff] p-2 rounded-lg">
            <FaFemale />
          </div>
          <span className="pl-3 p-1">Perempuan</span>
          <span className="flex text-sm">
            <HiOutlineChevronDoubleDown />
            7.5%
          </span>
        </div>
        <div className="pl-5 text-2xl flex">
          3137
          <span className="flex pr-4 text-sm">
            <IoMdArrowDropdown className="text-base" />
            4.0%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardGenderTotal;

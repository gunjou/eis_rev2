import React from "react";
import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp, HiOutlineChevronDoubleDown, } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";

const CardAvgVisit = () => {
  return (
    <div className="CardAvg text-[#eeeff1] font-semibold flex gap-4">
      <div className="grow bg-[#b494ff] p-3 rounded-md ">
        <div className="p-1 bg-[#eeeff1] rounded-lg text-lg w-10 m-auto mb-5">
          <BsFillPersonFill className="text-[#b494ff] m-auto" fontSize={30} />
        </div>
        <p className="font-normal pb-5 text-center">Bulan Ini</p>
        <p className="font-semibold text-2xl pb-5 text-center">1089</p>
        <p className="flex pb-1">
          <span className="text-xs pr-1.5">Trend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span className="flex text-xs"><IoMdArrowDropup className="text-sm"/>2.9%</span>
        </p>
        <p className="flex">
          <span className="text-xs pr-1.5">Predict &nbsp;:</span>
          <span className="flex text-xs"><HiOutlineChevronDoubleUp />1.1%</span>
        </p>
      </div>
      <div className="grow bg-[#df3493] p-3 rounded-md ">
        <div className="p-1 bg-[#eeeff1] rounded-lg text-lg w-10 m-auto mb-5">
          <BsPeopleFill className="text-[#df3493] m-auto" fontSize={30} />
        </div>
        <p className="font-normal pb-5 text-center">Tahun Ini</p>
        <p className="font-semibold text-2xl pb-5 text-center">27810</p>
        <p className="flex pb-1">
          <span className="text-xs pr-1.5">Trend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <span className="flex text-xs"><CgArrowsExchange className="text-sm"/>0.0%</span>
        </p>
        <p className="flex">
          <span className="text-xs pr-1.5">Predict &nbsp;:</span>
          <span className="flex text-xs"><HiOutlineChevronDoubleDown />1.3%</span>
        </p>
      </div>
    </div>
  );
};

export default CardAvgVisit;

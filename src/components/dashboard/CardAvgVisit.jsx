import React from "react";
import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { CgArrowsExchange } from "react-icons/cg";

const CardAvgVisit = () => {
  return (
    <div className="CardAvg text-[#eeeff1] font-semibold flex gap-2">
      <div className="bg-[#b494ff] p-3 rounded-md ">
        <div className="p-1 bg-[#eeeff1] rounded-lg text-lg mr-7 ml-7  m-auto mb-5">
          <BsFillPersonFill className="text-[#b494ff] m-auto" fontSize={30} />
        </div>
        <p className="font-normal pb-5 text-center">Bulan Ini</p>
        <p className="font-semibold text-2xl pb-4 text-center">1089</p>
        <div className="font-normal">
          <p className="font-bold text-xs flex">
            Trend : 2.9% <HiOutlineChevronDoubleUp />
          </p>
          <p className="font-bold text-xs flex">
            Predict : 1.1% <HiOutlineChevronDoubleUp />
          </p>
        </div>
      </div>
      <div className="bg-[#df3493] p-3 rounded-md ">
        <div className="p-1 bg-[#eeeff1] rounded-lg text-lg mr-7 ml-7  m-auto mb-5">
          <BsPeopleFill className="text-[#df3493] m-auto" fontSize={30} />
        </div>
        <p className="font-normal pb-5 text-center">Tahun Ini</p>
        <p className="font-semibold text-2xl pb-4 text-center">27810</p>
        <div className="font-normal">
          <p className="font-bold text-xs flex">
            Trend : 0.0% <CgArrowsExchange className="text-sm" />
          </p>
          <p className="font-bold text-xs flex">
            Predict : 1.3% <HiOutlineChevronDoubleDown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAvgVisit;

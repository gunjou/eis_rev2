import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BPJSTrend from "../components/finance/BPJSTrend";
import InstallationRevenue from "../components/finance/InstallationRevenue";
import TrendIncomeDetail from "../components/finance/TrendIncomeDetail";
import TypePatientIncome from "../components/finance/TypePatientIncome";

const Finance = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='Finance'>
      {/* Row 1 */}
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-3 text-left pl-1">
              Trend Income
            </p>
            <TrendIncomeDetail />
          </div>

          {/* Row 2 */}
          <div className="flex">
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-3 text-left pl-1">
                Pendapatan Per Instalasi
              </p>
              <InstallationRevenue />
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="col-span-2">
          {/* Calender */}
          <div className="flex-none pt-1 pb-1 bg-[#eeeff1] m-3 rounded-lg">
            <Calendar
              onChange={onChange}
              value={value}
              className="rounded-lg m-3 drop-shadow-md"
            />
          </div>

          {/* Type Patient Income */}
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Pendapatan Berdasarkan Jenis Pasien
            </p>
            <TypePatientIncome />
          </div>

          {/* Trend Claim BPJS */}
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Tren Klaim BPJS
            </p>
            <BPJSTrend />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Finance
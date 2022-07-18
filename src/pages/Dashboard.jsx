import React, { useState } from "react";
import Calendar from "react-calendar";
import CardSummary from "../components/dashboard/CardSummary";
import DepartementVisit from "../components/dashboard/DepartementVisit";
import "react-calendar/dist/Calendar.css";
import AvgPatientVisit from "../components/dashboard/AvgPatientVisit";
import CardAvgVisit from "../components/dashboard/CardAvgVisit";
import GenderVisit from "../components/dashboard/GenderVisit";
import CardGenderTotal from "../components/dashboard/CardGenderTotal";
import TrendIncome from "../components/dashboard/TrendIncome";
import TopDiagnosa from "../components/dashboard/TopDiagnosa";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="Dashboard bg-white">
      <div className="grid grid-cols-5">
        {/* Span Right */}

        {/* Widget */}
        <div className="col-span-3">
          <div className="flex bg-[#eeeff1] m-3 rounded-lg">
            <div className="m-3 drop-shadow-md grid ">
              <Calendar
                onChange={onChange}
                value={value}
                className="rounded-lg "
              />
            </div>
            <span className="gap-4 mt-4 pl-1 flex flex-wrap pb-3">
              <CardSummary type={"kunjungan"} />
              <CardSummary type={"pelayanan"} />
              <CardSummary type={"inventory"} />
              <CardSummary type={"medical-record"} />
              <CardSummary type={"finance"} />
              <CardSummary type={"human-resource"} />
            </span>
          </div>

          {/* Average Visitors */}
          <div className="col-span-3 bg-[#eeeff1] m-3 rounded-lg">
            <div className="grid grid-cols-6 m-3 drop-shadow-md text-left">
              <div className="left col-span-4">
                <p className="font-semibold text-gray-700 pb-3 pt-3 pl-2">
                  Rata-rata Kunjungan
                </p>
                <AvgPatientVisit className="pt-3" />
              </div>
              <div className="right col-span-1 mt-12">
                <CardAvgVisit />
              </div>
            </div>
          </div>

          {/* Gender Visitors */}
          <div className="col-span-3 bg-[#eeeff1] m-3 rounded-lg">
            <div className="grid grid-cols-3 m-3 drop-shadow-md text-left">
              <div className="left col-span-2">
                <p className="font-semibold text-gray-700 pb-3 pt-3 pl-2">
                  Kunjungan Berdasarkan Jenis Kelamin
                </p>
                <GenderVisit className="pt-3" />
              </div>
              <div className="right col-span-1 mt-12 pr-3">
                <CardGenderTotal />
              </div>
            </div>
          </div>
        </div>

        {/* Span Left */}

        {/* Type Patient Pie */}
        <div className="col-span-2">
          <div className="DepartementVisit m-3 col-span-2 pr-4">
            <div className="rounded-lg bg-[#eeeff1] text-gray-700 p-3 text-left">
              <span className="font-semibold">
                Kunjungan Berdasarkan Jenis Pasien
              </span>
              <DepartementVisit />
            </div>
          </div>
          
          {/* Income Trend */}
          <div className="TrendIncome m-3 col-span-2 pr-4">
            <div className="rounded-lg bg-[#eeeff1] text-gray-700 p-3 text-left">
              <span className="font-semibold">
                Trend Pendapatan
              </span>
              <TrendIncome />
            </div>
          </div>

          {/* Top Diagnosa */}
          <div className="TopDiagnosa m-3 col-span-2 pr-4">
            <div className="rounded-lg bg-[#eeeff1] text-gray-700 p-3 text-left">
              <span className="font-semibold">
                Top Diagnosa
              </span>
              <TopDiagnosa />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;

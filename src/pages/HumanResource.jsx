import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AgeGender from "../components/humanResource/AgeGender";
import CardEmployee from "../components/humanResource/CardEmployee";
import CategoryEmployee from "../components/humanResource/CategoryEmployee";
import Education from "../components/humanResource/Education";

const HumanResource = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="HumanResource">
      <div className="flex bg-[#eeeff1] m-3 rounded-lg">
        <div className="m-3 drop-shadow-md grid ">
          <Calendar onChange={onChange} value={value} className="rounded-lg " />
        </div>
        <div className="grid grid-cols-3 grow gap-4 mr-3 mt-5">
          <CardEmployee type={"finance"} />
          <CardEmployee type={"kunjungan"} />
          <CardEmployee type={"pelayanan"} />
          <CardEmployee type={"inventory"} />
          <CardEmployee type={"medical-record"} />
          <CardEmployee type={"human-resource"} />
        </div>
      </div>

      <div className="grid grid-cols-5">
        {/* Span Right */}
        <div className="col-span-3">
          {/* Average Visitors */}
          <div className="col-span-3 bg-[#eeeff1] m-3 rounded-lg">
            <p className="font-semibold text-gray-700 p-3 text-left">
              Kategori Pegawai
            </p>
            <CategoryEmployee />
          </div>

        </div>

        {/* Span Left */}

        {/* Type Patient Pie */}
        <div className="col-span-2">
          <div className="DepartementVisit m-3 col-span-2 pr-4">
            <div className="rounded-lg bg-[#eeeff1] text-gray-700 p-3 text-left">
              <span className="font-semibold">
                Usia dan Jenis Kelamin
              </span>
              <AgeGender />
            </div>
          </div>

          {/* Income Trend */}
          <div className="TrendIncome m-3 col-span-2 pr-4">
            <div className="rounded-lg bg-[#eeeff1] text-gray-700 p-3 text-left">
              <span className="font-semibold">Pendidikan</span>
              <Education />
            </div>
          </div>

          {/* Top Diagnosa */}
        </div>
      </div>
    </div>
  );
};

export default HumanResource;

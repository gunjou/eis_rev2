import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import KBUsage from "../components/medicalRecord/KBUsage";
import Kebidanan from "../components/medicalRecord/Kebidanan";
import KesehatanJiwa from "../components/medicalRecord/KesehatanJiwa";
import Laboratorium from "../components/medicalRecord/Laboratorium";
import MedicSpread from "../components/medicalRecord/MedicSpread";
import Prinatologi from "../components/medicalRecord/Prinatologi";
import Radiologi from "../components/medicalRecord/Radiologi";
import RehabilitasiMedis from "../components/medicalRecord/RehabilitasiMedis";
import Surgery from "../components/medicalRecord/Surgery";

const MedicalRecord = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="MedicalRecord">
      {/* Row 1 */}
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Sebaran Kegiatan Medis
            </p>
            <MedicSpread />
          </div>

          {/* Row 2 */}
          <div className="flex">
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
                Kegiatan Kebidanan
              </p>
              <Kebidanan />
            </div>
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
                Kegiatan Keluarga Berencana
              </p>
              <KBUsage />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex">
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
                Kegiatan Rehabilitasi Medis
              </p>
              <RehabilitasiMedis />
            </div>
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
                Kegiatan Kesehatan Jiwa
              </p>
              <KesehatanJiwa />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex">
            <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
              <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
                Kegiatan Pembedahan
              </p>
              <Surgery />
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

          {/* Prinatologi */}
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Kegiatan Prinatologi
            </p>
            <Prinatologi />
          </div>

          {/* Radiologi */}
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Kegiatan Radiologi
            </p>
            <Radiologi />
          </div>

          {/* Laboratorium */}
          <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
            <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
              Kegiatan Laboratorium
            </p>
            <Laboratorium />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;

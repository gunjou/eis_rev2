import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CardService from "../components/service/CardService";
import CardQualityService from "../components/service/CardQualityService";
import TrendOutpatient from "../components/service/TrendOutpatient";
import BedAvailability from "../components/service/BedAvailability";
import SatisfactionPatient from "../components/service/SatisfactionPatient";
import AdviseDepartement from "../components/service/AdviseDepartement";

const Service = () => {
  const [isVisitor, setIsVisitor] = useState(false);
  const [value, onChange] = useState(new Date());
  return (
    <div className="Service bg-white">
      {/* Widget */}
      <div className="flex bg-[#eeeff1] m-3 rounded-lg pb-2">
        <div className="m-3 drop-shadow-md grid ">
          <Calendar onChange={onChange} value={value} className="rounded-lg " />
        </div>
        <>
          {!isVisitor ? (
            <div className="Left">
              <div className="category text-left pl-1 pt-2 text-xs ">
                <button className="mr-3 text-white border-2 border-[#55caaf]/0 bg-[#55caaf] hover:bg-[#55caaf] hover:text-white px-3 py-1 rounded cursor-default">
                  Pasien Terlayani
                </button>
                <button
                  onClick={() => setIsVisitor(!isVisitor)}
                  className="mr-3 text-gray-600 border-2 border-[#55caaf]/0 hover:bg-[#55caaf] hover:text-white px-3 py-1 rounded"
                >
                  Pasien Pengunjung
                </button>
              </div>
              <span className="gap-3 mt-3 pl-1 pr-4 flex flex-wrap pb-1">
                <CardService type="pasien-rawat-inap" />
                <CardService type="pasien-igd" />
                <CardService type="pasien-rawat-jalan" />
                <CardService type="pasien-radiologi" />
                <CardService type="pasien-laboratorium" />
                <CardService type="pasien-rehabilitasi" />
                <CardService type="pasien-bedah" />
                <CardService type="farmasi" />
              </span>
            </div>
          ) : (
            <div className="Left">
              <div className="category text-left pl-1 pt-2 text-xs ">
                <button
                  onClick={() => setIsVisitor(!isVisitor)}
                  className="mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#55caaf] hover:text-white px-3 py-1 rounded"
                >
                  Pasien Terlayani
                </button>
                <button className="mr-3 border-2 text-white border-[#04A449]/0 bg-[#55caaf] hover:bg-[#55caaf] hover:text-white px-3 py-1 rounded cursor-default">
                  Pasien Pengunjung
                </button>
              </div>
              <span className="gap-3 mt-3 pl-1 pr-4 flex flex-wrap pb-3">
                <CardService type="pengunjung-rawat-inap" />
                <CardService type="pengunjung-igd" />
                <CardService type="pengunjung-rawat-jalan" />
                <CardService type="pengunjung-radiologi" />
                <CardService type="pengunjung-laboratorium" />
                <CardService type="pengunjung-rehabilitasi" />
              </span>
            </div>
          )}
        </>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-5">
        {/* Mutu Pelayanan */}
        <div className="col-span-4">
          <div className="grid grid-cols-4">
            <div className="col-span-2 bg-[#eeeff1] m-3 rounded-lg">
              <div className="text-left">
                <p className="font-semibold text-gray-700 pb-2 pt-3 pl-5">
                  Standar Mutu Pelayanan
                </p>
              </div>
              <div className="Card grid grid-cols-3 m-2 gap-2 pb-2">
                <CardQualityService type={"bor"} />
                <CardQualityService type={"alos"} />
                <CardQualityService type={"toi"} />
                <CardQualityService type={"bto"} />
                <CardQualityService type={"ndr"} />
                <CardQualityService type={"gdr"} />
              </div>
            </div>

            {/* Ketersediaan Bed */}
            <div className="col-span-2 bg-[#eeeff1] m-3 rounded-lg">
              <div className="text-left">
                <p className="font-semibold text-gray-700 pb-2 pt-3 pl-5">
                  Ketersediaan Tempat Tidur Per Kelas
                </p>
              </div>
              <div className="Card m-2 pb-2">
                <BedAvailability />
              </div>
            </div>

            {/* Trend Pasien Rawat Jalan */}
            <div className="col-span-4 bg-[#eeeff1] m-3 rounded-lg">
              <div className="text-left">
                <p className="font-semibold text-gray-700 pb-2 pt-3 pl-5">
                  Trend Pengunjung Pasien Rawat Jalan
                </p>
              </div>
              <div className="Card m-2 pb-2">
                <TrendOutpatient />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          {/* Kepuasan Pelanggan */}
          <div className=" bg-[#eeeff1] m-3 rounded-lg">
            <div className="text-left">
              <p className="font-semibold text-gray-700 pb-2 pt-3 pl-5">
                Kepuasan Pasien
              </p>
            </div>
            <div className="Card m-auto pb-2">
              <SatisfactionPatient />
            </div>
          </div>

          {/* Kritik Tiap Insalasi */}
          <div className=" bg-[#eeeff1] m-3 rounded-lg">
            <div className="text-left">
              <p className="font-semibold text-gray-700 pb-2 pt-3 pl-5">
                Kritik Tiap Instalasi
              </p>
            </div>
            <div className="Card m-auto pb-2">
              <AdviseDepartement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

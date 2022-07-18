import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CardKpi from "../components/inventory/CardKpi";
import ItemDetail from "../components/inventory/ItemDetail";
import LeadTimeSupplier from "../components/inventory/LeadTimeSupplier";
import TopSupplier from "../components/inventory/TopSupplier";
import TrendStock from "../components/inventory/TrendStock";

const Inventory = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="Inventory">
      {/* Card KPI */}
      <div className="Top m-3">
        <span className="gap-8 mt-3 flex pb-1">
          <CardKpi type="optimal" />
          <CardKpi type="understock" />
          <CardKpi type="overstock" />
        </span>
      </div>

      {/* Row 2 */}
      <div className="flex">
        <div className="flex-none bg-[#eeeff1] m-3 rounded-lg">
          <Calendar
            onChange={onChange}
            value={value}
            className="rounded-lg m-3 drop-shadow-md"
          />
        </div>
        <div className="grow m-3 bg-[#eeeff1] rounded-lg p-3">
          <p className="font-semibold text-gray-700 pb-1 text-left pl-1">
            Rata-rata Kunjungan
          </p>
          <TrendStock />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-4">
        <div className="col-span-3 m-3 bg-[#eeeff1] rounded-lg p-3">
          <p className="font-semibold text-gray-700 pb-3 text-left">
            Detail Item
          </p>
          <ItemDetail />
        </div>

        <div className="col-span-1">
          <div className="col-span-1 m-3 pt-0.5 bg-[#eeeff1] rounded-lg mr-4">
            <p className="font-semibold text-gray-700 pb-1 text-left m-3">
              Top Supplier
            </p>
            <TopSupplier />
          </div>
          <div className="col-span-1 m-3 pt-0.5 bg-[#eeeff1] rounded-lg mr-4">
            <p className="font-semibold text-gray-700 pb-1 text-left m-3">
              Suplier Berdasarkan Lead Time
            </p>
            <LeadTimeSupplier />
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Inventory;

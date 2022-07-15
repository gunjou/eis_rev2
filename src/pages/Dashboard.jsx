import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import CardSummary from "../components/dashboard/CardSummary";
import DepartementVisit from "../components/dashboard/DepartementVisit";

const Dashboard = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  return (
    <div className="Dashboard bg-white">
      <div className="grid grid-cols-5">
        <div className="col-span-3 flex bg-[#eeeff1] m-3 rounded-lg">
					<span className="m-3 drop-shadow-md grid ">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
						/>
					</span>
					<span className="gap-4 mt-4 pl-3 flex flex-wrap pb-3">
						<CardSummary type={"kunjungan"} />
						<CardSummary type={"pelayanan"} />
						<CardSummary type={"inventory"} />
						<CardSummary type={"medical-record"} />
						<CardSummary type={"finance"} />
						<CardSummary type={"human-resource"} />

					</span>
        </div>
				<div className="DepartementVisit m-3 col-span-2 pr-4">
					<DepartementVisit />
				</div>

				{/* span2 */}
      </div>
    </div>
  );
};

export default Dashboard;

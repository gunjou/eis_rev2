import React, { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { RiArrowDropDownFill } from "react-icons/ri";

const data = [
    { name: "Rawat Inap", value: 1250 },
    { name: "IGD", value: 870 },
    { name: "Rawat Jalan", value: 660 },
    { name: "Radiologi", value: 300 },
    { name: "Lab", value: 300 },
    { name: "Rehab", value: 300 },
    { name: "Farmasi", value: 300 },
  ];
  const COLORS = ["#b494ff", "#6e9ffe", "#ffba94", "#55caaf"];

  const Diagram = () => {
    return (
    <ResponsiveContainer width="99%" height={230}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          cx={90}
          cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
    );
  };

const Instalasi = () => {
    const [isDropdown, setisDropdown] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          (ref.current && !ref.current.contains(event.target)) ||
          ref.current.contains(event.target)
        ) {
          // remove or
          setisDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(false);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="Instalasi">
         {/* Filter */}
      <div className="text-sm flex">
        <p className="pr-2">Ruangan : </p>
        {!isDropdown ? (
          <>
            <button onClick={() => setisDropdown(!isDropdown)} type="button" class="flex justify-center rounded-md pl-1 bg-white text-sm font-medium hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
              Semua Ruangan
              <RiArrowDropDownFill className="text-xl" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setisDropdown(!isDropdown)} type="button" class="flex justify-center rounded-md pl-1 bg-white text-sm font-medium hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
              Semua Ruangan
              <RiArrowDropDownFill className="text-xl" />
            </button>
            <div ref={wrapperRef} className="dropdown absolute z-10 ml-16 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl" >
              <ul>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Semua Ruangan</li>
								<hr />
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Flamboyan A</li>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Flamboyan B</li>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Flamboyan C</li>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Flamboyan D</li>
              </ul>
            </div>
          </>
        )}
      </div>
      {/* Diagram */}
      <Diagram />      
    </div>
  )
}

export default Instalasi
import React, { useState, useRef, useEffect } from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import { RiArrowDropDownFill } from "react-icons/ri";

const data = [
  { name: "Pulang Paksa", value: 187 },
  { name: "Dipulangkan", value: 285 },
  { name: "Dirujuk", value: 79 },
  { name: "Dipindah", value: 121 },
  { name: "Kabur", value: 8 },
  { name: "Sembuh", value: 195 },
  { name: "Belum Sembuh", value: 54 },
  { name: "Meninggal", value: 68 },
];

const Diagram = () => {
  return (
    <ResponsiveContainer width="99%" height={100}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
      >
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis dataKey="name" interval={0} fontSize={12} />
        {/* <YAxis fontSize={9} /> */}
        <Tooltip />
        <Bar
          dataKey="value"
          name="Jumlah"
          fill="#b494ff"
          radius={[9, 9, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const StatusPulang = () => {
  // const [isDropdown, setisDropdown] = useState(false);

  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (
  //         (ref.current && !ref.current.contains(event.target)) ||
  //         ref.current.contains(event.target)
  //       ) {
  //         // remove or
  //         setisDropdown(false);
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  // const wrapperRef = useRef(false);
  // useOutsideAlerter(wrapperRef);

  return (
    <div className="StatusPulang">
      {/* Filter */}
      {/* <div className="text-sm flex">
        <p className="pr-2">Kondisi Pasien : </p>
        {!isDropdown ? (
          <>
            <button onClick={() => setisDropdown(!isDropdown)} type="button" class="flex justify-center rounded-md pl-1 bg-white text-sm font-medium hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
              Semua Kondisi
              <RiArrowDropDownFill className="text-xl" />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setisDropdown(!isDropdown)} type="button" class="flex justify-center rounded-md pl-1 bg-white text-sm font-medium hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
              Semua Kondisi
              <RiArrowDropDownFill className="text-xl" />
            </button>
            <div
              ref={wrapperRef}
              className="dropdown absolute z-10 ml-24 text-base text-gray-700 mt-7 bg-white rounded-lg drop-shadow-xl"
            >
              <ul>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Semua Kondisi</li>
                <hr />
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Sembuh</li>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Belum Sembuh</li>
                <li className="p-1 cursor-pointer hover:bg-gray-200 hover:rounded-lg">Meninggal Dunia</li>
              </ul>
            </div>
          </>
        )} */}
      {/* </div> */}
      {/* Diagram */}
      <Diagram />
    </div>
  );
};

export default StatusPulang;

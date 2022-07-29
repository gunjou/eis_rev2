import React, { useState, useRef, useEffect } from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RiArrowDropDownFill } from 'react-icons/ri'


const data = [
  { name: "Kelas III", value: 2290 },
  { name: "Kelas II", value: 1955 },
  { name: "Kelas I", value: 1526 },
  { name: "VIP Madya", value: 410 },
  { name: "VIP Utama", value: 820 },
  { name: "VIP Super", value: 1189 },
  { name: "Intensif", value: 669 },
  { name: "Vip Standar", value: 1790 },
];

const KelasPasien = () => {
  return (
    <div className='KelasPasien'>
      <label className="text-sm">
        Kasus Penyakit : 
        <select className="ml-2 bg-white rounded-md p-0.5 focus:outline-none">
          <option value="all">Semua Penyakit</option>
          <option value="erysipeloid">Erysipeloid</option>
          <option value="leptospirosis">Leptospirosis</option>
          <option value="pasteurellosis">Pasteurellosis</option>
        </select>
      </label>
			<ResponsiveContainer width="99%" height={230}>
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
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default KelasPasien
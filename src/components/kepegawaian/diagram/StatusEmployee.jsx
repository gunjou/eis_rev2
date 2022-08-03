import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropup } from 'react-icons/io';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


const data = [
  { name: "Aktif", value: 364, trend: 2.4, pred: -1.5 },
  { name: "Cuti", value: 10, trend: 0.3, pred: 1.5 },
  { name: "Non Aktif", value: 17, trend: -0.9, pred: -2.8 },
  { name: "Pensiun", value: 20, trend: 3.7, pred: -3.2 },
  { name: "Pindah Kerja", value: 28, trend: 0, pred: 0.2 },
  { name: "Hari Libur Extra", value: 9, trend: -0.5, pred: 3.1 },
  { name: "Dokter Luar", value: 29, trend: -0.5 , pred: -2.8 },
];
const COLORS = [
	"#55caaf",
	"#b494ff",
  "#ffba94",
  "#ff94aa",
  "#38b497",
  "#6e9ffe",
  "#ca5570",
  "#aaca55",
  "#94d9ff",
];

function GetSymbol(value) {
	if (value > 0) {
	  return ("↗"+Math.abs(value));
	} else if (value < 0) {
	  return ("↘"+Math.abs(value));
	} else {
	  return ("⇋"+Math.abs(value));
	}
}
  
  const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip bg-gray-100 border p-3">
		  <p className="label">{`${payload[0].payload.name} ${GetSymbol(payload[0].payload.trend)}%`}</p>
		  <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
  };
  
const StatusEmployee = () => {
  return (
    <div className="StatusEmployee">
      <div className="title flex">
        <p className='pb-2'>Status Pegawai</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropup className="text=lg" />
            1.3%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleUp /> 2.1%
      </sup>
			<ResponsiveContainer width="99%" height={230}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          cy={85}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
          wrapperStyle={{fontSize: "12px"}}
          />
      </PieChart>
     </ResponsiveContainer>
		</div>
  )
}

export default StatusEmployee
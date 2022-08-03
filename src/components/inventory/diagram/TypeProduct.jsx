import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const data = [
  { name: "Alkes", value: 20319, trend: 10.2, pred: -14.6 },
  { name: "Obat", value: 27473, trend: 7.1, pred: 24 },
  { name: "Gas Medis", value: 19400, trend: 14.6, pred: 10.9 },
  { name: "Askes", value: 23255, trend: -7.4, pred: -5.2 },
  { name: "BHP", value: 15175, trend: 26.8, pred: 6.6 },
  { name: "Injeksi", value: 21465, trend: -8.3, pred: 15.7 },
];
const COLORS = [
  "#94d9ff",
  "#ffba94",
  "#6e9ffe",
  "#aaca55",
  "#b494ff",
  "#55caaf",
  "#ff94aa",
  "#38b497",
  "#ca5570",
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

const TypeProduct = () => {
  return (
    <div className='TypeProduct'>
      <div className="title flex">
        <p className='pb-2'>Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropdown className="text=lg" />
            9.2%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleDown /> 9.4%
      </sup>
			<ResponsiveContainer width="99%" height={240}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          cy={85}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={2}
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

export default TypeProduct
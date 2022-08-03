import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdArrowDropup } from "react-icons/io";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";
import { Tooltip as Tlp } from '@mui/material';


const data = [
  { name: "UMUM", value: 2290, trend: -2.9, pred: 7, },
  { name: "JKN", value: 1955, trend: 6.4, pred: 8.9, },
  { name: "BPJS", value: 1526, trend: 5.1, pred: -1.1, },
  { name: "PERUSAHAAN", value: 410, trend: 7.9, pred: 4.4, },
  { name: "JAMKESDA", value: 820, trend: 12, pred: 9.2, },
  { name: "JAMKESMAS", value: 1189, trend: 9.8, pred: 5.8, },
  { name: "JASA RAHARJA", value: 669, trend: -3.7, pred: -2.4, },
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
        <p className="label">{`${label} ${GetSymbol(payload[0].payload.trend)}%`}</p>
        <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const KelompokPasien = () => {
  return (
    <div className="KelompokPasien">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Kelompok</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropup className="text=lg" />
          10.4%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleUp /> 4.7%
      </sup>
      <ResponsiveContainer width="99%" height={240}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KelompokPasien;

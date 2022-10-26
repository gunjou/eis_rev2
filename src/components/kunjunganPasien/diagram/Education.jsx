import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { Tooltip as Tlp } from '@mui/material';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';


const data = [
  { name: "Tidak Sekolah", value: 0, trend: 0, pred: 0, },
  { name: "SD", value: 0, trend: 0, pred: 0, },
  { name: "SMP", value: 0, trend: 0, pred: 0, },
  { name: "SMA/SMK", value: 0, trend: 0, pred: 0, },
  { name: "D3", value: 0, trend: 0, pred: 0, },
  { name: "S1", value: 0, trend: 0, pred: 0, },
  { name: "S2", value: 0, trend: 0, pred: 0, },
  { name: "S3", value: 0, trend: 0, pred: 0, },
];

const COLORS = [
  "#ca5570",
  "#ff94aa",
  "#55caaf",
  "#ffba94",
  "#6e9ffe",
  "#aaca55",
  "#94d9ff",
  "#b494ff",
  "#38b497",
];
  
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};


function GetSortOrder(prop) {    
  return function(a, b) {    
    if (a[prop] < b[prop]) {    
      return 1;    
    } else if (a[prop] > b[prop]) {    
      return -1;    
    }    
    return 0;    
  }    
} 

const Education = () => {
  data.sort(GetSortOrder("value"))

  return (
    <div className="Education">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Pendidikan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
      </sup>
      <ResponsiveContainer width="99%" height={240}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          // cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#94b8a3"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
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
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Education
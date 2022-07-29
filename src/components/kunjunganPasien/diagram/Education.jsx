import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Tidak Sekolah", value: 125 },
    { name: "SD", value: 262 },
    { name: "SMP", value: 52 },
    { name: "SMA/SMK", value: 83 },
    { name: "D3", value: 101 },
    { name: "S1", value: 181 },
    { name: "S2", value: 30 },
    { name: "S3", value: 31 },
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

const Education = () => {
  return (
    <div className="Education">
        <ResponsiveContainer width="99%" height={260}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          // cy={110}
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
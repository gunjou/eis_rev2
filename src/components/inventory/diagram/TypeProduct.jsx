import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Alkes", value: 20319 },
  { name: "Obat", value: 27473 },
  { name: "Gas Medis", value: 19400 },
  { name: "Askes", value: 23255 },
  { name: "BHP", value: 15175 },
  { name: "Injeksi", value: 21465 },
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

const TypeProduct = () => {
  return (
    <div className='TypeProduct'>
			<ResponsiveContainer width="99%" height={250}>
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
        <Tooltip />
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
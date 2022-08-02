import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Datang Sendiri", value: 465 },
  { name: "Puskesmas", value: 588 },
  { name: "RS Pemerintah", value: 479 },
  { name: "RS Swasta", value: 706 },
  { name: "Praktek Swasta", value: 407 },
  { name: "Bidan", value: 299 },
  { name: "Faskes", value: 23 },
  { name: "Kecelakaan", value: 748 },
  { name: "Lain-lain", value: 52 },
];
const COLORS = [
  "#b494ff",
  "#6e9ffe",
  "#ffba94",
  "#55caaf",
  "#ff94aa",
  "#94d9ff",
  "#aaca55",
  "#38b497",
  "#ca5570",
];

const Rujukan = () => {
  return (
    <div className="Rujukan">
			<ResponsiveContainer width="99%" height={260}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          cy={80}
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
          wrapperStyle={{fontSize: "10px"}}
          />
      </PieChart>
     </ResponsiveContainer>
		</div>
  )
}

export default Rujukan
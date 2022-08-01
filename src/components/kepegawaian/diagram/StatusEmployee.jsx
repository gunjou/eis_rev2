import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Aktif", value: 364 },
  { name: "Cuti", value: 10 },
  { name: "Non Aktif", value: 17 },
  { name: "Pensiun", value: 20 },
  { name: "Pindah Kerja", value: 28 },
  { name: "Hari Libur Extra", value: 9 },
  { name: "Dokter Luar", value: 29 },
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

const StatusEmployee = () => {
  return (
    <div className="StatusEmployee">
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

export default StatusEmployee
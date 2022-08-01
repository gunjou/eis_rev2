import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Semeru Perkasa Permai Pt.", value: 20319 },
  { name: "Berkembang Selaras Daya. Pt", value: 27473 },
  { name: "Sinergi Tridaya Medical. Pt", value: 19400 },
  { name: "Axion", value: 23255 },
  { name: "Bard", value: 15175 },
  { name: "Flexicare", value: 21465 },
  { name: "Innoq", value: 26043 },
  { name: "Wikaton", value: 26657 },
  { name: "Rioca Medica Pt.", value:  21926},
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

const Supplier = () => {
  return (
    <div className='Supplier'>
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

export default Supplier
import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "RadioDiagnostik", value: 1100 },
  { name: "RadioTherapi", value: 140 },
  { name: "Imaging/Pencitraan", value: 400 },
];

const COLORS = [
  "#6e9ffe",
  "#38b497",
  "#ff94aa",
  "#94d9ff",
  "#55caaf",
  "#b494ff",
  "#aaca55",
  "#ffba94",
];

const Radiologi = () => {
  return (
    <div className='Radiologi'>
			<PieChart width={355} height={260}>
        <Pie
          data={data}
          cx={145}
          cy={140}
          // innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={5}
          dataKey="value"
					className="font-[10px]"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
					wrapperStyle={{ fontSize: "12px" }}
          layout="vertical"
          verticalAlign="top"
          align="right"
          iconType="circle"
        />
      </PieChart>
		</div>
  )
}

export default Radiologi
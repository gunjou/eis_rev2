import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
	{ name: 'BPJS', value: 90 },
	{ name: 'Umum/Pribadi', value: 150 },
	{ name: 'BPJS Rencana Rawat', value: 30 },
];

const COLORS = [
	"#aaca55",
  "#55caaf",
  "#b494ff",
  "#6e9ffe",
  "#ffba94",
  "#ff94aa",
  "#94d9ff",
  "#38b497",
];

const TypePatientIncome = () => {
  return (
    <div className='TypePatientIncome'>
			<PieChart width={355} height={250}>
        <Pie
          data={data}
          cx={80}
          cy={110}
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
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
        />
      </PieChart>
		</div>
  )
}

export default TypePatientIncome
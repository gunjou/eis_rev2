import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
	{ name: 'S1 Profesi', value: 210 },
	{ name: 'Diploma IV', value: 100 },
	{ name: 'Diploma III', value: 90 },
	{ name: 'SLTA', value: 75 },
	{ name: 'S2', value: 75 },
	{ name: 'SPK', value: 60 },
	{ name: 'NERS', value: 100 },
];

const COLORS = [
	"#38b497",
  "#ffba94",
  "#6e9ffe",
  "#b494ff",
  "#55caaf",
  "#aaca55",
  "#ff94aa",
  "#94d9ff",
];

const Education = () => {
  return (
    <div className='Education'>
			<PieChart width={400} height={170}>
        <Pie
          data={data}
          cx={120}
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
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
        />
      </PieChart>
		</div>
  )
}

export default Education
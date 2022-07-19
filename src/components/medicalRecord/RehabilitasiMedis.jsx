import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "Medis", value: 11 },
  { name: "Fisioterapi", value: 41 },
  { name: "Okupasiterapi", value: 1 },
];

const COLORS = [
  "#ff94aa",
  "#38b497",
  "#aaca55",
  "#94d9ff",
  "#b494ff",
  "#6e9ffe",
  "#ffba94",
  "#55caaf",
];

const RehabilitasiMedis = () => {
  return (
    <div className='RehabilitasiMedis'>
			<PieChart width={280} height={250}>
        <Pie
          data={data}
          cx={135}
          cy={110}
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
          align="left"
        />
      </PieChart>
		</div>
  )
}

export default RehabilitasiMedis
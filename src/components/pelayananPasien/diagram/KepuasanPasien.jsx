import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Puas", value: 1870 },
  { name: "Cukup", value: 660 },
  { name: "Buruk", value: 300 },
];
const COLORS = ["#b494ff", "#6e9ffe", "#ffba94", "#55caaf"];

const KepuasanPasien = () => {
  return (
    <div className="KepuasanPasien">
			<ResponsiveContainer width="99%" height={240}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            // cx={85}
            // cy={75}
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            stroke="#eeeff1"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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

export default KepuasanPasien
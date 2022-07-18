import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Kimia Farma", value: 1870 },
  { name: "Graha Farma", value: 860 },
  { name: "Besmed", value: 300 },
  { name: "Ladson", value: 100 },
];
const COLORS = ["#6e9ffe", "#b494ff", "#ffba94", "#55caaf"];

const TopSupplier = () => {
  return (
    <div className='TopSupplier'>
      <ResponsiveContainer width="99%" height={240}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={150}
            cy={85}
            innerRadius={60}
            outerRadius={90}
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
          verticalAlign="bottom"
          // align="right"
          iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopSupplier
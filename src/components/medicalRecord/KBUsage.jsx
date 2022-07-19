import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "IUD", value: 11 },
  { name: "Pil", value: 4 },
  { name: "Kondom", value: 1 },
  { name: "Obat Vaginal", value: 1 },
  { name: "MO Pria", value: 2 },
  { name: "MO Wanita", value: 3 },
  { name: "Suntikan", value: 6 },
  { name: "Implan", value: 5 },
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
];

const KBUsage = () => {
  return (
    <div className="KBUsage">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={140}
          innerRadius={60}
          outerRadius={100}
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
  );
};

export default KBUsage;

import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Tunai", value: 3200000 },
    { name: "Kartu Kredit", value: 2500000 },
    { name: "Transfer Bank", value: 1300000 },
    { name: "Penjamin", value: 500000 },
    { name: "Piutang", value: 300000 },
    { name: "Donasi", value: 1900000 },
    { name: "Mix", value: 1800000 },
  ];
  const COLORS = [
    "#ffba94",
    "#6e9ffe",
    "#38b497",
    "#94d9ff",
    "#ca5570",
    "#b494ff",
    "#aaca55",
  ];

const CaraBayar = () => {
  return (
    <div className='CaraBayar'>
			<ResponsiveContainer width="99%" height={270}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          // cy={110}
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
        <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
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

export default CaraBayar
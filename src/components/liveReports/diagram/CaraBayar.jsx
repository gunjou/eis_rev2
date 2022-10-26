import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Tunai", value: 9300000 },
    { name: "Kartu Kredit", value: 4300000 },
    { name: "Transfer Bank", value: 9500000 },
    { name: "Penjamin", value: 2200000 },
    { name: "Piutang", value: 960000 },
    { name: "Donasi", value: 1200000 },
    { name: "Mix", value: 800000 },
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

  function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  } 

const CaraBayar = () => {
  data.sort(GetSortOrder("value"))
  return (
    <div className="CaraBayar">
      <ResponsiveContainer width="99%" height={270}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          // cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#94b8a3"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
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
          wrapperStyle={{fontSize: "11px"}}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default CaraBayar
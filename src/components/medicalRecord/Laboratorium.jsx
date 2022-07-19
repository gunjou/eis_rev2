import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
	{ name: 'Kimia', total: 3440, },
	{ name: 'GulaDarah', total: 2991, },
	{ name: 'Hematologi', total: 3299, },
	{ name: 'Serologi', total: 1689, },
	{ name: 'Bakteriologi', total: 165, },
	{ name: 'Liquor', total: 0, },
	{ name: 'Transudat/Exs', total: 0, },
	{ name: 'Urine', total: 408, },
	{ name: 'Tinja', total: 26, },
	{ name: 'GasDarah', total: 32, },
	{ name: 'RadioAssay', total: 0, },
	{ name: 'CairanOtak', total: 0, },
	{ name: 'CairanTubuh', total: 0, },
	{ name: 'Imonologi', total: 100, },
	{ name: 'Mikrobiologi', total: 0, },
	{ name: 'Lainnya/Napsa', total: 2279, },
];

const Laboratorium = () => {
  return (
    <div className='Laboratorium'>
      <ResponsiveContainer width="99%" height={460}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 20 }}
          className="text-[10px]"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip />
          <Bar
            dataKey="total"
            name="Total"
            barSize={15}
            radius={[0, 6, 6, 0]}
            fill="#6e9ffe"
            opacity={0.9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Laboratorium
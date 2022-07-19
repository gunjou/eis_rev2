import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";

const data = [
  { name: "Bayi Lahir Hidup", more2500g: 10, less2500g: 7, total: 17 },
  { name: "Kematian Perinatal", kematian: 5, less7d: 3, total: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip bg-gray-100 border p-3">
				<p className="label pb-2">{`${label} : ${
					payload[0].value + payload[1].value
				}`}</p>
				<p className="intro text-black text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
				<p className="intro text-black text-sm">{`${payload[1].name} : ${payload[1].value}`}</p>
			</div>
		);
	}
	return null;
};

const Prinatologi = () => {
  return (
    <div className='Prinatologi'>
			<ResponsiveContainer width="99%" height={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: -25,
              bottom: 5,
            }}
						className="text-[12px]"
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="less2500g" name="< 2500 gram" stackId="a" fill="#38b497" barSize={45} />
          <Bar dataKey="more2500g" name=">= 2500 gram" stackId="a" fill="#55caaf" radius={[10, 10, 0, 0]} />
          <Bar dataKey="less7d" name="Mati Neonatal < 7 hari" stackId="a" fill="#ff6181" />
          <Bar dataKey="kematian" name="Kelahiran Mati" stackId="a" fill="#ff94aa" radius={[10, 10, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
		</div>
  )
}

export default Prinatologi
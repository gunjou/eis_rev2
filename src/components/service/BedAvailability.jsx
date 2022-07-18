import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Kelas I', total: 30, terisi: 11, tersedia: 19, },
  { name: 'Kelas II', total: 40, terisi: 15, tersedia: 25, },
  { name: 'Kelas III', total: 70, terisi: 34, tersedia: 36, },
  { name: 'VIP Standar', total: 40, terisi: 20, tersedia: 20, },
  { name: 'VIP Madya', total: 25, terisi: 6, tersedia: 19, },
  { name: 'VIP Utama', total: 36, terisi: 9, tersedia: 27, },
  { name: 'VIP Super', total: 38, terisi: 11, tersedia: 27, },
  { name: 'Intensif', total: 32, terisi: 10, tersedia: 22, },
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip bg-gray-100 border p-3">
				<p className="label pb-2 text-sm font-semibold">{`${label} : ${
					payload[0].value + payload[1].value
				}`}</p>
				<p className="intro text-[#df3493] text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
				<p className="intro text-[#55caaf]  text-sm">{`${payload[1].name} : ${payload[1].value}`}</p>
			</div>
		);
	}
	return null;
};


const BedAvailability = () => {
  return (
    <div className='BedAvailability'>
      <ResponsiveContainer width="99%" height={280}>
			<BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{top: 10, right: 10, bottom: 10, left: 0, }}
          className='text-[11px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="vertical" verticalAlign="top" align="right" />
          <Bar dataKey="terisi" name='Terisi' stackId="a" barSize={15} radius={[0, 6, 6, 0]} fill="#df3493" />
          <Bar dataKey="tersedia" name='Tersedia' stackId="a" barSize={15} radius={[6, 6, 6, 6]} fill="#55caaf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BedAvailability
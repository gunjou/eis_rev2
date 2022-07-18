import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const data = [
  { name: 'Rawat Inap', kritik: 162, },
  { name: 'IGD', kritik: 127, },
  { name: 'Rawat Jalan', kritik: 152, },
  { name: 'Radiologi', kritik: 34, },
  { name: 'Lab', kritik: 32, },
  { name: 'Rehab', kritik: 45, },
  { name: 'Farmasi', kritik: 124, },
];

const AdviseDepartement = () => {
  return (
    <div className='AdviseDepartement'>
      <ResponsiveContainer width="99%" height={422}>
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
          <Tooltip />
          <Bar dataKey="kritik" name='Kritik' barSize={25} radius={[0, 6, 6, 0]} fill="#df3493" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AdviseDepartement
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const data = [
  { name: 'Kimia Farma', time: 30, },
  { name: 'Graha Farma', time: 45, },
  { name: 'Besmed', time: 60, },
  { name: 'Ladson', time: 90, },
];

const LeadTimeSupplier = () => {
  return (
    <div className='LeadTimeSupplier'>
			<ResponsiveContainer width="99%" height={200}>
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
          <Bar dataKey="time" name='Lead Time' barSize={25} radius={[0, 6, 6, 0]} fill="#df3493" opacity={0.9} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default LeadTimeSupplier
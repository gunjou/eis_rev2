import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const dataTopDiagnosa = [
	{ name: 'Medis', total: 479, },
	{ name: 'Non Medis', total: 473, },
	{ name: 'Permanen', total: 688, },
	{ name: 'Peralatan', total: 616, },
	{ name: 'Elektronik', total: 113, },
	{ name: 'ATK', total: 773, },
	{ name: 'Kendaraan', total: 72, },
];

const TypeAset = () => {
  return (
    <div className='TypeAset'>
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={dataTopDiagnosa}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[12px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "13px"}} />
          <Bar dataKey="total" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default TypeAset
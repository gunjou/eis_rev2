import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const dataTopDiagnosa = [
	{ name: 'Pulpitis', total: 30611, },
	{ name: 'Necrosis of pulp', total: 26969, },
	{ name: 'Chronic gingivitis', total: 13194, },
	{ name: 'Ispa', total: 12608, },
	{ name: 'perangkat ortodensi', total: 12273, },
	{ name: 'Periapical abscess', total: 7788, },
	{ name: 'Chronic periodontitis', total: 4813, },
	{ name: 'Impacted teeth', total: 4371, },
	{ name: 'Chronic apical periodontitis', total: 4365, },
	{ name: 'Hipertensi Esensial', total: 4363, },
];

const TopDiagnosa = () => {
  return (
    <div className='TopDiagnosa'>
      <ResponsiveContainer width="99%" height={368}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={dataTopDiagnosa}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip />
          <Bar dataKey="total" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopDiagnosa
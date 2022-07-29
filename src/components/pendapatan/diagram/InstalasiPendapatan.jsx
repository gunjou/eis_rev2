import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Rawat Inap", value: 22900000 },
  { name: "IGD", value: 19550000 },
  { name: "Rawat Jalan", value: 15260000 },
  { name: "Radiologi", value: 4100000 },
  { name: "Laboratorium", value: 8200000 },
  { name: "Bedah", value: 6690000 },
  { name: "Rehabilitasi", value: 11890000 },
  { name: "Farmasi", value: 17900000 },
];

const InstalasiPendapatan = () => {
  return (
    <div className='InstalasiPendapatan'>
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          {/* <YAxis fontSize={9} /> */}
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default InstalasiPendapatan
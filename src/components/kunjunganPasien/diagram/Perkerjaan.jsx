import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";

const data = [
  { name: "Tidak Bekerja", value: 81 },
  { name: "Pelajar/ Mahasiswa", value: 126 },
  { name: "Pensiunan", value: 105 },
  { name: "PNS", value: 84 },
  { name: "TNI", value: 76 },
  { name: "POLRI", value: 110 },
  { name: "Pedagang", value: 115 },
  { name: "Petani", value: 23 },
  { name: "Peternak", value: 93 },
  { name: "Karyawan", value: 63 },
  { name: "Buruh", value: 119 },
  { name: "Wiraswasta", value: 188 },
];

const Perkerjaan = () => {
  return (
    <div className="Perkerjaan">
      <ResponsiveContainer width="99%" height={270}>
			  <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 10, right: 10, bottom: 0, left: 6, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} />
          <Bar dataKey="value" name='Jumlah' barSize={12} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Perkerjaan
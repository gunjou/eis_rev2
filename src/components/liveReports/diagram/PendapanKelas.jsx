import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

const DataFormater = (number) => {
  if(number > 1000000000){
    return (number/1000000000).toString() + 'M';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'Jt';
  }else if(number > 1000){
    return (number/1000).toString() + 'Rb';
  }else{
    return number.toString();
  }
}

const data = [
  { name: "Kelas III", value: 12100000 },
  { name: "Kelas II", value: 8200000 },
  { name: "Kelas I", value: 2700000 },
  { name: "VIP Madya", value: 4300000 },
  { name: "VIP Utama", value: 12100000 },
  { name: "VIP Super", value: 9300000 },
  { name: "Intensif", value: 15000000 },
  { name: "VIP Standar", value: 12800000 },
];

const PendapanKelas = () => {
  return (
    <div className="PendapanKelas">
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: -10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={10} />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Bar dataKey="value" name='Jumlah' fill="#94b9f8" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PendapanKelas
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
  { name: "Rawat Inap", value: 22900000 },
  { name: "Rawat Jalan", value: 15260000 },
  { name: "IGD", value: 19550000 },
  { name: "Laboratorium", value: 8200000 },
  { name: "Bedah", value: 6690000 },
  { name: "Radiologi", value: 4100000 },
  { name: "Farmasi", value: 17900000 },
  { name: "Rehabilitasi", value: 11890000 },
];

const PendapatanInstalasi = () => {
  return (
    <div className="PendapatanInstalasi">
      <ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: -10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={11} />
          <YAxis  tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PendapatanInstalasi
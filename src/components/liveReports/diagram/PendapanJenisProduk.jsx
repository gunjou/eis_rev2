import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";

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
  { name: "Obat-obatan", value: 2290000 },
  { name: "Gas Medis", value: 1955000 },
  { name: "Radiologi", value: 1526000 },
  { name: "Laboratorium", value: 410000 },
  { name: "Injeksi", value: 820000 },
  { name: "Lainnya", value: 669000 },
];

const PendapanJenisProduk = () => {
  return (
    <div className="PendapanJenisProduk">
			<ResponsiveContainer width="99%" height={270}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" tickFormatter={DataFormater}/>
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#b494ff" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PendapanJenisProduk
import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

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
  { name: "Obat-obatan", value: 800000, trend: 3.6, pred: 4.2 },
  { name: "Gas Medis", value: 1200000, trend: 3.1, pred: 13 },
  { name: "Radiologi", value: 2500000, trend: 18.3, pred: 9.9 },
  { name: "Laboratorium", value: 1300000, trend: 14, pred: -1.1 },
  { name: "Injeksi", value: 500000, trend: 17.9, pred: -7.7 },
  { name: "Lainnya", value: 2300000, trend: 10.9, pred: -1.8 },
];

var formatter = new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR",
});

function GetSymbol(value) {
  if (value > 0) {
    return ("↗"+Math.abs(value));
  } else if (value < 0) {
    return ("↘"+Math.abs(value));
  } else {
    return ("⇋"+Math.abs(value));
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label">{`${label} ${GetSymbol(payload[0].payload.trend)}%`}</p>
        <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
        <p className="intro text-sm">{`Jumlah : ${formatter.format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const JenisProdukPengeluaran = () => {
  return (
    <div className='JenisProdukPengeluaran'>
      <div className="title flex">
        <p className='pb-2'>Pengeluaran Berdasarkan Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropdown className="text=lg" />
            25.9%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleDown /> 29.1%
      </sup>
			<ResponsiveContainer width="99%" height={260}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" tickFormatter={DataFormater}/>
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default JenisProdukPengeluaran
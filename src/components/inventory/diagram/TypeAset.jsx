import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropup } from 'react-icons/io';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const dataTopDiagnosa = [
	{ name: 'Medis', total: 479, trend: 14.8, pred: 2.2, },
	{ name: 'Non Medis', total: 473, trend: 5.9, pred: 0.1, },
	{ name: 'Permanen', total: 688, trend: 19.9, pred: 5, },
	{ name: 'Peralatan', total: 616, trend: 16.2, pred: 6.6, },
	{ name: 'Elektronik', total: 113, trend: 18.9, pred: -0.6, },
	{ name: 'ATK', total: 773, trend: 19.2, pred: 22.5, },
	{ name: 'Kendaraan', total: 72, trend: -12.8, pred: 2.5, },
];

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
        <p className="label">{`${payload[0].payload.name} ${GetSymbol(payload[0].payload.trend)}%`}</p>
        <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TypeAset = () => {
  return (
    <div className='TypeAset'>
      <div className="title flex">
        <p className='pb-2'>Jenis Aset</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropup className="text=lg" />
            12.3%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleUp /> 10.4%
      </sup>
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
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
          <Bar dataKey="total" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default TypeAset
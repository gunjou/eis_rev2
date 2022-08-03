import React from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import { Tooltip as Tlp } from '@mui/material';


const dataTopDiagnosa = [
	{ name: 'Pulpitis', total: 30611, trend: -22.5, pred: -21.1, },
	{ name: 'Necrosis of pulp', total: 26969, trend: -23.4, pred: -12.1, },
	{ name: 'Chronic gingivitis', total: 13194, trend: -5.8, pred: -10.8, },
	{ name: 'Ispa', total: 12608, trend: -4.2, pred: -10.2, },
	{ name: 'perangkat ortodensi', total: 12273, trend: -12.5, pred: -0.1, },
	{ name: 'Periapical abscess', total: 7788, trend: -7.2, pred: -8.5, },
	{ name: 'Chronic periodontitis', total: 4813, trend: -23.8, pred: -27.4, },
	{ name: 'Impacted teeth', total: 4371, trend: -12.2, pred: -25.1, },
	{ name: 'Chronic apical periodontitis', total: 4365, trend: -9, pred: -15.2, },
	{ name: 'Hipertensi Esensial', total: 4363, trend: -3.3, pred: -23.5, },
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
        <p className="label">{`${label} ${GetSymbol(payload[0].payload.trend)}%`}</p>
        <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TopDiagnosa = () => {
  return (
    <div className='TopDiagnosa'>
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Top Diagnosa</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropdown className="text=lg" />
            12.3%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleDown /> 5.1%
      </sup>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={dataTopDiagnosa}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
          <Bar dataKey="total" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#b494ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopDiagnosa
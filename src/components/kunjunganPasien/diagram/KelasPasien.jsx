import React, { useState, useEffect } from "react";
import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";


const data = [
  { name: "Kelas III", value: 2290, trend: 9.9, pred: 11.5, },
  { name: "Kelas II", value: 1955, trend: -11.9, pred: 7.4, },
  { name: "Kelas I", value: 1526, trend: 14.6, pred: 17.9, },
  { name: "VIP Madya", value: 410, trend: 10.2, pred: -9.3, },
  { name: "VIP Utama", value: 820, trend: 3.7, pred: 11.8, },
  { name: "VIP Super", value: 1189, trend: 1.1, pred: 0, },
  { name: "Intensif", value: 669, trend: -16.1, pred: -8.9, },
  { name: "Vip Standar", value: 1790, trend: 6  , pred: 6.6, },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, label)}
        {TlpPredict(payload[0].payload.pred, label)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const KelasPasien = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    kelas: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/kunjungan/kelas_perawatan?tgl_awal=2017-01-01&tgl_akhir=2018-06-02").then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          kelas: data2.data,
        });
      })
    );
  }, []);
  console.log(data2.kelas)
  console.log(data)
  return (
    <div className='KelasPasien'>
      {/* <label className="text-sm">
        Kasus Penyakit : 
        <select className="ml-2 bg-white rounded-md p-0.5 focus:outline-none">
          <option value="all">Semua Penyakit</option>
          <option value="erysipeloid">Erysipeloid</option>
          <option value="leptospirosis">Leptospirosis</option>
          <option value="pasteurellosis">Pasteurellosis</option>
        </select>
      </label> */}
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Kelas Perawatan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-5.1)}
      </sup>
			<ResponsiveContainer width="99%" height={240} >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          {/* <YAxis domain={[0]} /> */}
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default KelasPasien
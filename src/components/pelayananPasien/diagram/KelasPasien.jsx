import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, label)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const KelasPasien = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    kelas: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pelayanan/kelas_perawatan?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          kelas: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data2.kelas)

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
        <p className='pb-2'>Pelayanan Berdasarkan Kelas Perawatan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-5.1)}
      </sup>
			<ResponsiveContainer width="99%" height={230}>
        <BarChart
          width={500}
          height={300}
          data={data.kelas}
          margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          {/* <YAxis fontSize={9} /> */}
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default KelasPasien
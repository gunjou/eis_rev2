import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { expandDate } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";
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

const KelompokPasien = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    kelompok: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kunjungan/kelompok_pasien?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          kelompok: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data.kelompok)
  const new_data = data.kelompok

  return (
    <div className="KelompokPasien">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Kelompok Pasien</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          {GetTrend(10.4)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(4.7)}
      </sup>
      <ResponsiveContainer width="99%" height={240}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={new_data}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KelompokPasien;

import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { expandDate, GetSortAge } from "../../CommonTools";
import { GetPredict, GetTrend, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label pb-2">{`${label} Tahun : ${
          payload[0].value + payload[1].value
        }`}</p>
        <span className="intro text-xs flex">Trend: {TlpTittle(payload[0].payload.trend)}</span>
        <span className="intro text-xs flex">Predict: {TlpTittle(payload[0].payload.pred)}</span>
        <p className="intro text-black text-sm">{`Laki-laki : ${payload[0].value}`}</p>
        <p className="intro text-black text-sm">{`Perempuan : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const AgeGender = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    value: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kunjungan/umur_jenis_kelamin?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          value: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data.value)
  try {
    // data.value.sort(GetSortOrder("value")).reverse();
    var new_data = GetSortAge(data.value);
  }
  catch(err) {
    
  }
  // const new_data = data.value;

  return (
    <div className="AgeGender">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Umur dan Jenis Kelamin</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(14.3)}
          </sup>
        </Tlp>
      <p className="flex text-xs pl-5 cursor-default">
        Predict : {GetPredict(5.7)}
      </p>
      </div>
      <ResponsiveContainer width="99%" height={100}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="laki_laki" stackId="a" fill="#3AB0FF" barSize={20} radius={[9, 9, 0, 0]} />
          <Bar dataKey="perempuan" fill="#F57CAC" barSize={20} radius={[9, 9, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AgeGender
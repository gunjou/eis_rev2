import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate, GetSortOrder } from '../../CommonTools';
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

const TopDiagnosa = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    diagnosa: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pelayanan/top_diagnosa?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          diagnosa: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  try {
    data.diagnosa.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }

  return (
    <div className='TopDiagnosa'>
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Top Diagnosa</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-5.1)}
      </sup>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data.diagnosa}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#b494ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopDiagnosa
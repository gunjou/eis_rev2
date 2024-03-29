import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Temporary data (Remove later)
const dataTopDiagnosa = [
	{ name: 'Medis', total: 479, trend: 14.8, pred: 2.2, },
	{ name: 'Non Medis', total: 473, trend: 5.9, pred: 0.1, },
	{ name: 'Permanen', total: 688, trend: 19.9, pred: 5, },
	{ name: 'Peralatan', total: 616, trend: 16.2, pred: 6.6, },
	{ name: 'Elektronik', total: 113, trend: 18.9, pred: -0.6, },
	{ name: 'ATK', total: 773, trend: 19.2, pred: 22.5, },
	{ name: 'Kendaraan', total: 72, trend: -12.8, pred: 2.5, },
];

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

const TypeAset = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    jenis_aset: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/inventory/jenis_aset?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          jenis_aset: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  return (
    <div className='TypeAset'>
      <div className="title flex">
        <p className='pb-2'>Jenis Aset</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          {GetTrend(12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(10.4)}
      </sup>
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data.jenis_aset}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[12px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Total' barSize={15} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default TypeAset
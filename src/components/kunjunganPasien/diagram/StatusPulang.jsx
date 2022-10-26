import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { expandDate } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp = [
  { name: "Pulang Paksa", value: 187, trend: 4.1, pred: 2.1 },
  { name: "Dipulangkan", value: 285, trend: 7.4, pred: -4.9 },
  { name: "Dirujuk", value: 79, trend: 14.9, pred: 8.7 },
  { name: "Dipindah", value: 121, trend: -14.7, pred: 7.7 },
  { name: "Kabur", value: 8, trend: 11.7, pred: 12.4 },
  { name: "Sembuh", value: 195, trend: -0.6, pred: 5.9 },
  { name: "Belum Sembuh", value: 54, trend: 11.7, pred: 8.7 },
  { name: "Meninggal", value: 68, trend: 11, pred: 15.1 },
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

const StatusPulang = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    status: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kunjungan/status_pulang?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          status: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  const new_data = data.status

  return (
    <div className="StatusPulang">
      <div className="title flex">
        <p className='pb-2'>Status Pulang</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-3.9)}
          </sup>
        </Tlp>
      <p className="flex text-xs pl-5 cursor-default">
        Predict : {GetPredict(4.0)}
      </p>
      </div>
      <ResponsiveContainer width="99%" height={100}>
      <BarChart
        width={500}
        height={300}
        data={new_data}
        margin={{ top: 0, right: 10, left: 10, bottom: -10, }}
      >
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis dataKey="name" interval={0} fontSize={10} />
        {/* <YAxis fontSize={9} /> */}
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          name="Jumlah"
          fill="#b494ff"
          radius={[9, 9, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StatusPulang;

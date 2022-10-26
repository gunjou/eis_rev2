import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


const data_tmp = [
    { name: "Tidak Sekolah", value: 0, trend: 0, pred: 0 },
    { name: "SD", value: 0, trend: 0, pred: 0 },
    { name: "SMP", value: 0, trend: 0, pred: 0 },
    { name: "SMA/SMK", value: 0, trend: 0, pred: 0 },
    { name: "D3", value: 0, trend: 0, pred: 0 },
    { name: "S1", value: 0, trend: 0, pred: 0 },
    { name: "S2", value: 0, trend: 0, pred: 0 },
    { name: "S3", value: 0, trend: 0, pred: 0 },
];

const COLORS = [
  "#ca5570",
  "#ff94aa",
  "#55caaf",
  "#ffba94",
  "#6e9ffe",
  "#aaca55",
  "#94d9ff",
  "#b494ff",
  "#38b497",
];
  
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`;

  return extractDate;
};

const Education = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    pendidikan: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pelayanan/pendidikan?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          pendidikan: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  return (
    <div className="Education">
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Pendidikan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
      </sup>
        <ResponsiveContainer width="99%" height={300}>
        <PieChart width={100} height={210}>
        <Pie
          data={data_tmp}
          // cx={150}
          // cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={5}
          dataKey="value"
        >
          {data_tmp.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Education
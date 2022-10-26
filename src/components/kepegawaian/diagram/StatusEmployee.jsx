import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from '../../CommonTools';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp = [
  { name: "Aktif", value: 364, trend: 2.4, pred: -1.5 },
  { name: "Cuti", value: 10, trend: 0.3, pred: 1.5 },
  { name: "Non Aktif", value: 17, trend: -0.9, pred: -2.8 },
  { name: "Pensiun", value: 20, trend: 3.7, pred: -3.2 },
  { name: "Pindah Kerja", value: 28, trend: 0, pred: 0.2 },
  { name: "Hari Libur Extra", value: 9, trend: -0.5, pred: 3.1 },
  { name: "Dokter Luar", value: 29, trend: -0.5 , pred: -2.8 },
];
const COLORS = [
	"#55caaf",
	"#b494ff",
  "#ffba94",
  "#ff94aa",
  "#38b497",
  "#6e9ffe",
  "#ca5570",
  "#aaca55",
  "#94d9ff",
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

const StatusEmployee = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    status: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kepegawaian/status_pegawai?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          status: data2.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  try {
    data2.status.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }
  // console.log(data2.status)

  return (
    <div className="StatusEmployee">
      <div className="title flex">
        <p className='pb-2'>Status Pegawai</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(1.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(2.1)}
      </sup>
			<ResponsiveContainer width="99%" height={230}>
        <PieChart width={100} height={210}>
        <Pie
          data={data2.status}
          // cx={150}
          cy={85}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#94b8a3"
          paddingAngle={3}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {COLORS.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
          wrapperStyle={{fontSize: "12px"}}
          />
      </PieChart>
     </ResponsiveContainer>
		</div>
  )
}

export default StatusEmployee
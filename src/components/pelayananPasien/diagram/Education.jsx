import { Tooltip as Tlp } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';


const data = [
    { name: "Tidak Sekolah", value: 125, trend: -1.2, pred: 0 },
    { name: "SD", value: 262, trend: 3.1, pred: -0.1 },
    { name: "SMP", value: 52, trend: 5.4, pred: 10.2 },
    { name: "SMA/SMK", value: 83, trend: -7.9, pred: -2.7 },
    { name: "D3", value: 101, trend: 2.2, pred: 5.1 },
    { name: "S1", value: 181, trend: -10.5, pred: -5.2 },
    { name: "S2", value: 30, trend: 12.6, pred: 6.7 },
    { name: "S3", value: 31, trend: 10.9, pred: 7.4 },
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

const Education = () => {
  return (
    <div className="Education">
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Pendidikan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(5.1)}
      </sup>
        <ResponsiveContainer width="99%" height={300}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          // cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#eeeff1"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
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
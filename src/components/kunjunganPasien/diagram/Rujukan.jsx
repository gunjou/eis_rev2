import { Tooltip as Tlp } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';


const data = [
  { name: "Datang Sendiri", value: 465, trend: 16.8, pred: -12.3, },
  { name: "Puskesmas", value: 588, trend: 9.6, pred: 13, },
  { name: "RS Pemerintah", value: 479, trend: -10.2, pred: 18.8, },
  { name: "RS Swasta", value: 706, trend: 15.7, pred: 10.1, },
  { name: "Praktek Swasta", value: 407, trend: 0, pred: 3.3, },
  { name: "Bidan", value: 299, trend: 11.5, pred: -17.9, },
  { name: "Faskes", value: 23, trend: 17.3, pred: 13.4, },
  { name: "Kecelakaan", value: 748, trend: -10.3, pred: 12.9, },
  { name: "Lain-lain", value: 52, trend: 10.4, pred: 13.2, },
];

const COLORS = [
  "#b494ff",
  "#6e9ffe",
  "#ffba94",
  "#55caaf",
  "#ff94aa",
  "#94d9ff",
  "#aaca55",
  "#38b497",
  "#ca5570",
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

const Rujukan = () => {
  return (
    <div className="Rujukan">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Rujukan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-10.4)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-10.7)}
      </sup>
      <ResponsiveContainer width="99%" height={240}>
        <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={150}
          cy={85}
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
          wrapperStyle={{fontSize: "12px"}}
          />
      </PieChart>
     </ResponsiveContainer>
    </div>
  )
}

export default Rujukan
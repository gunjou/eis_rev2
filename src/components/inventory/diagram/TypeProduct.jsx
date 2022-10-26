import { Tooltip as Tlp } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetSortOrder } from '../../CommonTools';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';

const data = [
  { name: "Alkes", value: 0, trend: 0, pred: 0 },
  { name: "Obat", value: 0, trend: 0, pred: 0 },
  { name: "Gas Medis", value: 0, trend: 0, pred: 0 },
  { name: "Askes", value: 0, trend: 0, pred: 0 },
  { name: "BHP", value: 0, trend: 0, pred: 0 },
  { name: "Injeksi", value: 0, trend: 0, pred: 0 },
];
const COLORS = [
  "#94d9ff",
  "#ffba94",
  "#6e9ffe",
  "#aaca55",
  "#b494ff",
  "#55caaf",
  "#ff94aa",
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

const TypeProduct = () => {
  data.sort(GetSortOrder("value"))
  return (
    <div className='TypeProduct'>
      <div className="title flex">
        <p className='pb-2'>Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-9.2)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-9.4)}
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
          stroke="#94b8a3"
          paddingAngle={2}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
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

export default TypeProduct
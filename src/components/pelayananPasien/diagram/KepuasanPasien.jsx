import { Tooltip as Tlp } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";


const data = [
  { name: "Puas", value: 1870, trend: 21.1, pred: 21.4 },
  { name: "Cukup", value: 660, trend: 12.7, pred: 15 },
  { name: "Buruk", value: 300, trend: 11, pred: 6.9 },
];
const COLORS = ["#b494ff", "#6e9ffe", "#ffba94", "#55caaf"];

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

const KepuasanPasien = () => {
  return (
    <div className="KepuasanPasien">
      <div className="title">
        <p className='pb-2'>Kepuasan Terhadap Pelayanan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pl-2 cursor-default">
            Trend : {GetTrend(-22.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(5.1)}
      </sup>
			<ResponsiveContainer width="99%" height={200}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            // cx={85}
            // cy={75}
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            stroke="#eeeff1"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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

export default KepuasanPasien
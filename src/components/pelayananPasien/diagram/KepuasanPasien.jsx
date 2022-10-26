import { Tooltip as Tlp } from '@mui/material';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";


const data = [
  { name: "Buruk", value: 0, trend: 0, pred: 0 },
  { name: "Cukup", value: 0, trend: 0, pred: 0 },
  { name: "Puas", value: 0, trend: 0, pred: 0 },
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

function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] < b[prop]) {    
          return 1;    
      } else if (a[prop] > b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
} 

const KepuasanPasien = () => {
  try {
    data.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }
  return (
    <div className="KepuasanPasien">
      <div className="title">
        <p className='pb-2'>Kepuasan Terhadap Pelayanan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pl-2 cursor-default">
            Trend : {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
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
            stroke="#94b8a3"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
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
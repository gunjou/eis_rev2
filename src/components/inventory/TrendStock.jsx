import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, } from "recharts";

const dataStatusStock = [
  { month: "Jan", optimal: 1285500000, over: 700000000, under: 307500000, },
  { month: "Feb", optimal: 1305500000, over: 640000000, under: 397500000, },
  { month: "Mar", optimal: 1192500000, over: 770000000, under: 317500000, },
  { month: "Apr", optimal: 1004500000, over: 650000000, under: 227500000, },
  { month: "Mei", optimal: 1165500000, over: 800000000, under: 280500000, },
  { month: "Jun", optimal: 1301500000, over: 700000000, under: 200000000, },
  { month: "Jul", optimal: 1110500000, over: 560000000, under: 300500000, },
  // { month: "Agu", optimal: 1100000000, over: 450000000, under: 150500000, },
  // { month: "Sep", optimal: 1000500000, over: 560000000, under: 257500000, },
  // { month: "Okt", optimal: 1410000000, over: 780000000, under: 307500000, },
  // { month: "Nov", optimal: 1090500000, over: 885000000, under: 305500000, },
  // { month: "Des", optimal: 1386500000, over: 650000000, under: 327500000, },
];

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const toPercent = (decimal) => `${(decimal * 100).toFixed(1)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio);
};

const CustomTooltip = ({ active, payload, label }) => {
  const total = payload.reduce((result, entry) => result + entry.value, 0);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-left bg-gray-100/90 border p-3">
        <p className="label pb-2 text-sm font-bold">{`${label} : ${formatter.format(total)}`}</p>
        <p className="text-sm text-[#ffba94]">{`Overstock : ${formatter.format(payload[2].value)} (${getPercent(payload[2].value, total)}) `}</p>
        <p className="text-sm text-[#55caaf]">{`Optimal : ${formatter.format(payload[1].value)} (${getPercent(payload[1].value, total)}) `}</p>
        <p className="text-sm text-[#df3493]">{`Understock : ${formatter.format(payload[0].value)} (${getPercent(payload[0].value, total)}) `}</p>
      </div>
    );
  }
  return null;
};


const TrendStock = () => {
  return (
    <div className='TrendStock'>
      <ResponsiveContainer width="99%" height={275}>
        <BarChart
          width={500}
          height={400}
          data={dataStatusStock}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          {/* <YAxis tickFormatter={toPercent} orientation='right' /> */}
          <Tooltip content={CustomTooltip} />
          <Bar type="monotone" dataKey="optimal" fill="#55caaf" opacity={0.9} barSize={30} radius={[9, 9, 0, 0]} />
          <Bar type="monotone" dataKey="under" fill="#df3493" opacity={0.9} barSize={30} radius={[9, 9, 0, 0]} />
          <Bar type="monotone" dataKey="over" fill="#ffba94" opacity={0.9} barSize={30} radius={[9, 9, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendStock
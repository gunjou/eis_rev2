import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", past: 656, now: 428 },
  { month: "Feb", past: 295, now: 536 },
  { month: "Mar", past: 350, now: 216 },
  { month: "Apr", past: 497, now: 550 },
  { month: "Mei", past: 561, now: 394 },
  { month: "Jun", past: 419, now: 340 },
  { month: "Jul", past: 380, now: 486 },
];

const TrendIncome = () => {
  return <div className="TrendIncome">
    <ResponsiveContainer width="99%" height={250}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffba94" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#ffba94" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b494ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#b494ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" interval={0} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="past"
            name="Tahun Sebelumnya"
            stroke="#ffba94"
            fill="url(#colorPast)"
          />
          <Area
            type="monotone"
            dataKey="now"
            name="Tahun Sekarang"
            stroke="#b494ff"
            fill="url(#colorNow)"
          />
        </AreaChart>
      </ResponsiveContainer>
  </div>;
};

export default TrendIncome;

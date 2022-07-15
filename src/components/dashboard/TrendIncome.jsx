import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", past: 393, now: 543 },
  { month: "Feb", past: 631, now: 323 },
  { month: "Mar", past: 463, now: 445 },
  { month: "Apr", past: 584, now: 588 },
  { month: "Mei", past: 462, now: 334 },
  { month: "Jun", past: 310, now: 643 },
  { month: "Jul", past: 235, now: 512 },
];

const TrendIncome = () => {
  return (
    <div className="TrendIncome">
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
    </div>
  );
};

export default TrendIncome;

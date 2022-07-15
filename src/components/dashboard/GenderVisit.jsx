import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", male: 656, female: 428, },
  { month: "Feb", male: 295, female: 536, },
  { month: "Mar", male: 350, female: 216, },
  { month: "Apr", male: 497, female: 550, },
  { month: "Mei", male: 561, female: 394, },
  { month: "Jun", male: 419, female: 340, },
  { month: "Jul", male: 380, female: 486, },
];

const GenderVisit = () => {
  return (
    <div className="GenderVisit">
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
            <linearGradient id="colorMale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6e9ffe" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#6e9ffe" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFemale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ea94ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#ea94ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" interval={0} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="male"
            stroke="#6e9ffe"
            fill="url(#colorMale)"
          />
          <Area
            type="monotone"
            dataKey="female"
            stroke="#ea94ff"
            fill="url(#colorFemale)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderVisit;

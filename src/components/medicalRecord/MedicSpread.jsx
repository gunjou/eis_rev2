import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "Kebidanan", total: 3800 },
  { name: "Perinatologi", total: 3000 },
  { name: "Pembedahan", total: 2000 },
  { name: "Radiologi", total: 2780 },
  { name: "Laboratorium", total: 1890 },
  { name: "Rehabilitasi Medik", total: 2390 },
  { name: "Pelayanan Khusus", total: 3490 },
  { name: "Kesehatan Jiwa", total: 3490 },
  { name: "Keluarga Berencana", total: 3490 },
];

const MedicSpread = () => {
  return (
    <div className="MedicSpread">
      <ResponsiveContainer width="99%" height={290}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -8,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="name" interval={0} fontSize={11} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="total"
            name="Total"
            fill="#55caaf"
            radius={[9, 9, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MedicSpread;

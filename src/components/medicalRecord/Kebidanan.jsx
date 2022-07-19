import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Persalinan Normal", total: 20 },
  { name: "Pers.dg komplikasi", total: 8 },
  { name: "Perd.sbl persalinan", total: 21 },
  { name: "Perd.sdh persalinan", total: 18 },
  { name: "Pre Eclampsi", total: 6 },
  { name: "Eclampsi", total: 5 },
  { name: "Infeksi", total: 3 },
  { name: "Sectio caesaria", total: 18 },
  { name: "Abortus ", total: 5 },
  { name: "Lain-lain", total: 6 },
];

const Kebidanan = () => {
  return (
    <div className="Kebidanan">
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
          className="text-[10px]"
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip />
          <Bar
            dataKey="total"
            name="Total"
            barSize={15}
            radius={[0, 6, 6, 0]}
            fill="#6e9ffe"
            opacity={0.9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Kebidanan;

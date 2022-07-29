import React from "react";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";

const data = [
  { name: "UMUM", value: 2290 },
  { name: "JKN", value: 1955 },
  { name: "BPJS", value: 1526 },
  { name: "PERUSAHAAN", value: 410 },
  { name: "JAMKESDA", value: 820 },
  { name: "JAMKESMAS", value: 1189 },
  { name: "JASA RAHARJA", value: 669 },
];

const KelompokPasien = () => {
  return (
    <div className="KelompokPasien">
      <ResponsiveContainer width="99%" height={260}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KelompokPasien;

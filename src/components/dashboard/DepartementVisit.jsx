import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, } from 'recharts';


const data = [
  { name: 'Pasien Lama', value: 1250 },
  { name: 'Pasien Baru', value: 870 },
  { name: 'Bayi Baru Lahir', value: 660 },
  { name: 'Pasien Lainnya', value: 300 },
];
const COLORS = ['#b494ff', '#6e9ffe', '#ffba94', '#55caaf'];


const DepartementVisit = () => {
  
  return (
    <div className='DepartementVisit'>
          <PieChart width={400} height={210}>
          <Pie
          data={data}
          cx={120}
          cy={110}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
        </PieChart>
    </div>
  )
}

export default DepartementVisit
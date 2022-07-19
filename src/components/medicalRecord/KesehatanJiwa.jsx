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
	{ name: 'Psikotes', total: 9, },
	{ name: 'Konsultasi', total: 38, },
	{ name: 'Medikamenosta', total: 127, },
	{ name: 'Elektro Medik', total: 0, },
	{ name: 'Psikoterapi', total: 114, },
	{ name: 'Play Therapy', total: 0, },
	{ name: 'Rehabilitasi', total: 0, },
	{ name: 'Napsa', total: 39, },
];

const KesehatanJiwa = () => {
  return (
    <div className='KesehatanJiwa'>
			<ResponsiveContainer width="99%" height={250}>
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
          <XAxis dataKey="name" interval={0} fontSize={9} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="total"
            name="Total"
            fill="#b494ff"
            radius={[9, 9, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KesehatanJiwa
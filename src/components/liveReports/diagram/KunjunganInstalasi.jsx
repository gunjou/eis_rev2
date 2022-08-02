import React from 'react'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Rawat Inap', service: 30, notService: 9, },
  { name: 'IGD', service: 40, notService: 3, },
  { name: 'Rawat Jalan', service: 45, notService: 6, },
  { name: 'Radiologi', service: 40, notService: 7, },
  { name: 'Laboratorium', service: 25, notService: 9, },
  { name: 'Rehabilitasi', service: 36, notService: 14, },
  { name: 'Bedah', service: 38, notService: 5, },
  { name: 'Farmasi', service: 32, notService: 8, },
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip bg-gray-100 border p-3">
				<p className="label pb-2 text-sm font-semibold">{`${label}`}</p>
				<p className="intro text-[#55caaf] text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
				<p className="intro text-[#aaca55]  text-sm">{`${payload[1].name} : ${payload[1].value + payload[0].value}`}</p>
			</div>
		);
	}
	return null;
};

function CustomBarLabel(props) {
  const { x, y, width, value } = props;
  return <text x={x + width -15} y={y} fill="#000" textAnchor="middle" dy={11}>{`${value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

const KunjunganInstalasi = () => {
  return (
    <div className="KunjunganInstalasi">
			<ResponsiveContainer width="99%" height={270}>
			  <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{top: 10, right: 10, bottom: 0, left: 20, }}
          className='text-[12px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign='top' />
          <Bar dataKey="service" name='Terlayani' stackId="a" barSize={15} radius={[0, 0, 0, 0]} fill="#55caaf" label={<CustomBarLabel />} />
          <Bar dataKey="notService" name='Kunjungan' stackId="a" barSize={15} radius={[0, 6, 6, 0]} fill="#aaca55" label={<CustomBarLabel />} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KunjunganInstalasi
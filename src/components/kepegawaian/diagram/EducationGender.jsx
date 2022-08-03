import React from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import { Tooltip as Tlp } from '@mui/material';

const data1 = [
	{ name: 'S1 Profesi', value: 210, trend: 0.0, pred: 0.0, },
	{ name: 'Diploma IV', value: 100, trend: 0.0, pred: 0.0, },
	{ name: 'Diploma III', value: 90, trend: 0.0, pred: 0.0, },
	{ name: 'SLTA', value: 75, trend: 0.0, pred: 0.0, },
	{ name: 'S2', value: 75, trend: 0.0, pred: 0.0, },
	{ name: 'SPK', value: 60, trend: 0.0, pred: 0.0, },
	{ name: 'NERS', value: 100, trend: 0.0, pred: 0.0, },
];

const data2 = [
  { name: "Laki-laki", value: 364, trend: 0.0, pred: 0.0, },
  { name: "Perempuan", value: 510, trend: 0.0, pred: 0.0, },
];

const COLORS = [
	"#6e9ffe",
	"#ffba94",
	"#b494ff",
	"#55caaf",
	"#aaca55",
	"#94d9ff",
	"#38b497",
	"#fffaaa",
];

const COLORS2 = [
	"#3AB0FF",
	"#F57CAC",
];

function GetSymbol(value) {
	if (value > 0) {
	  return ("↗"+Math.abs(value));
	} else if (value < 0) {
	  return ("↘"+Math.abs(value));
	} else {
	  return ("⇋"+Math.abs(value));
	}
}
  
  const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip bg-gray-100 border p-3">
		  <p className="label">{`${payload[0].payload.name} ${GetSymbol(payload[0].payload.trend)}%`}</p>
		  <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
  };
  
const EducationGender = () => {
  return (
    <div className="EducationGender">
			<div className="title flex">
        <p className='pb-2'>Pendidikan dan Jenis Kelamin</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <CgArrowsExchange className="text=lg" />
            0.0%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <CgArrowsExchange /> 0.0%
      </sup>
			<ResponsiveContainer width="99%" height={240}>
				<PieChart width={400} height={270}>
					<Pie
						data={data1}
						// cx={120}
						// cy={80}
						innerRadius={70}
						outerRadius={90}
						fill="#8884d8"
						stroke="#eeeff1"
						paddingAngle={3}
						dataKey="value"
						>
						{data1.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
					</Pie>
					<Pie data={data2} dataKey="value" outerRadius={60}>
						{data2.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
							))}
					</Pie>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						payload={data1.map(
							(item, index) => ({
								id: item.name,
								value: `${item.name}`,
								color: COLORS[index % COLORS.length]
							})
							)}
							/>
				</PieChart>
			</ResponsiveContainer>
		</div>
  )
}

export default EducationGender
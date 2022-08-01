import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data1 = [
	{ name: 'S1 Profesi', value: 210 },
	{ name: 'Diploma IV', value: 100 },
	{ name: 'Diploma III', value: 90 },
	{ name: 'SLTA', value: 75 },
	{ name: 'S2', value: 75 },
	{ name: 'SPK', value: 60 },
	{ name: 'NERS', value: 100 },
];

const data2 = [
  { name: "Laki-laki", value: 364 },
  { name: "Perempuan", value: 510 },
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

const EducationGender = () => {
  return (
    <div className="EducationGender">
			<ResponsiveContainer width="99%" height={250}>
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
					<Tooltip />
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
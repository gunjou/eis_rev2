import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from '../../CommonTools';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp1 = [
	{ name: 'S1 Profesi', value: 210, trend: 0.0, pred: 0.0, },
	{ name: 'Diploma IV', value: 100, trend: 0.0, pred: 0.0, },
	{ name: 'Diploma III', value: 90, trend: 0.0, pred: 0.0, },
	{ name: 'SLTA', value: 75, trend: 0.0, pred: 0.0, },
	{ name: 'S2', value: 75, trend: 0.0, pred: 0.0, },
	{ name: 'SPK', value: 60, trend: 0.0, pred: 0.0, },
	{ name: 'NERS', value: 100, trend: 1.0, pred: 0.0, },
];

// Remove later
const data_tmp2 = [
  { name: "Laki-laki", value: 364, trend: 0.0, pred: 0.0, },
  { name: "Perempuan", value: 510, trend: 1.0, pred: 0.0, },
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

const COLORS_GENDER = [
	"#F57CAC",
	"#3AB0FF",
];
  
const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip bg-gray-100 border p-3">
		  {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
		  {TlpPredict(payload[0].payload.pred)}
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
};
  
const EducationGender = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    gender: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/kepegawaian/pendidikan_jenis_kelamin?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          gender: data2.pendidikan,
          education: data2.jenis_kelamin,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  var data_education = []  
  var data_gender = []  
  try {
    data2.gender.sort(GetSortOrder("value"))
    data2.education.sort(GetSortOrder("value"))
    data2.education.map((row) => data_education.push({name: row.name, value: row.value}))
	const gender = ["Perempuan", "Laki-laki"]
    data2.gender.map((row, idx) => data_gender.push({name: gender[idx], value: row.value}))
  }
  catch(err) {
    
  }
  // console.log(data2)

  return (
    <div className="EducationGender">
			<div className="title flex">
        <p className='pb-2'>Pendidikan dan Jenis Kelamin</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
						{GetTrend(0.0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0.0)}
      </sup>
			<ResponsiveContainer width="99%" height={240}>
				<PieChart width={400} height={270}>
					<Pie
						data={data_education}
						// cx={120}
						// cy={80}
						innerRadius={70}
						outerRadius={90}
						fill="#8884d8"
            stroke="#94b8a3"
            paddingAngle={3}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
						>
						{data_education.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
					</Pie>
					<Pie data={data_gender} dataKey="value" outerRadius={60} startAngle={90} endAngle={-270}>
						{data_gender.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS_GENDER[index % COLORS.length]} />
							))}
					</Pie>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						payload={data_education.map(
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
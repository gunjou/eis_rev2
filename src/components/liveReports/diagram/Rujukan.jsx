import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


// remove later
const data_tmp = [
  { name: "Datang Sendiri", value: 465 },
  { name: "Puskesmas", value: 588 },
  { name: "RS Pemerintah", value: 479 },
  { name: "RS Swasta", value: 706 },
  { name: "Praktek Swasta", value: 407 },
  { name: "Bidan", value: 299 },
  { name: "Faskes", value: 23 },
  { name: "Kecelakaan", value: 748 },
  { name: "Lain-lain", value: 52 },
];
const COLORS = [
  "#b494ff",
  "#6e9ffe",
  "#ffba94",
  "#55caaf",
  "#ff94aa",
  "#94d9ff",
  "#aaca55",
  "#38b497",
  "#ca5570",
];

const Rujukan = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    rujukan: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/realtime/asal_rujukan?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`, {mode:'cors'}).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          rujukan: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  try {
    data.rujukan.sort(GetSortOrder("value"));
  }
  catch(err) {
    
  }
  const new_data = data.rujukan

  return (
    <div className="Rujukan">
			<ResponsiveContainer width="99%" height={260}>
        <PieChart width={100} height={210}>
        <Pie
          data={new_data}
          // cx={150}
          cy={80}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#94b8a3"
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {COLORS.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
          wrapperStyle={{fontSize: "10px"}}
          />
      </PieChart>
     </ResponsiveContainer>
		</div>
  )
}

export default Rujukan
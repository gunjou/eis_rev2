import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";
import { BASE_URL } from "../../../App";
import { REALTIME_PORT } from "../../../pages/LiveReports";


// remove later
const data_tmp = [
  { name: "Tunai", value: 9300000 },
  { name: "Kartu Kredit", value: 4300000 },
  { name: "Transfer Bank", value: 9500000 },
  { name: "Penjamin", value: 2200000 },
  { name: "Piutang", value: 960000 },
  { name: "Donasi", value: 1200000 },
  { name: "Mix", value: 800000 },
];

const COLORS = [
  "#ffba94",
  "#6e9ffe",
  "#38b497",
  "#94d9ff",
  "#ca5570",
  "#b494ff",
  "#aaca55",
];

const CaraBayar = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    cara_bayar: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(BASE_URL + `:` + REALTIME_PORT + `/realtime/pendapatan_cara_bayar?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          cara_bayar: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data.cara_bayar)
  try {
    data.cara_bayar.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }
  const new_data = data.cara_bayar

  return (
    <div className="CaraBayar">
      <ResponsiveContainer width="99%" height={270}>
        <PieChart width={100} height={210}>
        <Pie
          data={new_data}
          // cx={150}
          // cy={110}
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
        <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)} />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          wrapperStyle={{fontSize: "11px"}}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default CaraBayar
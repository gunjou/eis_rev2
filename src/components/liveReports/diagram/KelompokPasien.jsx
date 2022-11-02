import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


// remove later
const data_tmp = [
  { name: "UMUM", value: 2290 },
  { name: "JKN", value: 1955 },
  { name: "BPJS", value: 1526 },
  { name: "PERUSAHAAN", value: 410 },
  { name: "JAMKESDA", value: 820 },
  { name: "JAMKESMAS", value: 1189 },
  { name: "JASA RAHARJA", value: 669 },
];

const KelompokPasien = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    kelompok: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/realtime/kelompok_pasien?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`, {mode:'cors'}).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          kelompok: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  const new_data = data.kelompok

  return (
    <div className="KelompokPasien">
			<ResponsiveContainer width="99%" height={260}>
			  <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={new_data}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KelompokPasien
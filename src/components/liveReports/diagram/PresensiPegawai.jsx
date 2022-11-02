import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


// remove later
const data_tmp = [
  { name: "Check In", value: 221 },
  { name: "Absen", value: 10 },
  { name: "Istirahat", value: 15 },
  { name: "Cuti", value: 24 },
];

const PresensiPegawai = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    presensi: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/realtime/absensi_pegawai?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`, {mode:'cors'}).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          presensi: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  const new_data = data.presensi

  return (
    <div className="PresensiPegawai">
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 5, right: 10, left: -20, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip />
          <Bar dataKey="value" name='Jumlah' fill="#ffba94" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PresensiPegawai
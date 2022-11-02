import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


// remove later
const data_tmp = [
  { name: "Kelas III", value: 12100000 },
  { name: "Kelas II", value: 8200000 },
  { name: "Kelas I", value: 2700000 },
  { name: "VIP Madya", value: 4300000 },
  { name: "VIP Utama", value: 12100000 },
  { name: "VIP Super", value: 9300000 },
  { name: "Intensif", value: 15000000 },
  { name: "VIP Standar", value: 12800000 },
];

const DataFormater = (number) => {
  if(number > 1000000000){
    return (number/1000000000).toString() + 'M';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'Jt';
  }else if(number > 1000){
    return (number/1000).toString() + 'Rb';
  }else{
    return number.toString();
  }
}

const PendapanKelas = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    kelas: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/realtime/pendapatan_kelas?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          kelas: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  var new_data = []
  try {
    // data.tren.sort(GetSortOrder("value"))
    data.kelas.map((row) => 
      new_data.push({
        name: row.name,
        value: row.value,
        trend: row.trend,
        pred: row.predict,
      }))
  }
  catch(err) {
    
  }
  // console.log(new_data)

  return (
    <div className="PendapanKelas">
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 5, right: 10, left: -10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={10} />
          <YAxis tickFormatter={DataFormater} fontSize={15} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)} />
          <Bar dataKey="value" name='Jumlah' fill="#94b9f8" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PendapanKelas
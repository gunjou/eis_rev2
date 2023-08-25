import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";
import { BASE_URL } from "../../../App";
import { REALTIME_PORT } from "../../../pages/LiveReports";


// remove later
const data_tmp = [
  { name: "Rawat Inap", value: 22900000 },
  { name: "Rawat Jalan", value: 15260000 },
  { name: "IGD", value: 19550000 },
  { name: "Laboratorium", value: 8200000 },
  { name: "Bedah", value: 6690000 },
  { name: "Radiologi", value: 4100000 },
  { name: "Farmasi", value: 17900000 },
  { name: "Rehabilitasi", value: 11890000 },
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

const PendapatanInstalasi = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    instalasi: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(BASE_URL + `:` + REALTIME_PORT + `/realtime/pendapatan_instalasi?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          instalasi: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  var new_data = []
  try {
    // data.tren.sort(GetSortOrder("value"))
    data.instalasi.map((row) => 
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
    <div className="PendapatanInstalasi">
      <ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 5, right: 10, left: -10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={11} />
          <YAxis  tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)} />
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PendapatanInstalasi
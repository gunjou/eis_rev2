import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";
import { BASE_URL } from "../../../App";
import { REALTIME_PORT } from "../../../pages/LiveReports";


// remove later
const data_tmp = [
  { name: "Obat-obatan", value: 0 },
  { name: "Gas Medis", value: 0 },
  { name: "Radiologi", value: 0 },
  { name: "Laboratorium", value: 0 },
  { name: "Injeksi", value: 0 },
  { name: "Lainnya", value: 0 },
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

const PendapanJenisProduk = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    produk: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(BASE_URL + `:` + REALTIME_PORT + `/realtime/pendapatan_jenis_produk?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          produk: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  var new_data = []
  try {
    // data.tren.sort(GetSortOrder("value"))
    data.produk.map((row) => 
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
    <div className="PendapanJenisProduk">
			<ResponsiveContainer width="99%" height={270}>
			  <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data_tmp}
          margin={{top: 10, right: 10, bottom: 10, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" tickFormatter={DataFormater}/>
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#b494ff" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PendapanJenisProduk
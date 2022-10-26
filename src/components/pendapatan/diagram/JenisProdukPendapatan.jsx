import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { expandDate } from '../../CommonTools';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp = [
  { name: "Obat-obatan", value: 0, trend: 0, pred: 0, },
  { name: "Gas Medis", value: 0, trend: 0, pred: 0, },
  { name: "Radiologi", value: 0, trend: 0, pred: 0, },
  { name: "Laboratorium", value: 0, trend: 0, pred: 0, },
  { name: "Injeksi", value: 0, trend: 0, pred: 0, },
  { name: "Lainnya", value: 0, trend: 0, pred: 0, },
];

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, label)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${formatter.format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const JenisProdukPendapatan = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    produk: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pendapatan/pendapatan_produk?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
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
    <div className='JenisProdukPendapatan'>
      <div className="title flex">
        <p className='pb-2'>Pendapatan Berdasarkan Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
      </sup>
			<ResponsiveContainer width="99%" height={280}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data_tmp}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" tickFormatter={DataFormater}/>
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default JenisProdukPendapatan
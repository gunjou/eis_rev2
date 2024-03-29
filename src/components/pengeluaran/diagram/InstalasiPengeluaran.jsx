import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { expandDate } from '../../CommonTools';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const data_tmp = [
  { name: "Rawat Inap", value: 2900000, trend: 0.1, pred: 16.4, },
  { name: "IGD", value: 3000000, trend: -6, pred: 16.5, },
  { name: "Rawat Jalan", value: 2770000, trend: 12.5, pred: 5, },
  { name: "Radiologi", value: 1900000, trend: 11, pred: 5.2, },
  { name: "Laboratorium", value: 2200000, trend: 7, pred: -5.9, },
  { name: "Bedah", value: 2000000, trend: 8, pred: 17.3, },
  { name: "Rehabilitasi", value: 1700000, trend: 7.3, pred: 2.9, },
  { name: "Farmasi", value: 2300000, trend: 4.8 , pred: -0.6, },
];

var formatter = new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR",
});

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

const InstalasiPengeluaran = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    instalasi: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pengeluaran/pengeluaran_instalasi?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
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
    <div className='InstalasiPengeluaran'>
      <div className="title flex">
        <p className='pb-2'>Pengeluaran Berdasarkan Instalasi</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-5.9)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-3.7)}
      </sup>
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          {/* <YAxis fontSize={9} /> */}
          <Tooltip content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default InstalasiPengeluaran
import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const data_tmp = [
  { name: "Tunai", value: 3200000, trend: -4.7, pred: 6.3 },
  { name: "Kartu Kredit", value: 2500000, trend: 5.5, pred: 1.4 },
  { name: "Transfer Bank", value: 1300000, trend: 2.7, pred: 7.8 },
  { name: "Penjamin", value: 500000, trend: 1.6, pred: 5.2 },
  { name: "Piutang", value: 300000, trend: 11.9, pred: 6.6 },
  { name: "Donasi", value: 1900000, trend: -2.9, pred: 9.1 },
  { name: "Mix", value: 1800000, trend: 3.6, pred: -0.2 },
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

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});
  
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${formatter.format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};
  
const CaraBayar = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    cara_bayar: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pengeluaran/pengeluaran_cara_bayar?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          cara_bayar: data2.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data2.cara_bayar)
  try {
    data2.cara_bayar.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }

  return (
    <div className='CaraBayar'>
      <div className="title flex">
        <p className='pb-2'>Pengeluaran Berdasarkan Cara bayar</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(-11.0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-9.6)}
      </sup>
			<ResponsiveContainer width="99%" height={270}>
        <PieChart width={100} height={210}>
        <Pie
          data={data2.cara_bayar}
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
        <Tooltip content={<CustomTooltip />} /> 
        {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
		</div>
  )
}

export default CaraBayar
import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expandDate, GetSortOrder } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

const data_tmp = [
  { name: "Semeru Perkasa Permai Pt.", value: 20319, trend: 5.5, pred: 4.3 },
  { name: "Berkembang Selaras Daya. Pt", value: 27473, trend: 3.3, pred: -0.7 },
  { name: "Sinergi Tridaya Medical. Pt", value: 19400, trend: 2.2, pred: 15.7 },
  { name: "Axion", value: 23255, trend: 13.2, pred: 13.5 },
  { name: "Bard", value: 15175, trend: 5.7, pred: 14.8 },
  { name: "Flexicare", value: 21465, trend: 2.2, pred: 7.4 },
  { name: "Innoq", value: 26043, trend: -14.5, pred: 15.2 },
  { name: "Wikaton", value: 26657, trend: -5.3, pred: -5.2 },
  { name: "Rioca Medica Pt.", value:  2192, trend: 11.3, pred: -9.26},
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Supplier = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    supplier: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/inventory/stok_supplier?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          supplier: data2.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  // console.log(data2.supplier)
  try {
    data2.supplier.sort(GetSortOrder("value"))
  }
  catch(err) {
    
  }

  return (
    <div className='Supplier'>
      <div className="title flex">
        <p className='pb-2'>Stok Berdasarkan Supplier</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(7.5)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-5.4)}
      </sup>
			<ResponsiveContainer width="99%" height={250}>
        <PieChart width={100} height={210}>
        <Pie
          data={data2.supplier}
          // cx={150}
          cy={85}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          stroke="#94b8a3"
          paddingAngle={2}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {COLORS.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          // layout="vertical"
          // verticalAlign="middle"
          // align="right"
          iconType="circle"
          wrapperStyle={{fontSize: "12px"}}
          />
      </PieChart>
     </ResponsiveContainer>
		</div>
  )
}

export default Supplier
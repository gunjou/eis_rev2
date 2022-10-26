import { Tooltip as Tlp } from '@mui/material';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


const data_tmp = [
  { name: "Tidak Bekerja", value: 0, trend: 0, pred: 0, },
  { name: "Pelajar/ Mahasiswa", value: 0, trend: 0, pred: 0, },
  { name: "Pensiunan", value: 0, trend: 0, pred: 0, },
  { name: "PNS", value: 0, trend: 0, pred: 0, },
  { name: "TNI", value: 0, trend: 0, pred: 0, },
  { name: "POLRI", value: 0, trend: 0, pred: 0, },
  { name: "Pedagang", value: 0, trend: 0, pred: 0, },
  { name: "Petani", value: 0, trend: 0, pred: 0, },
  { name: "Peternak", value: 0, trend: 0, pred: 0, },
  { name: "Karyawan", value: 0, trend: 0, pred: 0, },
  { name: "Buruh", value: 0, trend: 0, pred: 0, },
  { name: "Wiraswasta", value: 0, trend: 0, pred: 0, },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        {TlpTittle(payload[0].payload.trend, label)}
        {TlpPredict(payload[0].payload.pred)}
        <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function expandDate(date) {
  var date = new Date(date);
  var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  var extractDate = `${year}-${month+1}-${day}`;

  return extractDate;
};

const Perkerjaan = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    pekerjaan: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pelayanan/pekerjaan?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          pekerjaan: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  return (
    <div className="Perkerjaan">
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Perkerjaan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
      </sup>
      <ResponsiveContainer width="99%" height={300}>
			  <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data_tmp}
          margin={{top: 0, right: 10, bottom: 0, left: 6, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' barSize={12} radius={[0, 6, 6, 0]} fill="#ffba94" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Perkerjaan
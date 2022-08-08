import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";


const data = [
  { name: "UMUM", value: 2290, trend: -2.9, pred: 7, },
  { name: "JKN", value: 1955, trend: 6.4, pred: 8.9, },
  { name: "BPJS", value: 1526, trend: 5.1, pred: -1.1, },
  { name: "PERUSAHAAN", value: 410, trend: 7.9, pred: 4.4, },
  { name: "JAMKESDA", value: 820, trend: 12, pred: 9.2, },
  { name: "JAMKESMAS", value: 1189, trend: 9.8, pred: 5.8, },
  { name: "JASA RAHARJA", value: 669, trend: -3.7, pred: -2.4, },
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

const KelompokPasien = () => {
  return (
    <div className="KelompokPasien">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Berdasarkan Kelompok Pasien</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          {GetTrend(10.4)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(4.7)}
      </sup>
      <ResponsiveContainer width="99%" height={240}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} content={<CustomTooltip />} />
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KelompokPasien;

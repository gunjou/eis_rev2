import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';

const data = [
  { name: "Kelas III", value: 12100000, trend: 17.2, pred: -9.2 },
  { name: "Kelas II", value: 8200000, trend: 2.9, pred: 17.9 },
  { name: "Kelas I", value: 2700000, trend: 19.6, pred: 10.9 },
  { name: "VIP Madya", value: 4300000, trend: 30, pred: 19.6 },
  { name: "VIP Utama", value: 12100000, trend: 14.7, pred: 22.2 },
  { name: "VIP Super", value: 9300000, trend: -15.5, pred: 6.4 },
  { name: "Intensif", value: 15000000, trend: 17.2, pred: 18.4 },
  { name: "VIP Standar", value: 12800000, trend: 26.6, pred: -6.4 },
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

const KelasPendapatan = () => {
  return (
    <div className='KelasPendapatan'>
      <div className="title flex">
        <p className='pb-2'>Pendapatan Berdasarkan Kelas Perawatan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(10.1)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(7.8)}
      </sup>
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={11} />
          {/* <YAxis fontSize={9} /> */}
          <Tooltip content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' fill="#b494ff" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KelasPendapatan
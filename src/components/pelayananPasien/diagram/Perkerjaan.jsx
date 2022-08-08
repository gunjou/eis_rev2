import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";

const data = [
  { name: "Tidak Bekerja", value: 81, trend: -3.1, pred: -11.5, },
  { name: "Pelajar/ Mahasiswa", value: 126, trend: 4.1, pred: 10.9, },
  { name: "Pensiunan", value: 105, trend: -10.7, pred: -12.8, },
  { name: "PNS", value: 84, trend: -7.6, pred: -20.1, },
  { name: "TNI", value: 76, trend: -13.5, pred: -11.4, },
  { name: "POLRI", value: 110, trend: -11.1, pred: -15.1, },
  { name: "Pedagang", value: 115, trend: -15.4, pred: -14.6, },
  { name: "Petani", value: 23, trend: -12.7, pred: -7.1, },
  { name: "Peternak", value: 93, trend: -14.6, pred: -9, },
  { name: "Karyawan", value: 63, trend: -8.8, pred:- 3.8, },
  { name: "Buruh", value: 119, trend: -12.8, pred: -14.3, },
  { name: "Wiraswasta", value: 188, trend: -8.7, pred:- 5.7, },
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

const Perkerjaan = () => {
  return (
    <div className="Perkerjaan">
      <div className="title flex">
        <p className='pb-2'>Pelayanan Berdasarkan Perkerjaan</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(1.9)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(-2.2)}
      </sup>
      <ResponsiveContainer width="99%" height={300}>
			  <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
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
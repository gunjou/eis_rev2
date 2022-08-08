import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { GetPredict, GetTrend, TlpTittle } from '../../GetIndicator';
  
const data = [
    { name: "< 5", laki_laki: 65, perempuan: 143, total: 208, trend: 3.5, pred: 6.7 },
    { name: "5-11", laki_laki: 57, perempuan: 64, total: 111, trend: 6.9, pred: 9.8 },
    { name: "12-16", laki_laki: 117, perempuan: 35, total: 142, trend: -1.9, pred: 6 },
    { name: "17-25", laki_laki: 60, perempuan: 137, total: 197, trend: 5.9, pred: 11.5 },
    { name: "26-35", laki_laki: 56, perempuan: 74, total: 130, trend: 7, pred: 10.9 },
    { name: "36-45", laki_laki: 119, perempuan: 154, total: 273, trend: 0.3, pred: -5.8 },
    { name: "46-55", laki_laki: 97, perempuan: 97, total: 194, trend: 4.4, pred: 3.7 },
    { name: "56-65", laki_laki: 166, perempuan: 79, total: 245, trend: 7.1, pred: -2.4 },
    { name: "65 >", laki_laki: 134, perempuan: 62, total: 196, trend: 9 , pred: 6.1 },
  ];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label pb-2">{`${label} Tahun : ${
          payload[0].value + payload[1].value
        }`}</p>
        <span className="intro text-xs flex">Trend: {TlpTittle(payload[0].payload.trend)}</span>
        <span className="intro text-xs flex">Predict: {TlpTittle(payload[0].payload.pred)}</span>
        <p className="intro text-black text-sm">{`Laki-laki : ${payload[0].value}`}</p>
        <p className="intro text-black text-sm">{`Perempuan : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const AgeGender = () => {
  return (
    <div className="AgeGender">
      <div className="title flex">
        <p className='pb-2'>Kunjungan Umur dan Jenis Kelamin</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(14.3)}
          </sup>
        </Tlp>
      <p className="flex text-xs pl-5 cursor-default">
        Predict : {GetPredict(5.7)}
      </p>
      </div>
      <ResponsiveContainer width="99%" height={100}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="laki_laki" stackId="a" fill="#3AB0FF" barSize={20} radius={[9, 9, 0, 0]} />
          <Bar dataKey="perempuan" fill="#F57CAC" barSize={20} radius={[9, 9, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AgeGender
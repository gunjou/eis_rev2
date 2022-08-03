import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

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

const data = [
  { month: 'Jan', pengajuan: 19000000, realisasi: 16000000, },
  { month: 'Feb', pengajuan: 41000000, realisasi: 36000000, },
  { month: 'Mar', pengajuan: 34000000, realisasi: 32000000, },
  { month: 'Mei', pengajuan: 49000000, realisasi: 34000000, },
  { month: 'Jun', pengajuan: 22000000, realisasi: 20000000, },
  { month: 'Jul', pengajuan: 30000000, realisasi: 29000000, },
  { month: 'Jul', pengajuan: 26000000, realisasi: 17000000, },
  // { month: 'Agu', pengajuan: 35000000, realisasi: 28000000, },
];

var formatter = new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR",
});

function GetSymbol(value) {
  if (value > 0) {
    return ("↗"+Math.abs(value));
  } else if (value < 0) {
    return ("↘"+Math.abs(value));
  } else {
    return ("⇋"+Math.abs(value));
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label">{`${label} ${GetSymbol(payload[0].payload.trend)}%`}</p>
        <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
        <p className="intro text-sm">{`Jumlah : ${formatter.format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const KlaimAsuransi = () => {
  return (
    <div className='KlaimAsuransi'>
      <div className="title flex">
        <p className='pb-2'>Pengeluaran Berdasarkan Rekanan (Klaim Asuransi)</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropdown className="text=lg" />
            16.5%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <HiOutlineChevronDoubleDown /> 15.4%
      </sup>
			<ResponsiveContainer width="99%" height={250}>
      <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -15,
            bottom: 0,
          }}
					className="text-xs"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="pengajuan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="realisasi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip wrapperStyle={{fontSize: "14px"}} formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Area type="monotone" name='Pengajuan' dataKey="pengajuan" stroke="#ffc658" fill="url(#pengajuan)" />
          <Area type="monotone" name='Realisasi' dataKey="realisasi" stroke="#82ca9d" fill="url(#realisasi)" />
        </AreaChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KlaimAsuransi
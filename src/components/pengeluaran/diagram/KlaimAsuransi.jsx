import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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


const KlaimAsuransi = () => {
  return (
    <div className='KlaimAsuransi'>
			<ResponsiveContainer width="99%" height={270}>
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
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Area type="monotone" name='Pengajuan' dataKey="pengajuan" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" name='Realisasi' dataKey="realisasi" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KlaimAsuransi
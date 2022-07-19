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
  { month: 'Jan', pengajuan: 1799294200, realisasi: 1783149500, },
  { month: 'Feb', pengajuan: 1457302300, realisasi: 1419005800, },
  { month: 'Mar', pengajuan: 3133346000, realisasi: 1531992400, },
  { month: 'Mei', pengajuan: 1557302300, realisasi: 1319005800, },
  { month: 'Jun', pengajuan: 1471302300, realisasi: 1400005800, },
  { month: 'Jul', pengajuan: 1457302300, realisasi: 1419005800, },
];

const BPJSTrend = () => {
  return (
    <div className='BPJSTrend'>
			<ResponsiveContainer width="99%" height={235}>
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

export default BPJSTrend
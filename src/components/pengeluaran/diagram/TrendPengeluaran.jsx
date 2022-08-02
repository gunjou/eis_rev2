import { CartesianGrid, Area, Line, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

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
	{ month: 'Jan', total: 40000000, past: 33000000, predict: 44102882, },
	{ month: 'Feb', total: 28000000, past: 32000000, predict: 24146509, },
	{ month: 'Mar', total: 31000000, past: 34000000, predict: 30171764, },
	{ month: 'Apr', total: 21000000, past: 25000000, predict: 24101230, },
	{ month: 'Mei', total: 35000000, past: 30000000, predict: 30111801, },
	{ month: 'Jun', total: 20000000, past: 22000000, predict: 18176029, },
	{ month: 'Jul', total: 32000000, past: 20000000, predict: 30162412, },
	{ month: 'Agu', total: null, past: 30819624, predict: 41119624, },
	// { month: 'Sep', total: 64491394, past: 48491394, predict: 69191394, },
	// { month: 'Okt', total: 63092388, past: 50092388, predict: 69492388, },
	// { month: 'Nov', total: 76606814, past: 69606814, predict: 76406814, },
	// { month: 'Des', total: 77912981, past: 71912981, predict: 77412981, },
];

const TrendPengeluaran = () => {
  return (
    <div className='TrendPengeluaran'>
      <ResponsiveContainer width="99%" height={270}>
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffba94" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#ffba94" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b494ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#b494ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Legend />
          <Area type="monotone" dataKey="total" name='Total' stroke="#b494ff" activeDot={{ r: 5 }} fill="url(#colorNow)" />
          <Area type="monotone" dataKey="past" name='Tahun Lalu' stroke="#ffba94" activeDot={{ r: 5 }} fill="url(#colorPast)" />
          <Line type="monotone" dataKey="predict" name='Predict' stroke="#55caaf" activeDot={{ r: 5 }}  />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendPengeluaran
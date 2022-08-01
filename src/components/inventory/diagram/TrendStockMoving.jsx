import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
	{ month: 'Jan', fast: 14202882, slow: 16202882, },
	{ month: 'Feb', fast: 20146509, slow: 26146509, },
	{ month: 'Mar', fast: 35771764, slow: 20771764, },
	{ month: 'Apr', fast: 39601230, slow: 35601230, },
	{ month: 'Mei', fast: 59311801, slow: 40311801, },
	{ month: 'Jun', fast: 74876029, slow: 61876029, },
	{ month: 'Jul', fast: 68862412, slow: 48862412, },
	// { month: 'Agu', fast: null, slow: 50819624, },
	// { month: 'Sep', fast: 64491394, slow: 48491394, },
	// { month: 'Okt', fast: 63092388, slow: 50092388, },
	// { month: 'Nov', fast: 76606814, slow: 69606814, },
	// { month: 'Des', fast: 77912981, slow: 71912981, },
];

const TrendStockMoving = () => {
  return (
    <div className='TrendStockMoving'>
			<ResponsiveContainer width="99%" height={270}>
			<BarChart
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
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />
          <Legend />
          <Bar dataKey="slow" name='Slow Moving' fill="#55caaf" radius={[7, 7, 0, 0]} barSize={25} />
          <Bar dataKey="fast" name='Fast Moving' fill="#ffba94" radius={[7, 7, 0, 0]} barSize={25} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default TrendStockMoving
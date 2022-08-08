import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GetPredict, GetTrend, TlpTittle } from '../../GetIndicator';

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
	{ month: 'Jan', fast: 14202882, slow: 16202882, trend1: 3.9, pred1: -8.2, trend2: 1.5, pred2: 2.1, },
	{ month: 'Feb', fast: 20146509, slow: 26146509, trend1: 7, pred1: 16.5, trend2: -8.7, pred2: 14.2, },
	{ month: 'Mar', fast: 35771764, slow: 20771764, trend1: -0.7, pred1: 4.6, trend2: -7.5, pred2: 0.6, },
	{ month: 'Apr', fast: 39601230, slow: 35601230, trend1: -2.7, pred1: -3.4, trend2: -2.4, pred2: -0.3, },
	{ month: 'Mei', fast: 59311801, slow: 40311801, trend1: -4.5, pred1: 18.4, trend2: 12.5, pred2: -6.3, },
	{ month: 'Jun', fast: 74876029, slow: 61876029, trend1: 4.1, pred1: 15.6, trend2: 2.3, pred2: 7.3, },
	{ month: 'Jul', fast: 68862412, slow: 48862412, trend1: 5.3, pred1: 8.3, trend2: 4.7, pred2: 5.7, },
	// { month: 'Agu', fast: null, slow: 50819624, },
	// { month: 'Sep', fast: 64491394, slow: 48491394, },
	// { month: 'Okt', fast: 63092388, slow: 50092388, },
	// { month: 'Nov', fast: 76606814, slow: 69606814, },
	// { month: 'Des', fast: 77912981, slow: 71912981, },
];

var formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label">{`${label}`}</p>
        <p className="intro text-[#55caaf] text-sm">{`${payload[0].name} : ${formatter.format(payload[0].value)}`}</p>
        <p className="intro pb-2 text-xs flex">Trend : {TlpTittle(payload[0].payload.trend1)}
          &nbsp;&nbsp;Predict : {TlpTittle(payload[0].payload.pred1)}</p>
        <p className="intro text-[#ffba94] text-sm">{`${payload[1].name} : ${formatter.format(payload[1].value)}`}</p>
        <p className="intro pb-2 text-xs flex">Trend : {TlpTittle(payload[0].payload.trend2)}
          &nbsp;&nbsp;Predict : {TlpTittle(payload[0].payload.pred2)}</p>
      </div>
    );
  }
  return null;
};

const TrendStockMoving = () => {
  return (
    <div className='TrendStockMoving'>
      <div className="title flex">
        <p className='pb-2'>Tren Stock Moving</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(10.0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(12.0)}
      </sup>
			<ResponsiveContainer width="99%" height={270}>
			<BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip content={<CustomTooltip />} /> 
        {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Legend />
          <Bar dataKey="slow" name='Slow Moving' fill="#55caaf" radius={[7, 7, 0, 0]} barSize={25} />
          <Bar dataKey="fast" name='Fast Moving' fill="#ffba94" radius={[7, 7, 0, 0]} barSize={25} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default TrendStockMoving
import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";

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
  { name: "Obat-obatan", value: 2290000, trend: 20.2, pred: 22.4, },
  { name: "Gas Medis", value: 1955000, trend: 16.4, pred: 12.5, },
  { name: "Radiologi", value: 1526000, trend: 18.3, pred: -0.2, },
  { name: "Laboratorium", value: 410000, trend: 18, pred: -5.1, },
  { name: "Injeksi", value: 820000, trend: 11.2, pred: 24, },
  { name: "Lainnya", value: 669000, trend: 22.2, pred: 5.3, },
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

const JenisProdukPendapatan = () => {
  return (
    <div className='JenisProdukPendapatan'>
      <div className="title flex">
        <p className='pb-2'>Pendapatan Berdasarkan Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(12.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(15.1)}
      </sup>
			<ResponsiveContainer width="99%" height={280}>
			<BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{top: 0, right: 10, bottom: 0, left: 10, }}
          className='text-[10px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" tickFormatter={DataFormater}/>
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default JenisProdukPendapatan
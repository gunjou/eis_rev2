import { Tooltip as Tlp } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from "../../GetIndicator";

const data = [
  { name: "Obat-obatan", value: 0, trend: 0, pred: 0 },
  { name: "Gas Medis", value: 0, trend: 0, pred: 0 },
  { name: "Radiologi", value: 0, trend: 0, pred: 0 },
  { name: "Laboratorium", value: 0, trend: 0, pred: 0 },
  { name: "Injeksi", value: 0, trend: 0, pred: 0 },
  { name: "Lainnya", value: 0, trend: 0, pred: 0 },
];

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

const JenisProdukPengeluaran = () => {
  return (
    <div className='JenisProdukPengeluaran'>
      <div className="title flex">
        <p className='pb-2'>Pengeluaran Berdasarkan Jenis Produk</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
            {GetTrend(0)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0)}
      </sup>
			<ResponsiveContainer width="99%" height={260}>
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
          <Tooltip content={<CustomTooltip />} /> 
          {/*  formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)+",00"} />*/}
          <Bar dataKey="value" name='Jumlah' barSize={20} radius={[0, 6, 6, 0]} fill="#6e9ffe" />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default JenisProdukPengeluaran
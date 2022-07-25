import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
	{ name: 'Bedah', khusus: 13, besar: 38, sedang: 48, kecil: 0, total: 99 },
	{ name: 'Obstetrik dan Ginekologi ', khusus: 22, besar: 39, sedang: 19, kecil: 0, total: 80 },
	{ name: 'Bedah Saraf', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'THT', khusus: 0, besar: 1, sedang: 18, kecil: 0, total: 19 },
	{ name: 'Mata', khusus: 0, besar: 12, sedang: 1, kecil: 0, total: 13 },
	{ name: 'Kulit & Kelamin', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Gigi & Mulut', khusus: 1, besar: 14, sedang: 0, kecil: 0, total: 15 },
	{ name: 'Bedah Anak', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Kardiovaskuler', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Bedah Orthopedi', khusus: 18, besar: 9, sedang: 32, kecil: 0, total: 59 },
	{ name: 'Thorak', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Digestive ', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Urologi', khusus: 0, besar: 0, sedang: 0, kecil: 0, total: 0 },
	{ name: 'Lain-lain ', khusus: 0, besar: 5, sedang: 0, kecil: 0, total: 5 },
];

const CustomTooltip = ({ active, payload, label }) => {
	const total = payload.reduce((result, entry) => result + entry.value, 0);
	if (active && payload && payload.length) {
		return (
		<div className="custom-tooltip text-left bg-gray-100/90 border p-3">
				<p className="label pb-2 text-sm font-bold">{`${label} : ${total}`}</p>
				<p className="text-sm text-[#f54531]">{`Besar : ${payload[3].value}`}</p>
				<p className="text-sm text-[#ff7021]">{`Sedang : ${payload[2].value}`}</p>
				<p className="text-sm text-[#ffbe5c]">{`Kecil : ${payload[1].value}`}</p>
				<p className="text-sm text-[#6e9ffe]">{`Khusus : ${payload[0].value}`}</p>
		</div>
		);
}
	
	return null;
	};
	
const Surgery = () => {
  return (
    <div className='Surgery'>
			<ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 5,
          }}
					className="text-xs"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} fontWeight='bold' angle={-10} textAnchor='middle' />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{fontWeight: "bold"}} />
          <Bar dataKey="khusus" name='Khusus' stackId={'a'} fill="#6e9ffe" barSize={30} />
          <Bar dataKey="kecil" name='Kecil' stackId={'a'} fill="#ffbe5c" barSize={30} />
          <Bar dataKey="sedang" name='Sedang' stackId={'a'} fill="#FF7021" barSize={30} />
          <Bar dataKey="besar" name='Besar' stackId={'a'} fill="#f54531" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Surgery
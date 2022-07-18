import {
	Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis
} from "recharts";

const data = [
  { month: 'Jan', total: 577, diperiksa: 554, belum: 9, batal: 14, },
	{ month: 'Feb', total: 694, diperiksa: 666, belum: 11, batal: 17, },
	{ month: 'Mar', total: 546, diperiksa: 539, belum: 2, batal: 5, },
	{ month: 'Apr', total: 678, diperiksa: 639, belum: 21, batal: 18, },
	{ month: 'Mei', total: 625, diperiksa: 610, belum: 5, batal: 10, },
	{ month: 'Jun', total: 730, diperiksa: 720, belum: 5, batal: 5, },
	{ month: 'Jul', total: 596, diperiksa: 554, belum: 17, batal: 25, },
	// { month: 'Aug', total: 701, diperiksa: 680, belum: 11, batal: 10, },
	// { month: 'Sep', total: 676, diperiksa: 648, belum: 16, batal: 12, },
	// { month: 'Okt', total: 800, diperiksa: 793, belum: 3, batal: 4, },
	// { month: 'Nov', total: 797, diperiksa: 763, belum: 19, batal: 15, },
	// { month: 'Des', total: 775, diperiksa: 755, belum: 9, batal: 11, },
];
const TrendOutpatient = () => {
  return (
    <div className='TrendOutpatient'>
      <ResponsiveContainer width="99%" height={280}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 15, left: 15, bottom: 3, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorNow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b494ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#b494ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" interval={0} />
          <Tooltip />
          <Legend />
					<Bar dataKey="total" name='Total Terdaftar' barSize={35} radius={[10, 10, 0, 0]} fill="#6e9ffe" />
          <Area type="monotone" dataKey="diperiksa" name="Sudah Diperiksa" stroke="#b494ff" fill="url(#colorNow)" />
          <Line dataKey="belum" name='Belum Diperiksa' type="monotone" stroke="#ff7300" />
          <Scatter dataKey="batal" name='Batal Registrasi' fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendOutpatient
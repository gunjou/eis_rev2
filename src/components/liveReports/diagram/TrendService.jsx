import {
	Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis
} from "recharts";


// remove later
const data_tmp = [
  { day: '01/06', total: 88, diperiksa: 81, belum: 2, batal: 5, },
	{ day: '02/06', total: 233, diperiksa: 194, belum: 21, batal: 18, },
	{ day: '03/06', total: 128, diperiksa: 113, belum: 5, batal: 10, },
	{ day: '04/06', total: 150, diperiksa: 148, belum: 5, batal: 5, },
	{ day: '05/06', total: 190, diperiksa: 148, belum: 17, batal: 25, },
	{ day: '06/06', total: 187, diperiksa: 159, belum: 11, batal: 17, },
  { day: '07/06', total: 101, diperiksa: 78, belum: 9, batal: 14, },
	// { day: '08/08', total: 701, diperiksa: 680, belum: 11, batal: 10, },
	// { day: '09/08', total: 676, diperiksa: 648, belum: 16, batal: 12, },
	// { day: '10/08', total: 800, diperiksa: 793, belum: 3, batal: 4, },
	// { day: '11/08', total: 797, diperiksa: 763, belum: 19, batal: 15, },
	// { day: '12/08', total: 775, diperiksa: 755, belum: 9, batal: 11, },
];

const TrendService = () => {
  return (
    <div className="TrendService">
			<ResponsiveContainer width="99%" height={280}>
        <ComposedChart
          width={500}
          height={400}
          data={data_tmp}
          margin={{ top: 10, right: 15, left: 15, bottom: 3, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorNow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b494ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#b494ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" interval={0} />
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

export default TrendService
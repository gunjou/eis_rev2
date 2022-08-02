import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
  { name: "Check In", value: 221 },
  { name: "Absen", value: 10 },
  { name: "Istirahat", value: 15 },
  { name: "Cuti", value: 24 },
];

const PresensiPegawai = () => {
  return (
    <div className="PresensiPegawai">
			<ResponsiveContainer width="99%" height={270}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, left: -20, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" interval={0} fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip />
          <Bar dataKey="value" name='Jumlah' fill="#ffba94" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default PresensiPegawai
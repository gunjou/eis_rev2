import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { name: "< 20", laki_laki: 50, perempuan: 65, total: 115 },
  { name: "21-30", laki_laki: 160, perempuan: 140, total: 300 },
  { name: "31-40", laki_laki: 210, perempuan: 437, total: 657 },
  { name: "41-50", laki_laki: 20, perempuan: 15, total: 35 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label pb-2">{`${label} Tahun : ${
          payload[0].value + payload[1].value
        }`}</p>
        <p className="intro text-black text-sm">{`Laki-laki : ${payload[0].value}`}</p>
        <p className="intro text-black text-sm">{`Perempuan : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const AgeGender = () => {
  return <div className="AgeGender">
		<ResponsiveContainer width="99%" height={100}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="laki_laki" stackId="a" fill="#3AB0FF" barSize={30} radius={[9, 9, 0, 0]} />
          <Bar dataKey="perempuan" fill="#F57CAC" barSize={30} radius={[9, 9, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
	</div>;
};

export default AgeGender;

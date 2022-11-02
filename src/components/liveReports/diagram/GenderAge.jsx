import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { expandDate, GetSortAge } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";


// remove later
const data_tmp = [
  { name: "< 5", laki_laki: 65, perempuan: 143, total: 208 },
  { name: "5-11", laki_laki: 57, perempuan: 64, total: 111 },
  { name: "12-16", laki_laki: 117, perempuan: 35, total: 142 },
  { name: "17-25", laki_laki: 60, perempuan: 137, total: 197 },
  { name: "26-35", laki_laki: 56, perempuan: 74, total: 130 },
  { name: "36-45", laki_laki: 119, perempuan: 154, total: 273 },
  { name: "46-55", laki_laki: 97, perempuan: 97, total: 194 },
  { name: "56-65", laki_laki: 166, perempuan: 79, total: 245 },
  { name: "65 >", laki_laki: 134, perempuan: 62, total: 196 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-gray-100 border p-3">
        <p className="label pb-2">{`${label} Tahun : ${payload[0].value + payload[1].value}`}</p>
        <p className="intro text-black text-sm">{`Laki-laki : ${payload[0].value}`}</p>
        <p className="intro text-black text-sm">{`Perempuan : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const GenderAge = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    value: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/realtime/pasien_usia_gender?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          value: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);

  try {
    // data.value.sort(GetSortOrder("name")).reverse();
    var new_data = GetSortAge(data.value);
  }
  catch(err) {
    
  }
  // const new_data = data.value;

  return (
    <div className="GenderAge">
			<ResponsiveContainer width="99%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={new_data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="laki_laki" stackId="a" fill="#3AB0FF" barSize={20} radius={[9, 9, 0, 0]} />
          <Bar dataKey="perempuan" fill="#F57CAC" barSize={20} radius={[9, 9, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default GenderAge
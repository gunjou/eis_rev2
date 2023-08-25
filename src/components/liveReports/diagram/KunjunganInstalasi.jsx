import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";
import { REALTIME_PORT } from '../../../pages/LiveReports';
import { BASE_URL } from '../../../App';


// remove later
const data_tmp = [
  { name: 'Rawat Inap', service: 30, notService: 9, },
  { name: 'IGD', service: 40, notService: 3, },
  { name: 'Rawat Jalan', service: 45, notService: 6, },
  { name: 'Radiologi', service: 40, notService: 7, },
  { name: 'Laboratorium', service: 25, notService: 9, },
  { name: 'Rehabilitasi', service: 36, notService: 14, },
  { name: 'Bedah', service: 38, notService: 5, },
  { name: 'Farmasi', service: 32, notService: 8, },
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip bg-gray-100 border p-3">
				<p className="label pb-2 text-sm font-semibold">{`${label}`}</p>
				<p className="intro text-[#55caaf] text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
				<p className="intro text-[#aaca55]  text-sm">{`${payload[1].name} : ${payload[1].value + payload[0].value}`}</p>
			</div>
		);
	}
	return null;
};

function CustomBarLabel(props) {
  const { x, y, width, value } = props;
  return <text x={x + width -15} y={y} fill="#000" textAnchor="middle" dy={11}>{`${value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

const KunjunganInstalasi = () => {
  const [data, setdata] = useState({
    judul: "",
    label: "",
    instalasi: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(BASE_URL + `:` + REALTIME_PORT + `/realtime/pelayanan_instalasi?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`, {mode:'cors'}).then((res) =>
      res.json().then((data) => {
        setdata({
          judul: data.judul,
          label: data.label,
          instalasi: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  const new_data = data.instalasi
  
  return (
    <div className="KunjunganInstalasi">
			<ResponsiveContainer width="99%" height={270}>
			  <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={new_data}
          margin={{top: 10, right: 10, bottom: 0, left: 20, }}
          className='text-[12px]'
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" interval={0} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign='top' />
          <Bar dataKey="value" name='Terlayani' stackId="a" barSize={15} radius={[0, 0, 0, 0]} fill="#55caaf" label={<CustomBarLabel />} />
          <Bar dataKey="value" name='Kunjungan' stackId="a" barSize={15} radius={[0, 6, 6, 0]} fill="#aaca55" label={<CustomBarLabel />} />
        </BarChart>
      </ResponsiveContainer>
		</div>
  )
}

export default KunjunganInstalasi
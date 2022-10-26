import { Tooltip as Tlp } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { expandDate } from "../../CommonTools";
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp = [
	{ name: 'Apoteker', total: 35, trend: 0.3, pred: 0.0, },
	{ name: 'BIDAN', total: 49, trend: 0.0, pred: 0.0, },
	{ name: 'DOKTER', total: 96, trend: 0.0, pred: 0.0, },
	{ name: 'PERAWAT', total: 121, trend: 0.0, pred: 0.0, },
	{ name: 'PELAKSANA', total: 84, trend: 0.0, pred: 0.0, },
	{ name: 'Ahli Gizi', total: 99, trend: 0.0, pred: 0.0, },
	{ name: 'Perekam Medis', total: 66, trend: 0.0, pred: 0.0, },
	{ name: 'Terapis', total: 83, trend: 0.0, pred: 0.0, },
	{ name: 'Laboratorium', total: 33, trend: 0.0, pred: 0.0, },
	{ name: 'Nutrisionis', total: 66, trend: 0.0, pred: 0.0, },
	{ name: 'Radiografer', total: 99, trend: 0.0, pred: 0.0, },
	{ name: 'Kasir', total: 59, trend: 0.0, pred: 0.0, },
	{ name: 'Administrasi', total: 54, trend: 0.0, pred: 0.0, },
	{ name: 'SIMRS', total: 27, trend: 0.0, pred: 0.0, },
];

function CustomBarLabel(props) {
  const { x, y, width, value } = props;
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip bg-gray-100 border p-3">
		  {TlpTittle(payload[0].payload.trend, label)}
		  {TlpPredict(payload[0].payload.pred)}
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
};
  
const CategoryPegawai = () => {
	const [data, setData] = useState({
	  judul: "",
	  label: "",
	  kategori: "",
	  trend: "",
	  predict: "",
	});
  
	useEffect(() => {
	  fetch(`http://192.168.1.174/kepegawaian/kategori_pegawai?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
		res.json().then((data) => {
		  setData({
			judul: data.judul,
			label: data.label,
			kategori: data.data,
			trend: null,
			predict: null,
		  });
		})
	  );
	}, []);
	// console.log(data2.kategori)

  return (
    <div className="CategoryPegawai">
			<div className="title flex">
        <p className='pb-2'>Kategori Pegawai</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
						{GetTrend(0.3)}
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : {GetPredict(0.0)}
      </sup>
			<ResponsiveContainer width="99%" height={230}>
				<BarChart
					width={500}
					height={300}
					data={data.kategori}
					margin={{ top: 0, right: 10, left: 10, bottom: 0, }}
					className='text-[10px]'
				>
					<XAxis dataKey="name" interval={0} />
					<Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
					<Bar dataKey="value" name='Total' barSize={30} fill="#6e9ffe" radius={[9, 9, 0, 0]} label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
  )
}

export default CategoryPegawai
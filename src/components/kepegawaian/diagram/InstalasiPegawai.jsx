import { Tooltip as Tlp } from '@mui/material';
import PropTypes from 'prop-types';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { GetPredict, GetTrend, TlpPredict, TlpTittle } from '../../GetIndicator';

const data = [
	{ name: 'Rawat Inap', total: 80, trend: 0.5, pred: 0.0 },
	{ name: 'IGD', total: 60, trend: 0.0, pred: 0.0 },
	{ name: 'Rawat Jalan', total: 64, trend: 0.0, pred: 0.0 },
	{ name: 'Radiologi', total: 83, trend: 0.0, pred: 0.0 },
	{ name: 'ICU', total: 32, trend: 0.5, pred: 0.0 },
	{ name: 'Bedah', total: 55, trend: 0.0, pred: 0.0 },
	{ name: 'Rehabilitasi', total: 88, trend: 0.0, pred: 0.0 },
	{ name: 'Anestesi', total: 55, trend: 0.0, pred: 0.0 },
	{ name: 'Ibu & Anak', total: 41, trend: 0.0, pred: 0.0 },
	{ name: 'Farmasi', total: 24, trend: 0.0, pred: 0.0 },
	{ name: 'Laboratorium', total: 59, trend: 0.5, pred: 0.0 },
	{ name: 'Gizi', total: 38, trend: 0.0, pred: 0.0 },
	{ name: 'SIMRS', total: 32, trend: 0.0, pred: 0.0 },
	{ name: 'Tata Usaha', total: 41, trend: 0.0, pred: 0.0 },
	{ name: 'HRD', total: 97, trend: 0.0, pred: 0.0 },
	{ name: 'Keperawatan', total: 78, trend: 0.0, pred: 0.0 },
	{ name: 'Apotek', total: 53, trend: 0.0, pred: 0.0 },
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
		  {TlpTittle(payload[0].payload.trend, payload[0].payload.name)}
		  {TlpPredict(payload[0].payload.pred)}
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
  };
  
const InstalasiPegawai = () => {
  return (
    <div className="InstalasiPegawai">
			<div className="title flex">
        <p className='pb-2'>Pegawai Berdasarkan Instalasi</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
						{GetTrend(1.5)}
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
					data={data}
					margin={{ top: 0, right: 10, left: 10, bottom: 0, }}
					className='text-[10px]'
				>
					<XAxis dataKey="name" interval={0} />
					<Tooltip wrapperStyle={{fontSize: "15px"}} content={<CustomTooltip />} />
					<Bar dataKey="total" name='Total' barSize={30} fill="#38b497" radius={[9, 9, 0, 0]} label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
  )
}

export default InstalasiPegawai
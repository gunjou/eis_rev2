import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const data = [
	{ name: 'Rawat Inap', total: 80 },
	{ name: 'IGD', total: 60 },
	{ name: 'Rawat Jalan', total: 64 },
	{ name: 'Radiologi', total: 83 },
	{ name: 'ICU', total: 32 },
	{ name: 'Bedah', total: 55 },
	{ name: 'Rehabilitasi', total: 88 },
	{ name: 'Anestesi', total: 55 },
	{ name: 'Ibu & Anak', total: 41 },
	{ name: 'Farmasi', total: 24 },
	{ name: 'Laboratorium', total: 59 },
	{ name: 'Gizi', total: 38 },
	{ name: 'SIMRS', total: 32 },
	{ name: 'Tata Usaha', total: 41 },
	{ name: 'HRD', total: 97 },
	{ name: 'Keperawatan', total: 78 },
	{ name: 'Apotek', total: 53 },
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

const InstalasiPegawai = () => {
  return (
    <div className="InstalasiPegawai">
			<ResponsiveContainer width="99%" height={250}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{ top: 10, right: 10, left: 10, bottom: 5, }}
					className='text-[10px]'
				>
					<XAxis dataKey="name" interval={0} />
					<Tooltip wrapperStyle={{fontSize: "15px"}} />
					<Bar dataKey="total" name='Total' barSize={30} fill="#38b497" radius={[9, 9, 0, 0]} label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
  )
}

export default InstalasiPegawai
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const data = [
	{ name: 'Apoteker', total: 35 },
	{ name: 'BIDAN', total: 49 },
	{ name: 'DOKTER', total: 96 },
	{ name: 'PERAWAT', total: 121 },
	{ name: 'PELAKSANA', total: 84 },
	{ name: 'Ahli Gizi', total: 99 },
	{ name: 'Perekam Medis', total: 66 },
	{ name: 'Terapis', total: 83 },
	{ name: 'Laboratorium', total: 33 },
	{ name: 'Nutrisionis', total: 66 },
	{ name: 'Radiografer', total: 99 },
	{ name: 'Kasir', total: 59 },
	{ name: 'Administrasi', total: 54 },
	{ name: 'SIMRS', total: 27 },
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

const CategoryPegawai = () => {
  return (
    <div className="CategoryPegawai">
			<ResponsiveContainer width="99%" height={250}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{ top: 5, right: 10, left: 10, bottom: 5, }}
					className='text-[10px]'
				>
					<XAxis dataKey="name" interval={0} />
					<Tooltip wrapperStyle={{fontSize: "15px"}} />
					<Bar dataKey="total" name='Total' barSize={30} fill="#6e9ffe" radius={[9, 9, 0, 0]} label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
  )
}

export default CategoryPegawai
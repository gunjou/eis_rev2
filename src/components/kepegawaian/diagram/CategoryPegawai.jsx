import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { Tooltip as Tlp } from '@mui/material';
import { IoMdArrowDropup } from 'react-icons/io';
import { CgArrowsExchange } from 'react-icons/cg';


const data = [
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

function GetSymbol(value) {
	if (value > 0) {
	  return ("↗"+Math.abs(value));
	} else if (value < 0) {
	  return ("↘"+Math.abs(value));
	} else {
	  return ("⇋"+Math.abs(value));
	}
  }
  
  const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip bg-gray-100 border p-3">
		  <p className="label">{`${label} ${GetSymbol(payload[0].payload.trend)}%`}</p>
		  <p className="intro pb-2 text-xs">{`Predict : ${GetSymbol(payload[0].payload.pred)}%`}</p>
		  <p className="intro text-sm">{`Jumlah : ${payload[0].value}`}</p>
		</div>
	  );
	}
	return null;
  };
  
const CategoryPegawai = () => {
  return (
    <div className="CategoryPegawai">
			<div className="title flex">
        <p className='pb-2'>Kategori Pegawai</p>
        <Tlp title="Trend" placement="right">
          <sup className="flex text-sm pt-1 cursor-default">
          <IoMdArrowDropup className="text=lg" />
            0.3%
          </sup>
        </Tlp>
      </div>
      <sup className="flex text-sm pl-2 cursor-default">
        Predict : <CgArrowsExchange /> 0%
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
					<Bar dataKey="total" name='Total' barSize={30} fill="#6e9ffe" radius={[9, 9, 0, 0]} label={<CustomBarLabel />}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
  )
}

export default CategoryPegawai
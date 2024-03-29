import { useEffect, useState } from "react";
import { Area, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { expandDate, shortMonth } from "../../CommonTools";
import { tgl_akhir, tgl_awal } from "../../NavbarContents";

// Remove later
const data_tmp = [
  { month: 'Jan', total: 14202882, past: 16202882, predict: 17702882, },
  { month: 'Feb', total: 20146509, past: 26146509, predict: 29246509, },
  { month: 'Mar', total: 35771764, past: 20771764, predict: 36771764, },
  { month: 'Apr', total: 39601230, past: 35601230, predict: 32901230, },
  { month: 'Mei', total: 59311801, past: 40311801, predict: 54311801, },
  { month: 'Jun', total: 74876029, past: 61876029, predict: 73476029, },
  { month: 'Jul', total: 68862412, past: 48862412, predict: 65162412, },
  { month: 'Agu', total: null, past: 50819624, predict: 56119624, },
  // { month: 'Sep', total: 64491394, past: 48491394, predict: 69191394, },
  // { month: 'Okt', total: 63092388, past: 50092388, predict: 69492388, },
  // { month: 'Nov', total: 76606814, past: 69606814, predict: 76406814, },
  // { month: 'Des', total: 77912981, past: 71912981, predict: 77412981, },
];

const DataFormater = (number) => {
  if(number > 1000000000){
    return (number/1000000000).toString() + 'M';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'Jt';
  }else if(number > 1000){
    return (number/1000).toString() + 'Rb';
  }else{
    return number.toString();
  }
}

const TrendPendapatan = () => {
  const [data, setData] = useState({
    judul: "",
    label: "",
    tren: "",
    trend: "",
    predict: "",
  });

  useEffect(() => {
    fetch(`http://192.168.1.174/pendapatan/tren_pendapatan?tgl_awal=${expandDate(tgl_awal)}&tgl_akhir=${expandDate(tgl_akhir)}`).then((res) =>
      res.json().then((data) => {
        setData({
          judul: data.judul,
          label: data.label,
          tren: data.data,
          trend: null,
          predict: null,
        });
      })
    );
  }, []);
  var new_data = []
  try {
    // data.tren.sort(GetSortOrder("value"))
    data.tren.map((row, idx) => 
      new_data.push({
        month: shortMonth[idx],
        total: row.tahun_ini, 
        past: row.tahun_sebelumnya, 
        predict: row.tahun_selanjutnya,
      }))
  }
  catch(err) {
    
  }
  // console.log(new_data)

  return (
    <div className='TrendPendapatan'>
      <ResponsiveContainer width="99%" height={270}>
        <ComposedChart
          width={500}
          height={300}
          data={new_data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffba94" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#ffba94" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b494ff" stopOpacity={0.9} />
              <stop offset="85%" stopColor="#b494ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip formatter={(value) => "Rp"+new Intl.NumberFormat('id').format(value)} />
          <Legend />
          <Area type="monotone" dataKey="total" name='Total' stroke="#b494ff" activeDot={{ r: 5 }} fill="url(#colorNow)" />
          <Area type="monotone" dataKey="past" name='Tahun Lalu' stroke="#ffba94" activeDot={{ r: 5 }} fill="url(#colorPast)" />
          <Line type="monotone" dataKey="predict" name='Predict' stroke="#55caaf" activeDot={{ r: 5 }}  />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendPendapatan
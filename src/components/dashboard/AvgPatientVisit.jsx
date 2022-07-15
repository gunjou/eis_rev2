import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { month: 'Jan', avg: 744, },
    { month: 'Feb', avg: 705, },
    { month: 'Mar', avg: 863, },
    { month: 'Apr', avg: 741, },
    { month: 'Mei', avg: 919, },
    { month: 'Jun', avg: 860, },
    { month: 'Jul', avg: 774, },
    // { month: 'Agu', avg: 774, },
    // { month: 'Sep', avg: 502, },
    // { month: 'Okt', avg: 793, },
  ];

const AvgPatientVisit = () => {
  return (
    <div className='AvgPatientVisit'>
      <ResponsiveContainer width="99%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="month" interval={0} fontSize={12} />
          {/* <YAxis fontSize={9} /> */}
          <Tooltip />
          <Bar dataKey="avg" name='Average' fill="#55caaf" radius={[9, 9, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AvgPatientVisit
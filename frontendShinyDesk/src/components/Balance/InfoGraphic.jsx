import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #ccc' }}>
          <p className="label" style={{ color: '#1C1A1A' }}>{`${label} : ${payload[0].value}`}</p>
          <p className="label" style={{ color: '#1C1A1A' }}>{`${label} : ${payload[1].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

function MyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar tus datos
    setData([
      {name: 'Lun', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Mar', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Mie', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Jue', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Vie', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Sab', uv: 3000, pv: 1398, amt: 2210},
      // ...
    ]);
  }, []);

  return (
    <BarChart
    margin={{
        top: 20, right: 0, left: 0, bottom: 0,
      }}
    width={800}
    height={300}
      data={data}
      barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis stroke='#fff' dataKey="name" />
      <YAxis stroke='#fff' />
      <Tooltip content={<CustomTooltip />}  />
      <Legend />
      <Bar dataKey="pv" fill="#fff"/>
      <Bar dataKey="uv" fill="#A40364CC" />
    </BarChart>
  );
}

export default MyChart;
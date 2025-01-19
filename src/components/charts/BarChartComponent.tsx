import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../../styles/BarChartComponent.scss';

interface Props {
  data: { name: string; value: number }[];
}

const BarChartComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="bar-chart-container">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;

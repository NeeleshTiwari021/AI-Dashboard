import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../../styles/LineChartComponent.scss';

interface Props {
  data: { date: string; average_time: number }[];
}

const LineChartComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="line-chart-container">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;

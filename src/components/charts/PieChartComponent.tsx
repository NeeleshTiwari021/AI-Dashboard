import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import "../../styles/PieChartComponent.scss";

interface PieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => (
  <div className="chart pie-chart pie-chart-container">
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={150}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default PieChartComponent;

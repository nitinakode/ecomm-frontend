import React from 'react';
import { SalesData } from '../Interfaces/SalesData';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


interface SalesChartProps {
  salesData: SalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={salesData}>
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;

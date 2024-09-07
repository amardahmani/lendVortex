import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip, PieLabelRenderProps } from 'recharts'
import { ChartPieIcon } from '@heroicons/react/24/outline'

interface LoanData {
  name: string;
  value: number;
}

const data: LoanData[] = [
  { name: 'Personal Loan', value: 400 },
  { name: 'Home Loan', value: 300 },
  { name: 'Auto Loan', value: 300 },
];

const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = (innerRadius as number) + ((outerRadius as number) - (innerRadius as number)) * 0.5;
  const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
  const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > (cx as number) ? 'start' : 'end'} 
      dominantBaseline="central"
    >
      {`${(percent as number * 100).toFixed(0)}%`}
    </text>
  );
};

const LoanDistributionChart: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <ChartPieIcon className="h-6 w-6 text-green-600" />
        <h3 className="text-xl font-semibold">Loan Distribution</h3>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }} 
              formatter={(value: number, name: string) => [`${value}`, name]}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              formatter={(value: string) => <span className="text-gray-600">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default LoanDistributionChart
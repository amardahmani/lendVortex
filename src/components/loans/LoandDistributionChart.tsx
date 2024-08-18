import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Personal Loan', value: 400 },
  { name: 'Home Loan', value: 300 },
  { name: 'Auto Loan', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const LoandDistributionChart = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Loan Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
  )
}

export default LoandDistributionChart
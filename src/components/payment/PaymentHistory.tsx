import { PresentationChartLineIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface PaymentData {
  name: string;
  payments: number;
}

const paymentHistory: PaymentData[] = [
  { name: 'Jan', payments: 2400 },
  { name: 'Feb', payments: 2210 },
  { name: 'Mar', payments: 2290 },
  { name: 'Apr', payments: 2000 },
  { name: 'May', payments: 2181 },
  { name: 'Jun', payments: 2500 },
  { name: 'Jul', payments: 2100 },
];

const PaymentHistory: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <PresentationChartLineIcon className="h-6 w-6 text-green-600" />
        <h3 className="text-xl font-semibold text-gray-800">Payment History</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={paymentHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
            formatter={(value: number) => [`$${value}`, 'Payment']}
            labelStyle={{ color: '#374151' }}
          />
          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="payments" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
            name="Monthly Payment"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PaymentHistory
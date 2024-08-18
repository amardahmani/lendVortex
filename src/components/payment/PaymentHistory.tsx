import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const paymentHistory = [
    { name: 'Jan', payments: 2400 },
    { name: 'Feb', payments: 2210 },
    { name: 'Mar', payments: 2290 },
    { name: 'Apr', payments: 2000 },
    { name: 'May', payments: 2181 },
    { name: 'Jun', payments: 2500 },
    { name: 'Jul', payments: 2100 },
  ];
const PaymentHistory = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Payment History</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={paymentHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="payments" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PaymentHistory
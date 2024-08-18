import React from 'react';

interface Loan {
  id: number;
  name: string;
  amount: number;
  status: string;
  interestRate: number;
}

interface LoanListTableProps {
  onViewStats: (loan: Loan) => void;
}

const LoanListTable: React.FC<LoanListTableProps> = ({ onViewStats }) => {
  // Example data
  const loans: Loan[] = [
    { id: 1, name: 'Personal Loan', amount: 5000, status: 'Active', interestRate: 5.5 },
    { id: 2, name: 'Mortgage', amount: 15000, status: 'Completed', interestRate: 3.8 },
    { id: 3, name: 'Auto Loan', amount: 8000, status: 'Pending', interestRate: 4.2 },
  ];

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Loan List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Interest Rate (%)</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="border p-2 text-center">{loan.id}</td>
              <td className="border p-2">{loan.name}</td>
              <td className="border p-2 text-right">${loan.amount.toLocaleString()}</td>
              <td className="border p-2">{loan.status}</td>
              <td className="border p-2 text-center">{loan.interestRate}%</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => onViewStats(loan)}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                >
                  View Stats
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanListTable;

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
    <div className="bg-white overflow-x-auto mt-10">
      <div className='hidden sm:block'>
      <table className="min-w-full border divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="border p-2 text-xs sm:text-sm">ID</th>
            <th className="border p-2 text-xs sm:text-sm">Name</th>
            <th className="border p-2 text-xs sm:text-sm">Amount</th>
            <th className="border p-2 text-xs sm:text-sm">Status</th>
            <th className="border p-2 text-xs sm:text-sm">Interest Rate (%)</th>
            <th className="border p-2 text-xs sm:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className='p-5'>
              <td className="border p-2 text-center text-xs sm:text-sm">{loan.id}</td>
              <td className="border p-2 text-xs sm:text-sm">{loan.name}</td>
              <td className="border p-2 text-right text-xs sm:text-sm">${loan.amount.toLocaleString()}</td>
              <td className="border p-2 text-xs sm:text-sm text-center">
                <p
                  className={`rounded-full px-2 py-1 text-white ${
                    loan.status === 'Completed' ? 'bg-green-500' :
                    loan.status === 'Pending' ? 'bg-yellow-500' :
                    loan.status === 'Active' ? 'bg-blue-500' :
                    loan.status === 'Refused' ? 'bg-red-500' :
                    ''
                  }`}
                >
                  {loan.status}
                </p>
              </td>
              <td className="border p-2 text-center text-xs sm:text-sm">{loan.interestRate}%</td>
              <td className="border p-2 text-center text-xs sm:text-sm">
                <button
                  onClick={() => onViewStats(loan)}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-xs sm:text-sm"
                >
                  View Stats
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="sm:hidden">
    {loans.map((loan) => (
      <div
        key={loan.id}
        className={`border p-4 rounded-lg shadow-md mb-4`}
      >
        <p className="text-black text-sm font-medium">Name: {loan.name}</p>
        <p className="text-black text-sm font-medium">Amount: ${loan.amount.toLocaleString()}</p>
        <p className="text-black text-sm font-medium">Status: {loan.status}</p>
        <p className="text-black text-sm font-medium">Interest Rate: {loan.interestRate}%</p>
        <button
          onClick={() => onViewStats(loan)}
          className="bg-green-400 hover:bg-green-600 text-white font-medium py-1 px-3 rounded text-sm mt-2"
        >
          View Stats
        </button>
      </div>
    ))}
  </div>
    </div>

  );
};

export default LoanListTable;

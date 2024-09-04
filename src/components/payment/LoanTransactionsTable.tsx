import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: 'debit' | 'credit';
  date: string;
  paymentChannel: string;
  category: string;
}

interface LoanTransactionsTableProps {
  transactions: Transaction[];
}

const getTransactionStatus = (date: Date): string => {
  // Implement your own logic to determine the transaction status
  const today = new Date();
  if (date > today) {
    return 'Upcoming';
  } else if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    return 'Today';
  } else {
    return 'Past';
  }
};

const formatAmount = (amount: number): string => {
  return Math.abs(amount).toFixed(2);
};

const formatDateTime = (date: Date): { dateTime: string } => {
  return {
    dateTime: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
  };
};

const removeSpecialCharacters = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const categoryColors: { [key: string]: string } = {
    Upcoming: 'bg-[#F0F9FF] text-[#175CD3]',
    Today: 'bg-[#FFFAEB] text-[#B54708]',
    Past: 'bg-[#F4F4F5] text-[#667085]',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
      {category}
    </span>
  );
};

const LoanTransactionsTable: React.FC<LoanTransactionsTableProps> = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label htmlFor="search" className="mr-2 text-sm font-medium text-[#344054]">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="rounded-md border border-[#D0D5DD] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#175CD3]"
            placeholder="Search transactions..."
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="items-per-page" className="mr-2 text-sm font-medium text-[#344054]">
            Items per page:
          </label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="rounded-md border border-[#D0D5DD] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#175CD3]"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#f9fafb]">
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054]">Transaction</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054]">Amount</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054]">Status</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054]">Date</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054] max-md:hidden">Channel</th>
              <th className="px-2 py-3 text-left text-sm font-medium text-[#344054] max-md:hidden">Category</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((t: Transaction) => {
              const status = getTransactionStatus(new Date(t.date));
              const amount = formatAmount(t.amount);
              const isDebit = t.type === 'debit';
              const isCredit = t.type === 'credit';
              return (
                <tr
                  key={t.id}
                  className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} hover:bg-none border-b border-[#EAECF0]`}
                >
                  <td className="max-w-[250px] px-2 py-3">
                    <div className="flex items-center gap-3">
                      <h1 className="text-sm truncate font-semibold text-[#344054]">
                        {removeSpecialCharacters(t.name)}
                      </h1>
                    </div>
                  </td>
                  <td
                    className={`px-2 py-3 font-semibold ${
                      isDebit || amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'
                    }`}
                  >
                    {isDebit ? `-${amount}` : isCredit ? amount : amount}
                  </td>
                  <td className="px-2 py-3">
                    <CategoryBadge category={status} />
                  </td>
                  <td className="min-w-32 px-2 py-3">
                    {formatDateTime(new Date(t.date)).dateTime}
                  </td>
                  <td className="px-2 py-3 capitalize min-w-24 max-md:hidden">
                    {t.paymentChannel}
                  </td>
                  <td className="px-2 py-3 max-md:hidden">
                    <CategoryBadge category={t.category} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-[#667085]">
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {filteredTransactions.length} transactions
        </div>
        <div className="flex items-center">
          <button
            className={`mr-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              currentPage > 1
                ? 'text-[#344054] hover:bg-[#F2F4F7]'
                : 'text-[#D0D5DD] cursor-not-allowed'
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              currentPage < totalPages
                ? 'text-[#344054] hover:bg-[#F2F4F7]'
                : 'text-[#D0D5DD] cursor-not-allowed'
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanTransactionsTable;
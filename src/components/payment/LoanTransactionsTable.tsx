import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.abs(amount));
};

const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
};

const removeSpecialCharacters = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const categoryColors: { [key: string]: string } = {
    Upcoming: 'bg-blue-100 text-blue-800',
    Today: 'bg-yellow-100 text-yellow-800',
    Past: 'bg-gray-100 text-gray-800',
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search transactions..."
              aria-label="Search transactions"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="items-per-page" className="text-sm font-medium text-gray-700">
              Show:
            </label>
            <select
              id="items-per-page"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table view for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTransactions.map((t: Transaction) => {
              const status = getTransactionStatus(new Date(t.date));
              const amount = formatAmount(t.amount);
              const isDebit = t.type === 'debit';
              return (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{removeSpecialCharacters(t.name)}</div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDebit ? 'text-red-600' : 'text-green-600'}`}>
                    {isDebit ? `-${amount}` : amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <CategoryBadge category={status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDateTime(new Date(t.date))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                    {t.paymentChannel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <CategoryBadge category={t.category} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card view for smaller screens */}
      <div className="md:hidden">
        {currentTransactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);
          const isDebit = t.type === 'debit';
          return (
            <div key={t.id} className="border-b border-gray-200 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-medium text-gray-900">{removeSpecialCharacters(t.name)}</div>
                <CategoryBadge category={status} />
              </div>
              <div className={`text-sm font-medium ${isDebit ? 'text-red-600' : 'text-green-600'}`}>
                {isDebit ? `-${amount}` : amount}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formatDateTime(new Date(t.date))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-xs text-gray-500 capitalize">{t.paymentChannel}</div>
                <CategoryBadge category={t.category} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, filteredTransactions.length)}</span> of{' '}
              <span className="font-medium">{filteredTransactions.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === i + 1
                      ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTransactionsTable;
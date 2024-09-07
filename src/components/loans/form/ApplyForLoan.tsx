import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ApplyForLoanProps {
  closeModal: () => void;
}

const ApplyForLoan: React.FC<ApplyForLoanProps> = ({ closeModal }) => {
  const [loanType, setLoanType] = useState('business');

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Apply for a Loan</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <form className="p-6 space-y-6">
          <div>
            <label htmlFor="loanType" className="block text-sm font-medium text-gray-700">
              Loan Type
            </label>
            <select
              id="loanType"
              name="loanType"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="business">Business Loan</option>
              <option value="employee">Employee Loan</option>
              <option value="student">Student Loan</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Loan Amount
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">USD</span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose of Loan
            </label>
            <input
              type="text"
              name="purpose"
              id="purpose"
              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          {loanType === 'business' && (
            <>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">
                  Annual Revenue
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="revenue"
                    id="revenue"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">USD</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {loanType === 'employee' && (
            <>
              <div>
                <label htmlFor="employerName" className="block text-sm font-medium text-gray-700">
                  Employer Name
                </label>
                <input
                  type="text"
                  name="employerName"
                  id="employerName"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                  Monthly Salary
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="salary"
                    id="salary"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">USD</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {loanType === 'student' && (
            <>
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">
                  School Name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Course of Study
                </label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Apply for Loan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForLoan;
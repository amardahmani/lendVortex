import { CalendarIcon, CreditCardIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const LoansCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Loan Summary</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <CreditCardIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-gray-600">Total Loans</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">3</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-full p-2">
                <CurrencyDollarIcon className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-gray-600">Total Balance</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">$25,000</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 rounded-full p-2">
                <CalendarIcon className="h-5 w-5 text-yellow-600" />
              </div>
              <span className="text-gray-600">Upcoming Payments</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">2</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 mt-5">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          View Full Loans
        </button>
      </div>
    </div>
  )
}

export default LoansCard
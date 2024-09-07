import { BoltIcon, CurrencyDollarIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const QuickActionsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-yellow-100 rounded-full p-3">
            <BoltIcon className="h-8 w-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            New Loan Application
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
            Make a Payment
          </button>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4">
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium flex items-center justify-center">
          View All Actions
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default QuickActionsCard
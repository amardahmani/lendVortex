import { ArrowTrendingUpIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ActivityCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Activity Overview</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 rounded-full p-2">
              <CreditCardIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Recent Transactions</p>
              <p className="text-lg font-semibold text-gray-800">12</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 rounded-full p-2">
              <CalendarIcon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Payment Date</p>
              <p className="text-lg font-semibold text-gray-800">May 15, 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 rounded-full p-2">
              <CalendarIcon className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Payment Due</p>
              <p className="text-lg font-semibold text-gray-800">June 15, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          View Full Activity
        </button>
      </div>
    </div>
  )
}

export default ActivityCard
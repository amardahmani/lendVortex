import React from 'react'

const ActivityCard = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5h3m0 0v3m0-3L9 16.5l-4-4" />
            </svg>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Activity Overview</h5>
            </a>
        </div>
        <p className="mb-3 mt-3 font-normal text-gray-500 dark:text-gray-400">
            - <strong>Recent Transactions:</strong> [Number]
            <br />
            - <strong>Last Payment Date:</strong> [Date]
            <br />
            - <strong>Next Payment Due:</strong> [Date]
        </p>
    
    </div>
  )
}

export default ActivityCard
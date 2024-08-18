import React from 'react'

const QuickActionsCard = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Quick Actions</h5>
        </a>
      </div>
    <div className="mb-3 mt-3 font-normal text-gray-500 dark:text-gray-400 space-y-2">
        <button className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600">New Loan</button>
        <button className="w-full bg-green-500 text-white py-1 rounded-md hover:bg-green-600">Make a Payment</button>
       </div>
      
    </div>
  )
}

export default QuickActionsCard
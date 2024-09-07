import React, { useState } from 'react'
import ApplyLoanButton from '../../../components/loans/Buttons/ApplyLoanButton'
import LoanListTable from '../../../components/loans/ListLoans'
import ApplyForLoan from '../../../components/loans/form/ApplyForLoan';
import { XMarkIcon } from '@heroicons/react/24/outline';

const LoansPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (): void => {
      setIsModalOpen(true);
  };

  const handleClose = (): void => {
      setIsModalOpen(false);
  };
  return (
    <>
        <ApplyLoanButton onClick={handleClick}/>
        <div className='mt-3'></div>
        <LoanListTable onViewStats={handleClick}/>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-4 md:mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-xl max-h-[100vh] overflow-y-auto"> {/* Max height added and scroll enabled */}
              
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b border-gray-200 p-5">
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <ApplyForLoan closeModal={handleClose} /> {/* Form content */}
              </div>
              
            </div>
          </div>
        </div>
        
        )}
    </>
  )
}

export default LoansPage
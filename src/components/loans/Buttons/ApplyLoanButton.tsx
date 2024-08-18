import React from 'react';


interface ApplyLoanButtonProps {
    onClick: () => void;
}


const ApplyLoanButton:React.FC<ApplyLoanButtonProps> = ({onClick}) => {
  return (
    <button
    onClick={onClick}
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
    >
    Apply for a New Loan
  </button>
  )
}

export default ApplyLoanButton
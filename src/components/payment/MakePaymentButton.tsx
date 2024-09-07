import React from 'react';


interface MakePaymentButtonProps {
    onClick: () => void;
}


const MakePaymentButton:React.FC<MakePaymentButtonProps> = ({onClick}) => {
  return (
    <button
    onClick={onClick}
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
    >
    Make a payment
  </button>
  )
}

export default MakePaymentButton;
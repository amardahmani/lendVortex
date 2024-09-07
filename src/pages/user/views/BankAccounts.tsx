import React from 'react';
import AddNewAccountButton from '../../../components/bank/AddNewAccountButton';
import BankCard from '../../../components/bank/BankCard';

const BankAccounts = () => {
  const handleClick = (): void => {
    console.log('Hello');
  };

  return (
    <div className="p-4">
      <AddNewAccountButton onClick={handleClick} />
      <BankCard
        cardNumber="1234 5678 9012 3456"
        cardHolderName="John Doe"
        expirationDate="12/25"
        cvv="123"
      />
    </div>
  );
};

export default BankAccounts;

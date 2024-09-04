import React from 'react'
import ApplyLoanButton from '../../components/loans/Buttons/ApplyLoanButton'
import LoanListTable from '../../components/loans/ListLoans'

const LoansPage = () => {
    const handleClick = (): void => {
        console.log('Hello');
      };
  return (
    <>
        <ApplyLoanButton onClick={handleClick}/>
        <LoanListTable onViewStats={handleClick}/>
    </>
  )
}

export default LoansPage
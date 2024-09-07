import React from 'react';
import LoanTransactionsTable from '../../../components/payment/LoanTransactionsTable';
import MakePaymentButton from '../../../components/payment/MakePaymentButton';

const fakeTransactions: any[] = [
    {
      id: 'b42f3d52-378b-4b18-9c5a-3a1e0b6d9d4f',
      name: 'Payment Received',
      amount: 1200.50,
      type: 'credit', // Correct type
      date: '2024-09-01T14:35:22.000Z',
      paymentChannel: 'Bank Transfer',
      category: 'Past',
    },
    {
      id: '7e54f8c1-bf7c-4f8c-bfd0-7e8b476ee32b',
      name: 'Loan Repayment',
      amount: -250.00,
      type: 'debit', // Correct type
      date: '2024-09-02T09:15:00.000Z',
      paymentChannel: 'Credit Card',
      category: 'Today',
    },
    {
      id: 'a77c8b30-1d74-4e5a-81b2-9f927e02d5b7',
      name: 'Service Charge',
      amount: -15.75,
      type: 'debit', // Correct type
      date: '2024-09-05T11:22:33.000Z',
      paymentChannel: 'Bank Transfer',
      category: 'Upcoming',
    },
    {
      id: 'fbbd9ae8-4e9e-4d63-904b-fb2274b6a1c3',
      name: 'Deposit',
      amount: 500.00,
      type: 'credit', // Correct type
      date: '2024-09-10T16:45:55.000Z',
      paymentChannel: 'Cash',
      category: 'Upcoming',
    },
    {
      id: 'c74e95e2-8ef8-4d2d-8e28-dfe1cfdb650f',
      name: 'Refund',
      amount: 30.00,
      type: 'credit', // Correct type
      date: '2024-09-08T13:00:00.000Z',
      paymentChannel: 'Debit Card',
      category: 'Past',
    },
    {
      id: 'd2653d43-947e-4c02-9332-08b7f0b1c10b',
      name: 'Interest Payment',
      amount: -45.00,
      type: 'debit', // Correct type
      date: '2024-09-12T08:30:00.000Z',
      paymentChannel: 'Bank Transfer',
      category: 'Upcoming',
    },
    {
      id: '8b74a9d0-4698-4b22-befb-87b99fba2d65',
      name: 'Utility Bill',
      amount: -80.00,
      type: 'debit', // Correct type
      date: '2024-09-03T10:05:20.000Z',
      paymentChannel: 'Direct Debit',
      category: 'Today',
    },
    {
      id: 'e12c98e1-7a7e-4e71-8f60-0d7e3c647c25',
      name: 'Monthly Subscription',
      amount: -25.00,
      type: 'debit', // Correct type
      date: '2024-09-15T07:00:00.000Z',
      paymentChannel: 'Credit Card',
      category: 'Upcoming',
    },
    {
      id: 'b7b21c0d-3f4b-43b6-bf99-2907c23ae3c7',
      name: 'Salary',
      amount: 2200.00,
      type: 'credit', // Correct type
      date: '2024-09-01T09:00:00.000Z',
      paymentChannel: 'Bank Transfer',
      category: 'Past',
    },
    {
      id: '5d8eb8ff-4c9b-4cf3-bef7-f8b8c45315f3',
      name: 'Bonus',
      amount: 300.00,
      type: 'credit', // Correct type
      date: '2024-09-07T15:00:00.000Z',
      paymentChannel: 'Cash',
      category: 'Past',
    },
    {
      id: 'c0f6e6d8-7e71-42d7-b60c-0c67bfc14bbf',
      name: 'Purchase',
      amount: -120.00,
      type: 'debit', // Correct type
      date: '2024-09-06T14:50:00.000Z',
      paymentChannel: 'Debit Card',
      category: 'Upcoming',
    },
  ];

const PaymentsPage = () => {
  const handleClick = ():void => {
    console.log("clicked");
  }
  return (
    <div>
        <MakePaymentButton onClick={handleClick}/>
        <div className='mt-3'></div>
        <LoanTransactionsTable transactions={fakeTransactions}/>
    </div>
  );
};

export default PaymentsPage;

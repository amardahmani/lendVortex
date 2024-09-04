import React from 'react';

const PaymentsPage = () => {
  // Example data
  const linkedCard = {
    last4Digits: '1234',
    expirationDate: '12/25',
  };

  const amountDue = 5000.00;

  return (
    <div className="bg-white overflow-x-auto mt-10 p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      {/* Payment Header */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Details</h2>
      
      {/* Linked Card Display */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Linked Card</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700">**** **** **** {linkedCard.last4Digits}</p>
          <p className="text-gray-500">Expires {linkedCard.expirationDate}</p>
          <button className="mt-2 text-blue-500 hover:underline text-sm">Edit Card</button>
        </div>
      </div>

      {/* Payment Form */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount Due</label>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-700">${amountDue.toLocaleString()}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
          >
            Pay Now
          </button>
          <button
            type="button"
            className="px-4 py-2 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-200 text-sm"
          >
            Add New Card
          </button>
        </div>
      </form>
      
      {/* Payment History Link */}
      <div className="mt-6 text-center">
        <button className="text-blue-500 hover:underline text-sm">View Payment History</button>
      </div>
    </div>
  );
};

export default PaymentsPage;

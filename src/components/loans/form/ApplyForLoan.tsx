import React, { useState } from 'react';


interface ApplyForLoanProps {
    closeModal: () => void; // Function to close the modal
}
const ApplyForLoan: React.FC<ApplyForLoanProps> = ({closeModal}) => {
  const [loanType, setLoanType] = useState('business'); // This can change based on the user's selection

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
      <h1 className="text-2xl font-semibold leading-6 text-gray-900 text-center">Apply for a Loan</h1>
      <form action="#" method="POST" className="space-y-6 mt-6">
        {/* Loan Type Selection */}
        <div className="flex flex-col">
          <label htmlFor="loanType" className="block text-sm font-medium leading-6 text-gray-900 text-left">
            Loan Type
          </label>
          <div className="mt-2">
            <select
              id="loanType"
              name="loanType"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            >
              <option value="business">Business Loan</option>
              <option value="employee">Employee Loan</option>
              <option value="student">Student Loan</option>
            </select>
          </div>
        </div>

        {/* Common Fields */}
        <div className="flex flex-col">
          <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900 text-left">
            Loan Amount
          </label>
          <div className="mt-2">
            <input
              id="amount"
              name="amount"
              type="number"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="purpose" className="block text-sm font-medium leading-6 text-gray-900 text-left">
            Purpose of Loan
          </label>
          <div className="mt-2">
            <input
              id="purpose"
              name="purpose"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Conditionally Rendered Fields */}
        {loanType === 'business' && (
          <>
            <div className="flex flex-col">
              <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Business Name
              </label>
              <div className="mt-2">
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="revenue" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Annual Revenue
              </label>
              <div className="mt-2">
                <input
                  id="revenue"
                  name="revenue"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}

        {loanType === 'employee' && (
          <>
            <div className="flex flex-col">
              <label htmlFor="employerName" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Employer Name
              </label>
              <div className="mt-2">
                <input
                  id="employerName"
                  name="employerName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="salary" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Monthly Salary
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}

        {loanType === 'student' && (
          <>
            <div className="flex flex-col">
              <label htmlFor="schoolName" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                School Name
              </label>
              <div className="mt-2">
                <input
                  id="schoolName"
                  name="schoolName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Course of Study
              </label>
              <div className="mt-2">
                <input
                  id="course"
                  name="course"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Apply for Loan
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForLoan;

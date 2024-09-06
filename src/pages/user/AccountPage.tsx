import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      <form className="bg-white shadow-xl">
        <div className="w-full bg-green-600 px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Your Profile</h2>
        </div>
        
        <div className="px-4 py-8 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center space-x-6">
            <UserCircleIcon className="h-24 w-24 text-gray-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Profile Photo</h3>
              <button type="button" className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Change Photo
              </button>
            </div>
          </div>

          <div className="max-w-3xl">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 p-2"
                placeholder="janesmith"
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                placeholder="Write a few sentences about yourself."
              />
            </div>
          </div>

          <div className="max-w-3xl grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
              <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
              <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm p-2">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 bg-gray-50 border-t border-gray-200 flex items-center justify-end space-x-3 sm:px-6 lg:px-8">
          <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Cancel
          </button>
          <button type="submit" className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
import React from 'react';
import { CameraIcon } from '@heroicons/react/24/solid';

export default function AccountPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-green-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Your Profile</h2>
        <p className="text-green-100 text-sm">Manage your account information and preferences.</p>
      </div>
      
      <form className="p-6 space-y-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <button type="button" className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <CameraIcon className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Profile Photo</h3>
            <p className="text-sm text-gray-500">Update your profile picture to personalize your account.</p>
            <button type="button" className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Change Photo
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="janesmith"
          />
        </div>

        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
          <textarea
            id="about"
            name="about"
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Write a few sentences about yourself."
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </form>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
        <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Cancel
        </button>
        <button type="submit" className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Save Changes
        </button>
      </div>
    </div>
  );
}
import React from 'react'
import finance from '../assets/finance.svg'

const Auth = () => {
  return (
    <div className='flex w-full h-screen bg-gradient-to-br from-green-100 to-green-200'>
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="text-center p-6">
                <img
                    alt="LendStorm"
                    src={finance}
                    className="mx-auto h-60 w-auto mb-4"
                />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to LendStorm
                </h1>
                <p className="text-lg text-gray-700">
                    Streamline your lending process with our cutting-edge technology. Secure, efficient, and flexible solutions at your fingertips.
                </p>
            </div>
        </div>
        
        <div className="flex min-h-full flex-1 flex-col justify-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div className='flex flex-col '>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Auth

import React from 'react'

const Form = () => {
  return (
    <div className='p-12 bg-white h-fit w-fit flex flex-col rounded-lg shadow-xl flex items-center'>  
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
                  Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6 mt-8" action="#">
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5" placeholder="username" />
                <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5" />
                <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" className="font-medium text-sky-600 hover:underline">Sign up</a>
                </p>
            </form>
    </div>
  )
}

export default Form
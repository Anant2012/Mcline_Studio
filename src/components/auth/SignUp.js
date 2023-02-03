import React from 'react'
import background from './signup_banner.jpg';

const SignUp = () => {

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(60%)'
  };

  return (
    <>
      <div className='h-[700px] w-full sm:w-3/4 flex mx-auto sm:shadow-md  my-12 '>
        <div className=" lg:w-1/2  flex  justify-center items-center" style={styles}>
            <div className="w-3/4 backdrop-opacity-30 blur-[1px] h-3/4 mx-auto backdrop-grayscale-10 bg-slate-800/40"></div>
        </div>
        <div className='w-full lg:w-1/2 my-auto'>
          <div className='w-3/4 mx-auto'>
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">SignUp</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please fill out the form below to create your account</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Set Password</label>
              <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Confirm Password</label>
              <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button>
            <p className="text-xs text-gray-500 mt-3">Don't worry! We will keep your data safe</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default SignUp
import React from 'react'
import background from '../../auth/login_banner.jpg';

const HREndLogin = (props) => {

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(60%)'
  };

  return (
    <>

      <div className={`${(props.hrLogin)?"hidden":"block"} h-[500px]  w-full sm:w-3/4 flex mx-auto sm:shadow-md my-12`}>
        
        <div className='w-full lg:w-1/2 my-auto'>
          <form>
          <div className='w-3/4 mx-auto'>
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">Admin LogIn</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please fill out the form to login</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LogIn</button>
            {/* <p className="text-xs text-gray-500 mt-7 flex justify-center mx-auto"><a href='/' className='text-[16px] text-blue-700'>Create Account</a></p> */}
          </div>
          </form>
          </div>
          <div className="d-none lg:w-1/2  flex  justify-center items-center" style={styles}>
            <div className="w-3/4 backdrop-opacity-30 blur-[1px] h-3/4 mx-auto backdrop-grayscale bg-slate-800/40"></div>
        </div>
      </div>
    </>
  )
}

export default HREndLogin
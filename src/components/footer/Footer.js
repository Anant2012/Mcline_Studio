import React from 'react'
import background from './footerImg.png';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" w-full bg-gray-200/75 text-gray-600 body-font">
  <div className="container px-5 w-full py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div> */}
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-800 tracking-widest text-xl mb-3">ABOUT</h2>
        <nav className="list-none mb-10 text-gray-700 text-justify w-full md:w-3/4">
          Architecture provides an opportunity to improve the conditions for people, communities, society, businesses and the environment.


          <nav className="list-none mt-4 leading-loose">
          <li>
            <a className="text-gray-700  hover:text-gray-600 cursor-pointer"><i className="fa-solid fa-envelope mr-4"></i>info@mclinestudios.net</a>
          </li>
          <li>
                  <a className="text-gray-700 hover:text-gray-600 cursor-pointer"><i class="fa-solid fa-user  mr-4"></i>hr@mclinestudios.net</a>
          </li>
          <li>
                  <a className="text-gray-700  hover:text-gray-600 cursor-pointer whitespace-nowrap"><i className="fa-sharp fa-solid fa-location-dot mr-4"></i>103, Ist Floor, DLF City Centre Mall, Shalimar Bagh, New Delhi - 110088</a>
          </li>
        </nav>
        </nav>
      </div>



      <div className="md:w-1/2 w-full px-4">
        <div className='flex justify-end mt-[10px] w-full items-center'>
          <img src={`${background}`} className="max-w-[300px] flex h-auto" alt="..." />
          </div>
      </div>
      
      {/* <div className="lg:w-1/4 md:w-1/2 flex justify-center  w-full px-4">
        <nav className="list-none mb-10">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OPERATION</h2>
          <li>
            <Link to="/operation/addnew/lead" className="text-gray-600 hover:text-gray-800">Add New-Lead</Link>
          </li>
          <li>
            <Link to="/operation/addnew/project" className="text-gray-600 hover:text-gray-800">Add New-Project</Link>
          </li>
          <li>
            <Link to="/operation/view/lead" className="text-gray-600 hover:text-gray-800">View-Lead</Link>
          </li>
          <li>
            <Link to="/operation/view/project" className="text-gray-600 hover:text-gray-800">View-Project</Link>
          </li>
        </nav>
      </div> */}
      
      
      
    </div>
  </div>
  <div className="bg-gray-600">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-sm text-center sm:text-left text-slate-100">Copyright © {currentYear} McLine Studios by McLine Web Studios. All Rights Reserved.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <svg onClick={() => window.location.href = 'https://www.facebook.com/mclinestudios'} fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-3 text-slate-100 cursor-pointer  w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        
          <svg onClick={() => window.location.href = 'https://twitter.com/MclineStudios'} fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-3  text-slate-100 cursor-pointer  w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        
          <svg  onClick={() => window.location.href = 'https://www.instagram.com/mclinestudios'} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-3 w-5 h-5 cursor-pointer  text-slate-100" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>

        
          <svg  onClick={() => window.location.href = 'https://www.linkedin.com/company/71505148/admin/'}  fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="ml-3 text-slate-100 cursor-pointer w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer
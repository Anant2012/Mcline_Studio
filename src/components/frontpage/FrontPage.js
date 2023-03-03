import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>


      <div className="flex flex-col text-center w-full mt-40">
        <h1 className="sm:text-4xl  text-3xl font-medium title-font mb-4 text-gray-900">
          
        <span className="text-[#036396]">McLine </span>Access Portal
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Creating a Productive and Organized Environment
        </p>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-[#047EC1] shadow-md bg-sky-50/5 border-opacity-50 px-8 pt-8 pb-2 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#d0edfb] text-[#d0edfb] flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="#047EC1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-[#036396] text-xl title-font font-medium mb-3">
                    Operations
                  </h2>
                  <p className="leading-relaxed text-sm">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                  <div className="p-2 sm:w-1/2 w-full">
                    <section className="text-gray-600 body-font">
                      <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#047EC1] inline-flex items-center justify-center text-white relative z-10">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="font-medium title-font text-md text-gray-900 tracking-wider">
                                Add New
                              </h2>
                              <p className="leading-relaxed text-sm">
                                Choose Option
                              </p>
                              <div className="flex mt-2">
                                <Link to="/operation/addnew/lead">
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mr-3"
                                  >
                                    Lead
                                  </button>
                                </Link>
                                <Link to="/operation/addnew/project">
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mr-3"
                                  >
                                    Project
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="flex relative pb-16">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#047EC1] inline-flex items-center justify-center text-white relative z-10">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                              </svg>
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">
                                View
                              </h2>
                              <p className="leading-relaxed text-sm">
                                Choose Option
                              </p>
                              <div className="flex mt-2">
                                <Link to="/operation/view/lead">
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mr-3"
                                  >
                                    Lead
                                  </button>
                                </Link>
                                <Link to="/operation/view/project">
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mr-3"
                                  >
                                    Project
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-[#047EC1] shadow-md bg-sky-50/5 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#d0edfb] text-[#d0edfb] flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="#047EC1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-[#036396] text-xl title-font font-medium mb-3">
                    HumanConnect
                  </h2>
                  <p className="leading-relaxed text-sm text-base">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                  <div className="p-2 sm:w-1/2 w-full">
                    <section className="text-gray-600 body-font">
                      <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="flex relative pb-2">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#047EC1] inline-flex items-center justify-center text-white relative z-10">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">
                                Manage
                              </h2>
                              <p className="leading-relaxed text-sm">
                                Choose Option
                              </p>
                              <div className="flex mt-2 flex-col">
                                <div className="flex flex-row gap-3 ">
                                  <Link to="/hr/personaldetails">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                                    >
                                      Personal Details
                                    </button>
                                  </Link>

                                  <Link to="/hr/leaves">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                                    >
                                      Leaves
                                    </button>
                                  </Link>
                                </div>

                                <div className="flex flex-row gap-3 ">
                                  <Link to="/hr/tickets">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2  mt-3"
                                    >
                                      Tickets
                                    </button>
                                  </Link>

                                  <Link to="/hr/grievance">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2  mt-3"
                                    >
                                      Grievance
                                    </button>
                                  </Link>
                                </div>

                                <div className="flex flex-row gap-3 ">
                                  <Link to="/hr/timesheet">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2  mt-3"
                                    >
                                      Timesheet
                                    </button>
                                  </Link>

                                  <Link to="/hr/directory">
                                    <button
                                      type="button"
                                      className="inline-flex w-44 justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mt-3"
                                    >
                                      Directory
                                    </button>
                                  </Link>
                                </div>

                                <div className="flex flex-row gap-3 w-full">
                                  <Link to="/hr/policy">
                                    <button
                                      type="button"
                                      className="inline-flex w-[364px] justify-center items-center rounded-md border border-[#047EC1] bg-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-[#047EC1] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2 mt-3"
                                    >
                                      Privacy and Policy
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;

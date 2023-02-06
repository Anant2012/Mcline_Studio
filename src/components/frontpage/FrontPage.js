import React from "react";
import{
  Link
} from "react-router-dom";

const FrontPage = () => {
  return (
    <>
<div class="flex flex-col text-center w-full mt-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Manage Your Workspace</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-sm text-base">Creating a Productive and Organized Environment</p>
    </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
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
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
                    Operations
                  </h2>
                  <p className="leading-relaxed text-sm text-base">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                  <div className="p-2 sm:w-1/2 w-full">
                    <section className="text-gray-600 body-font">
                      <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
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
                              <p className="leading-relaxed text-sm">Choose Option</p>
                              <div className="flex mt-2">
                                <Link to="/operation/addnew/lead">
                                    <button
                                    type="button"
                                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
                                    >
                                    Lead
                                    </button>
                                </Link>
                                <Link to="/operation/addnew/project">
                                    <button
                                    type="button"
                                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
                                    >
                                    Project
                                    </button>
                                </Link>
                                    </div>
                            </div>
                          </div>
                          <div className="flex relative pb-16">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">
                                View
                              </h2>
                              <p className="leading-relaxed text-sm">Choose Option</p>
                              <div className="flex mt-2">
                                <Link to="/operation/view/lead">
                                    <button
                                    type="button"
                                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
                                    >
                                    Lead
                                    </button>
                                  </Link>
                                  <Link to="/operation/view/project">
                                    <button
                                    type="button"
                                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3"
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
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
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
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
                    HR
                  </h2>
                  <p className="leading-relaxed text-sm text-base">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                  <div className="p-2 sm:w-1/2 w-full">
                    <section className="text-gray-600 body-font">
                      <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="flex relative pb-2">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">
                                Manage
                              </h2>
                              <p className="leading-relaxed text-sm">Choose Option</p>
                              <div className="flex mt-2 flex-col">
                                <Link to="/hr/Viewprofile">
                                    <button
                                    type="button"
                                    class="inline-flex w-36 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                    Personal Details
                                    </button>
                                  </Link>

                                    <Link to="/hr/leaves"><button
                                    type="button"
                                    class="inline-flex w-36 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                                    >
                                    Leaves
                                    </button>
                                    </Link>


                                    <Link to="/hr/tickets"><button
                                    type="button"
                                    class="inline-flex w-36 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                                    >
                                    Tickets
                                    </button>
                                    </Link>


                                    <Link to="/hr/grievance"><button
                                    type="button"
                                    class="inline-flex w-36 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                                    >
                                    Grievance
                                    </button>
                                    </Link>


                                    <Link to="/hr/policy"><button
                                    type="button"
                                    class="inline-flex w-36 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                                    >
                                    Policy
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;

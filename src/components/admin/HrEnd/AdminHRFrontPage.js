import React from "react";
import { Link } from "react-router-dom";
import AdminHREndLogin from "./AdminHREndLogin";
import { useState } from "react";

const AdminHRFrontPage = () => {


  const [hrLogin, setHrLogin] = useState(0);



  return (
    <>
      <AdminHREndLogin hrLogin={hrLogin} setHrLogin={setHrLogin} />

      <div className={`${(hrLogin) ? "block" : "hidden"}`}>
        <div class="flex flex-col text-center w-full mt-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Manage Your Workspace
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-sm text-base">
            Creating a Productive and Organized Environment
          </p>
        </div>

        <section className="text-gray-600 w-full body-font">
          <div className="container w-full py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap justify-center w-full -m-4">
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
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                    <div className="p-2 sm:w-1/2 w-full">
                      <section className="text-gray-600 body-font">
                        <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                          <div className="flex flex-wrap w-full">
                            <div className="flex relative pb-2">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
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
                                <div className="flex mt-2 w-full flex-col">
                                  <div className="flex flex-row">
                                    <Link to="/admin/hr/profiles">
                                      <button
                                        type="button"
                                        class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                                      >
                                        Profiles
                                      </button>
                                    </Link>

                                    <Link to="/admin/hr/leaves">
                                      <button
                                        type="button"
                                        class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2"
                                      >
                                        Leaves
                                      </button>
                                    </Link>
                                  </div>
                                  <div className="flex flex-row">
                                    <Link to="/admin/hr/tickets">
                                      <button
                                        type="button"
                                        class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2 mt-3"
                                      >
                                        Tickets
                                      </button>
                                    </Link>

                                    <Link to="/admin/hr/grievance">
                                      <button
                                        type="button"
                                        class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2 mt-3"
                                      >
                                        Grievance
                                      </button>
                                    </Link>
                                  </div>

                                  <div className="flex flex-row">
                                    <Link to="/admin/hr/timesheet">
                                      <button
                                        type="button"
                                        class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2 mt-3"
                                      >
                                        Timesheet
                                      </button>
                                    </Link>

                                    <Link to="/hr/policy"><button
                                      type="button"
                                      class="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2 mt-3"
                                    >
                                      Policy
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
      </div>
    </>
  );
};

export default AdminHRFrontPage;

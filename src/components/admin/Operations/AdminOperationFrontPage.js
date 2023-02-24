import { Link } from "react-router-dom";

const AdminOperationFrontPage = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          McLiner Access Portal
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-base">
          Creating a Productive and Organized Environment
        </p>
      </div>

      <section className="text-gray-600 w-full body-font">
        <div className="container py-24 w-full mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4 mx-auto justify-center w-full">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
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
                  <h2 className="text-gray-900 text-xl title-font font-medium ">
                    Operations
                  </h2>
                  <p className="leading-relaxed text-sm text-base">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                  <div className="p-2 sm:w-1/2 w-full">
                    <section className="text-gray-600 body-font">
                      <div className="container px-5 pt-14 pb-0 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                          <div className="flex relative mb-8">
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
                              <div className="flex flex-col mt-2">
                                <Link to="/admin/operation/view/lead">
                                  <button
                                    type="button"
                                    className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3"
                                  >
                                    Lead
                                  </button>
                                </Link>
                                <Link to="/admin/operation/view/project">
                                  <button
                                    type="button"
                                    className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminOperationFrontPage;

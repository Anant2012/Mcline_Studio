import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "../../../constant/Table/Table";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";

const AdminHRFrontPage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    const updatedData = data.filter((x) =>
      x.user_id.username.toLowerCase().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
  };
  const columns = [
    { name: "Name", selector: (row) => row.user_id?.username, sortable: true },
    // { name: "Days", selector: (row) => row.leaves.net_days, sortable: true },
    {
      name: "Reason",
      selector: (row) => row.leaves?.description,
      sortable: true,
    },
  ];
  const EditUser = (row) => {
    navigate(`/user/admin/edit_user/${row._id}`);
  };
  const getData = async () => {
    AxiosInstance.get(`/api/admin/hr/leaves/top/five`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleAddClick = () => {
    props.setAdminLogin(0);
  };

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

      <section className="text-gray-600  body-font">
        <div className="container px-5 py-24 w-full justify-center mx-auto flex flex-wrap">
          {/* <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#d0edfb] text-[#d0edfb]-500 flex-shrink-0">
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
                  <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
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
                              <div className="flex mt-2 w-full flex-col">
                                <div className="flex flex-row">
                                  <Link to="/admin/hr/profiles">
                                    <button
                                      type="button"
                                      className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                                    >
                                      Profiles
                                    </button>
                                  </Link>

                                  <Link to="/admin/hr/leaves">
                                    <button
                                      type="button"
                                      className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2"
                                    >
                                      Leaves
                                    </button>
                                  </Link>
                                </div>
                                <div className="flex flex-row">
                                  <Link to="/admin/hr/tickets">
                                    <button
                                      type="button"
                                      className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2 mt-3"
                                    >
                                      Tickets
                                    </button>
                                  </Link>

                                  <Link to="/admin/hr/grievance">
                                    <button
                                      type="button"
                                      className="inline-flex w-28 justify-center items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2 mt-3"
                                    >
                                      Grievance
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
          </div> */}
            <div className="border-2 m-4 flex w-full rounded-lg border-[#047EC1] shadow-md bg-sky-50/5 border-opacity-50 px-8 py-4">
              <div className="w-1/2 text-[#047EC1] my-auto pl-8 text-xl">Manage HR End</div>
              <div className="w-1/2 flex sm:flex-row flex-col  justify-between items-center">
              <Link to="/admin/hr/profiles">
                <button
                  type="button"
                  className="inline-flex w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Profiles
                </button>
              </Link>

              <Link to="/admin/hr/leaves">
                <button
                  type="button"
                  className="inline-flex w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Leaves
                </button>
              </Link>

              <Link to="/admin/hr/tickets">
                <button
                  type="button"
                  className="inline-flex w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Tickets
                </button>
              </Link>

              <Link to="/admin/hr/grievance">
                <button
                  type="button"
                  className="inline-flex w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Grievance
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 w-full mx-auto">
            <section className="text-gray-600 body-font">
              <div className="container  mx-auto">
                <div className="bg-[#0483c8] pb-4 px-4 pt-4">
                  <div className="flex flex-wrap mx-4">
                    <div className="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded ">
                      <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
                        Data Table
                      </h1>
                    </div>
                  </div>

                  <div className="w-full mx-auto">
                    <Table
                      columns={columns}
                      data={filteredData}
                      onSearch={onSearch}
                      title="Selling Product List"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHRFrontPage;

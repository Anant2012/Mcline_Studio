import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminHRTimesheet() {

  const [showModal, setShowModal] = useState(0);
  const [data, setData] = useState();

  const date = "Hello";
  const company = "Good";
  const name = "Morning";

  const columns = [
    { name: "SNo", selector: (row) => <span>date</span>, sortable: true },
    { name: "Task ", selector: (row) => <span>date</span>, sortable: true },
    { name: "Time", selector: (row) => <span>date</span> , sortable: true }
  ];
  

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              Timesheet
            </h1>
          </div>
          <div className="bg-indigo-500 pb-2 pt-4">
            <div class="flex flex-wrap mx-4">
              <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-indigo-500 rounded ">
                <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
                  Timesheet
                </h1>
                <div class="flex flex-row justify-center pr-8 items-center relative">
                  <button
                    className="text-white text-sm font-medium bg-indigo-800 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-sm mr-3 whitespace-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(1);
                    }}
                  >
                    Add Column
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div>
          <Table
            columns={columns}
            // data={setShow}
            // onSearch={onSearch}
            title="COUPON CODES LIST"
          />
        </div>
        </div>

        <div
          class={`${
            showModal ? "block" : "hidden"
          } fade fixed top-1 left-1/2 w-1/2 -translate-x-1/2  h-full outline-none overflow-x-hidden overflow-y-auto`}
        >
          <div class="relative w-auto pointer-events-none">
            <div class="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800">
                  Add Column
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                ></button>
              </div>
              <div class="relative p-4">
                <div class="relative mb-4 w-3/4 mx-auto flex">
                  <input
                    type="text"
                    name="text"
                    class="w-3/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-1"
                    placeholder="Task"
                  />
                <input
                    type="text"
                    name="text"
                    class="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ml-1"
                    placeholder="Time"
                  />
                  
                </div>
                
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(0);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminHRTimesheet;

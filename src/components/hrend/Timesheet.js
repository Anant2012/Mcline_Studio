import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import DownloadTableIcon from "../common/DownloadTableIcon";
import { useSelector } from "react-redux";

// automatically SNo. at last
function Timesheet() {
  const { userId } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(0);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const columns = [
    { name: "SNo", selector: (row) => row._id, sortable: true },
    {
      name: "Task", selector: (row) => (row.timeLine.map((data, index) => {
        return (<>{data.task}</>)
      })), sortable: true, wrap: true
    },
    {
      name: "Time", selector: (row) => (row.timeLine.map((data, index) => {
        return (<>{data.time}</>)
      })), sortable: true
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => EditLead(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
        </div>
      ),
    },
  ];

  const AddTimeline = async (e) => {
    e.preventDefault();
    const data = {
      task,
      time
    }
    try {
      const response = await AxiosInstance.post(`/api/user/timeline/add/${userId}`, data)
      if (response.status === 200 || response.status === 201) {
        alert("✅ Timesheet Added SuccesFully");
      }
      setTask("")
      setTime("");
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }
  console.log("errorr", data)
  const EditLead = (row) => {
    navigate(`/user/edit_lead/${row._id}`);
  };
  const getData = async () => {
    AxiosInstance.get(`/api/user/timeline/get/${userId}`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  };

  const DeleteAll = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.delete(`/api/user/timeline/delete/${userId}`)
      if (response.status === 200) {
        alert("Email sent")
      }


    } catch (error) {
      alert(error);
      console.log(error);
    };
  }

  useEffect(() => {
    getData();
    // FilterLead();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              Timesheet
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div class="flex flex-wrap mx-4">
              <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded ">
                <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
                  Timesheet
                </h1>
                <div class="flex flex-row justify-center pr-8 items-center relative">
                  <button
                    className="text-white text-sm font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
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
            <div>
              <Table
                columns={columns}
                data={data}
                // onSearch={onSearch}
                title="COUPON CODES LIST"
              />
              <DownloadTableIcon fileData={data} fileName="Timesheet" />
            </div>
          </div>
        </div>

        <div
          class={`${showModal ? "block" : "hidden"
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
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    class="w-3/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-1"
                    placeholder="Task"
                  />
                  <input
                    type="text"
                    name="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
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
                  onClick={AddTimeline}
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
      
      <div>
        <input
          type="text"
          id="date_to"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          name="date"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
        <button
          onClick={DeleteAll}
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
        >
          Send Mail
        </button>
      </div>
    </>
  );
}

export default Timesheet;

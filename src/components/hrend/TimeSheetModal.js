import { useState } from "react";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";

const TimeSheetModal = ({ toggleModal, userId, row }) => {
  const [task, setTask] = useState(row?.task);
  const [time, setTime] = useState(row?.time);

  const AddTimeline = async () => {
    const data = {
      task,
      time,
    };
    try {
      if (row?._id) {
        const response = await AxiosInstance.put(
          `api/user/timeline/update/${row._id}`,
          data
        );
        if (response.status === 200 || response.status === 201) {
          alert("✅ Timesheet Updated SuccesFully");
        }
      } else {
        const response = await AxiosInstance.post(
          `/api/user/timeline/add/${userId}`,
          data
        );
        if (response.status === 200 || response.status === 201) {
          alert("✅ Timesheet Added SuccesFully");
        }
      }

      toggleModal();
    } catch (error) {
      alert(error.response.data.msg);

    }
  };

  return (
    <div
      className="
      fade fixed top-1 left-1/2 w-1/2 -translate-x-1/2  h-full outline-none overflow-x-hidden overflow-y-auto"
    >
      <div className="relative w-auto pointer-events-none">
        <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800">
              Add Column
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            ></button>
          </div>
          <div className="relative p-4">
            <div className="relative mb-4 w-3/4 mx-auto flex">
              <input
                type="text"
                name="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-3/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-1"
                placeholder="Task"
              />
              <input
                type="time"
                name="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                class="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ml-1"
                placeholder="Time (Hrs:Mins)"
              />
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              onClick={AddTimeline}
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              {row?._id ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSheetModal;
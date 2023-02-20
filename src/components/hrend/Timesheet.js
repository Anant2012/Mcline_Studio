import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import DownloadTableIcon from "../common/DownloadTableIcon";
import { useSelector } from "react-redux";
import TimeSheetModal from "./TimeSheetModal";

// automatically SNo. at last
function Timesheet() {
  const { userId } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [editRow, setEditRow] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);
  const handleAddClick = () => {
    setEditRow();
    toggleModal();
  };
  const handleEditClick = (row) => {
    setEditRow(row);
    toggleModal();
  };

  const columns = [
    { name: "SNo", cell: (row, index) => index + 1, sortable: true },
    {
      name: "Task",
      selector: (row) => row.task,
      sortable: true,
      wrap: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => handleEditClick(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    AxiosInstance.get(`/api/user/timeline/get/${userId}`)
      .then((res) => setData(res.data.data[0].timeLine))
      .catch((err) => console.log("errorr", err));
  }, [showModal]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
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
                  onClick={handleAddClick}
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
      {showModal && (
        <TimeSheetModal
          toggleModal={toggleModal}
          userId={userId}
          row={editRow}
        />
      )}
    </section>
  );
}

export default Timesheet;

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
  const [total, setTotal] = useState("00:00");

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
  
  const onSearch = (val) => {
    const updatedData = data?.filter(
      (x) =>
        x.task.toLowerCase().match(val.toLowerCase()) ||
        x.time.toLowerCase().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
    setTotal(
      updatedData?.reduce((acc, item) => acc + item.time, 0)
    );
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

  // };

  const DeleteAll = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.put(`/api/user/timeline/email/${userId}`)
      if (response.status === 200) {
        alert("Email sent successfully")
      }
    } catch (error) {
      alert(error.response.data.msg);

    };
    // try {

    //   const response = await AxiosInstance.delete(`/api/user/timeline/delete/${userId}`)
    //   if (response.status === 200) {
    //     alert("Email sent successfully")
    //   }


    // } catch (error) {
    //   alert(error.response.data.msg);

    // };
  }


  useEffect(() => {
    setFilteredData(data);
    setTotal(
      data?.reduce((acc, item) => acc +Number(item.time), 0)
    );
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
              Total : {total}
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


      <div class="w-full px-4 mb-12 mx-auto">
        <div class="flex flex-wrap ">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-md text-gray-900">
                Send Email To
              </label>
              <input
                type="text"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                name="date"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <button
              onClick={DeleteAll}
              type="button"
              className="flex text-white bg-[#047EC1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-md"
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>

    </>

  );
}

export default Timesheet;

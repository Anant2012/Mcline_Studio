import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table"
import { useSelector } from "react-redux";
function AdminLeaves() {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.user_id.username.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.date_from.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.description.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.status.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Username", selector: (row) => <button onClick={() => EditLeaves(row)}>{row.user_id?.username}</button>, sortable: true },
    { name: "Date To", selector: (row) => <button onClick={() => EditLeaves(row)}>{row.leaves.date_to}</button>, sortable: true },
    { name: "Date From", selector: (row) => <button onClick={() => EditLeaves(row)}>{row.leaves.date_from}</button>, sortable: true },
    { name: "Net Days", selector: (row) => <button onClick={() => EditLeaves(row)}>{row.leaves.net_days}</button>, sortable: true },
    { name: "Description", selector: (row) => <button onClick={() => EditLeaves(row)}>{row.leaves.description}</button>, sortable: true },
    {
      name: "Status",
      selector: (row) => row.leaves.status, sortable: true
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit onClick={() => EditLeaves(row)} title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete onClick={() => DeleteLead(row)} title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
    },
  ];

  const EditLeaves = (row) => {
    // <EditLeaves leadId={row._id} />
    navigate(`/admin/hr/leaves/edit/${row._id}`);
    // console.log("lead",row._id)
  }
  const getData = async () => {
    AxiosInstance.get(`/api/admin/hr/leaves`)
      .then((data) =>
        setData(data.data.data)
      )
      .catch((err) => console.log("errorr", err));
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(`/api/admin/hr/leaves/${row._id}`);
      if (response.status === 200) {
        alert("✅Leaves deleted successfully!!");
        window.location.reload()
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);



  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all Applied Leaves
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            {/* <div className="flex flex-wrap mx-4">
              <div className="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded ">
                <div className="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">
                  Filter:
                </div>
                <div className="flex flex-row justify-center item-center relative">
                  <label
                    for="name"
                    className="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white"
                  >
                    Date_from
                  </label>
                  <input
                    type="date"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="flex flex-row justify-center item-center relative">
                  <label
                    for="name"
                    className="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white"
                  >
                    Date_to
                  </label>
                  <input
                    type="date"
                    id="name"
                    name="name"
                    className="w-full focus:bg-opacity-5 bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div> */}
            <div>
              <Table
                columns={columns}
                data={filteredData}
                onSearch={onSearch}
                title="COUPON CODES LIST"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default AdminLeaves;

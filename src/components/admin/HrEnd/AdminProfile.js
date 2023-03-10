import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
// import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
const AdminProfile = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.personal_details.name.toLowerCase().match(val.toLowerCase()) ||
          x.personal_details.employee_code
            .toLowerCase()
            .match(val.toLowerCase()) ||
          x.personal_details.reporting_manager
            .toLowerCase()
            .match(val.toLowerCase()) ||
          x.personal_details.official_email_id
            .toLowerCase()
            .match(val.toLowerCase())
      )
    );
  };
  const columns = [

    { name: "Username", selector:(row)=>row.personal_details.name,format: (row) => <button onClick={() => EditLeaves(row)}>{row.personal_details.name}</button>, sortable: true },
    { name: "Employee Code",selector:(row)=>row.personal_details.employee_code, format: (row) => <button onClick={() => EditLeaves(row)}>{row.personal_details.employee_code}</button>, sortable: true },
    { name: "Email",selector:(row)=>row.personal_details.official_email_id, format: (row) => <button onClick={() => EditLeaves(row)}>{row.personal_details.official_email_id}</button>, sortable: true },
    { name: "Reporting Manager",selector:(row)=>row.personal_details.reporting_manager, format: (row) => <button onClick={() => EditLeaves(row)}>{row.personal_details.reporting_manager}</button>, sortable: true },
    // { name: "Description", format: (row) => <button onClick={() => EditLeaves(row)}>{row.personal_details.name}</button>, sortable: true },

    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => EditLeaves(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
        </div>
      ),
    },
  ];

  const EditLeaves = (row) => {
    navigate(`/admin/hr/profile/edit/${row.user_id}`);
  };
  const getData = async () => {
    AxiosInstance.get(`/api/admin/user`)
      .then((data) => {
        setData(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
    // FilterLead();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-1 sm:px-5 py-20 mx-auto">
          <div>
            <div className="bg-[#0483c8] pb-2 pt-4">
              <div className="flex flex-wrap mx-auto">
                <div className="w-full flex-row  p-2   item-center flex text-white justify-end bg-[#0483c8] rounded-full ">
                  <h1 className="h-full  flex text-left w-full pl-2 sm:pl-8 items-center title-font text-xl">
                    Profiles
                  </h1>
                  <div className="flex flex-row justify-center sm:pr-8 items-center relative">
                    <label
                      for="name"
                      className="my-auto w-14 mr-2  py-3 title-font tracking-wider  text-sm decoration-white"
                    >
                      Search
                    </label>
                    <input
                      type="text"
                      onChange={(e) => onSearch(e.target.value)}
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
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
        </div>
      </section>

      {/* <div className="flex flex-wrap mx-auto mt-20 w-3/4">
        <div className="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded-full ">
          <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
            Profiles
          </h1>
          <div className="flex flex-row justify-center pr-8 items-center relative">
            <label
              for="name"
              className="my-auto px-4 pr py-3 title-font tracking-wider  text-sm decoration-white"
            >
              Search
            </label>
            <input
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div>
        <Table
          columns={columns}
          data={filteredData}
          onSearch={onSearch}
          title="COUPON CODES LIST"
        />
      </div> */}
    </>
  );
};

export default AdminProfile;

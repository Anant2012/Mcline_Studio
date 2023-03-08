import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";

function AdminGrievance() {
  // const User_id = "63e9411577ce9c26f2babd4f";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.user_id.username.toLowerCase().match(val.toLowerCase()) ||
          x.date.toLowerCase().match(val.toLowerCase()) ||
          // x.leaves.description.toLowerCase().match(val.toLowerCase()) ||
          x.grievance.reason.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Username", selector: (row) => row.user_id.username, format: (row) => <button onClick={() => EditGrievance(row)}>{row.user_id?.username}</button>, sortable: true, width: "300px" },
    {
      name: "Date", selector: (row) => row.created_At, format: (row) => <button onClick={() => EditGrievance(row)}>{moment(row.created_At).format('DD/MM/YYYY')}</button>, sortable: true, width: "200px"
    },
    { name: "Description", selector: (row) => row.grievance.reason, format: (row) => <button onClick={() => EditGrievance(row)}>{row.grievance.reason}</button>, sortable: true,wrap:true },
    {
      name: "Status",
      selector: (row) => row.status,
      format: (row) => <button onClick={() => EditGrievance(row)}>{row.grievance.status}</button>, sortable: true, width: "200px"
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit onClick={() => EditGrievance(row)} title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete onClick={() => DeleteLead(row)} title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
      width: "200px"
    },
  ];

  const EditGrievance = (row) => {
    // <EditGrievance leadId={row._id} />
    navigate(`/admin/hr/grievance/edit/${row._id}`);
    // console.log("lead",row._id)
  }
  const getData = async () => {
    AxiosInstance.get(`/api/admin/hr/greviances`)
      .then((data) =>
        setData(data.data.data)
      )
      .catch((err) => console.log("errorr", err));
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(`/api/admin/hr/greviances/${row._id}`);
      if (response.status === 200) {
        alert("✅Grievance deleted successfully!!");
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
        <div className="container px-1 sm:px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all Grievance
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-4">
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

export default AdminGrievance;

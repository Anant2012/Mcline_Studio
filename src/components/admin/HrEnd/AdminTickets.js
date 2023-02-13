import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table"

function AdminTickets() {
  const User_id = "63bbebd43e8e148ba852fd86";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Username", selector: (row) => row.name, sortable: true },
    { name: "Date", selector: (row) => moment(row.date).format('DD/MM/YYYY'), sortable: true },
    { name: "Has Issue With", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.capital, sortable: true },
    {
      name: "Status",
      selector: (row) => row.capital, sortable: true 
    }, {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit onClick={() => EditLead(row)} title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete onClick={() => DeleteLead(row)} title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
    },
  ];

  const EditLead = (row) => {
    // <EditLead leadId={row._id} />
    navigate(`/admin/hr/tickets/edit/${row._id}`);
    // console.log("lead",row._id)
  }
  const getData = async () => {
    AxiosInstance.get(`/api/leads/get/user/${User_id}`)
      .then((data) =>
        setData(data.data.data)
      )
      .catch((err) => console.log("errorr", err));
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(`/api/leads/delete/${row._id}`);
      if (response.status === 200) {
        alert("✅Review deleted successfully!!");
        window.location.reload()
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
  }
  const FilterLead = async (row) => {
    const data = {
      date_to: "1975-04-07",
      date_from: "1999-11-22"
    }
    try {
      const response = await AxiosInstance.post(`/api/leads/filter`, data)
      console.log(response, "fgh")
      if (response.status === 200) {
        console.log(response, "fgh")
      }
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }

  useEffect(() => {
    getData();
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
              List of all Raised Tickets
            </h1>
          </div>
          <div className="bg-indigo-500 pb-2 pt-2">    
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

export default AdminTickets;

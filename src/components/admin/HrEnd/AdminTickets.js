import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table"

function AdminTickets() {
  // const User_id = "63e9411577ce9c26f2babd4f";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.user_id.username.toLowerCase().match(val.toLowerCase()) ||
          x.created_at.toLowerCase().match(val.toLowerCase()) ||
          x.tickets.issued_item.toLowerCase().match(val.toLowerCase()) ||
          x.tickets.reason.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Username", selector: (row) => row.user_id.username, format: (row) => <button onClick={() => EditTicket(row)}>{row.user_id?.username}</button>, sortable: true },
    {
      name: "Date", selector: (row) => row.created_at, format: (row) => <button onClick={() => EditTicket(row)}>{moment(row.created_at).format('DD/MM/YYYY')}</button>, sortable: true
    },
    {
      name: "Has Issue With", selector: (row) => row.tickets.issued_item, format: (row) => <button onClick={() => EditTicket(row)}>{(row.tickets.issued_item.map((data, index) => {
        return (<>{row.tickets.issued_item.length != index + 1 ? `${data}, ` : `${data}`}</>)
      }))}</button>, sortable: true, wrap: true
    },

    { name: "Description", selector: (row) => row.tickets.reason, format: (row) => <button onClick={() => EditTicket(row)}>{row.tickets.reason}</button>, sortable: true, wrap: true },
    {
      name: "Status", selector: (row) => row.status,
      format: (row) => <button onClick={() => EditTicket(row)}>{(row.status)}</button>, sortable: true
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit onClick={() => EditTicket(row)} title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete onClick={() => DeleteTicket(row)} title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
    },
  ];

  const EditTicket = (row) => {
    navigate(`/admin/hr/tickets/edit/${row._id}`);
  }
  const getData = async () => {
    AxiosInstance.get(`/api/admin/hr/ticket`)
      .then((data) =>
        setData(data.data.data)
      )
      .catch((err) => console.log("errorr", err));
  };
  const DeleteTicket = async (row) => {
    try {
      const response = await AxiosInstance.delete(`/api/admin/hr/ticket/${row._id}`);
      if (response.status === 200) {
        alert("✅Ticket deleted successfully!!");
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
              List of all Raised Tickets
            </h1>
          </div>
          <div className="bg-[#0483c8] pb-2 pt-2">
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
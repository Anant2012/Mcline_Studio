import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import moment from "moment";
function AdminLead() {
  const User_id = "63e9411577ce9c26f2babd4f";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.company.toLowerCase().match(val.toLowerCase()) ||
          x.name.toLowerCase().match(val.toLowerCase()) ||
          x.status.toLowerCase().match(val.toLowerCase()) ||
          x.description.toString().match(val.toLowerCase()) ||
          x.date.toString().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Username", selector: (row) => row.user_id?.username, sortable: true },
    { name: "Date", selector: (row) => moment(row.date).format('DD/MM/YYYY'), sortable: true },
    // { name: "Date", selector: (row) => row.moment(date).format('MM/DD/YYYY'), sortable: true },
    { name: "Company ", selector: (row) => row.company, sortable: true },
    { name: "Person", selector: (row) => row.name, sortable: true },
    {
      name: "Lead Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
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
    navigate(`/admin/operation/edit/lead/${row._id}`);
    // console.log("lead",row._id)
  }
  const getData = async () => {
    AxiosInstance.get(`/api/admin/operations`)
      .then((data) =>
        setData(data.data.leads)
      )
      .catch((err) => console.log("errorr", err));
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(`/api/leads/delete/${row._id}`);
      if (response.status === 200) {
        alert("✅Lead deleted successfully!!");
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
    <section class="text-gray-600 body-font">

      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            View Lead
          </h1>
        </div>
        <div className="bg-indigo-500 pb-2 pt-4">
          <div class="flex mx-4 flex-wrap ">
            <div class="w-full flex-col sm:flex-row p-2 flex item-center flex text-white justify-end bg-indigo-500 rounded ">
              <div class="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">Filter:</div>
              <div class="flex flex-row justify-center item-center relative">
                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                  Date_from
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="flex flex-row justify-center item-center relative">
                <label for="name" class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                  Date_to
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  class="w-full focus:bg-opacity-5 bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
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
    </section>
  );
}

export default AdminLead;

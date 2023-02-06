import { useEffect, useState } from "react";
import Table from "../../../../constant/Table/Table"
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

function Lead() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const navigate = useNavigate();

  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.date.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Date", selector: (row) => row.date, sortable: true },
    // { name: "Date", selector: (row) => row.moment(date).format('MM/DD/YYYY'), sortable: true },
    { name: "Company ", selector: (row) => row.company, sortable: true },
    { name: "Person", selector: (row) => row.company, sortable: true },
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
          <FaUserEdit  onClick={()=> EditLead(row)} title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete onClick={() => DeleteLead(row)} title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
    },
  ];
  
  const EditLead = (row) => {
    // <EditLead leadId={row._id} />
    navigate(`/user/edit_lead_form/${row._id}`);
    // console.log("lead",row._id)
  }
  const getData = async () => {
    AxiosInstance.get("/api/leads/get")
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
        window.location.reload();
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            View Lead
          </h1>
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
    </section>
  );
}

export default Lead;

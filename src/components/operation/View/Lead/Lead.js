import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import Table from "../../../../constant/Table/Table";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import DownloadTableIcon from "../../../common/DownloadTableIcon";
import { useSelector } from "react-redux";
function Lead() {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [downloadData, setDownloadData] = useState([]);
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
    {
      name: "Date",
      selector: (row) => moment(row.date).format("DD/MM/YYYY"),
      format: (row) => (
        <button onClick={() => EditLead(row)}>
          {moment(row.date).format("DD/MM/YYYY")}
        </button>
      ),
      width:"200px",
      sortable: true,
    },
    {
      name: "Company ",
      selector: (row) => row.company,
      format: (row) => (
        <button onClick={() => EditLead(row)} key={row.company}>
          {row.company}
        </button>
      ),
      width:"350px",
      sortable: true,
    },
    {
      name: "Person",
      selector: (row) => row.name,
      format: (row) => (
        <button onClick={() => EditLead(row)}>{row.name}</button>
      ),
      width:"200px",
      sortable: true,
    },
    {
      name: "Lead Status",
      selector: (row) => row.status,
      format: (row) => (
        <button onClick={() => EditLead(row)}>{row.status}</button>
      ),
      width:"140px",
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      format: (row) => (
        <button onClick={() => EditLead(row)}>{row.description}</button>
      ),
      width:"250px",
      sortable: true,
      // wrap:true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => EditLead(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
        </div>
      ),
      width:"140px",
    },
  ];

  const EditLead = (row) => {
    // <EditLead leadId={row._id} />
    navigate(`/user/edit_lead/${row._id}`);
    // console.log("lead",row._id)
  };
  const filterByDate = () => {
    if (!startingDate || !endingDate) {
      alert("Select all filters");
      return;
    }
    const updatedData = data.filter(
      (x) => x.date >= startingDate && x.date <= endingDate
    );
    setFilteredData(updatedData);
  };
  const DeleteLead = async (row) => {
    try {
      const response = await AxiosInstance.delete(
        `/api/leads/delete/${row._id}`
      );
      if (response.status === 200) {
        alert("✅Review deleted successfully!!");
        // window.location.reload();
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
  };
  useEffect(() => {
    AxiosInstance.get(`/api/leads/get/user/${userId}`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  }, []);

  useEffect(() => {
    setFilteredData(data);
    setDownloadData(
      data?.map((item) => ({
        Date: moment(item.date).format("DD/MM/YYYY"),
        Company: item.company,
        Person: item.name,
        "Lead Status": item.status,
        Description: item.description,
      }))
    );
  }, [data]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-1 sm:px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            View Lead
          </h1>
        </div>
        <div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div className="lg:w-7/8 w-full mx-auto">
              <div className="flex mx-4 flex-wrap ">
                <div className="w-full flex-col sm:flex-row p-2 gap-3  item-center flex text-white justify-end bg-[#0483c8] rounded ">
                  <div className="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">
                    Filter:
                  </div>
                  <div className="flex flex-row justify-center item-center relative">
                    <label className="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                      Date_from
                    </label>
                    <input
                      type="date"
                      onChange={(e) => setStartingDate(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-row justify-center item-center relative">
                    <label className="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                      Date_to
                    </label>
                    <input
                      type="date"
                      onChange={(e) => setEndingDate(e.target.value)}
                      className="w-full focus:bg-opacity-5 bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div className="my-auto">
                    <button
                      onClick={filterByDate}
                      className="text-white  font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
                    >
                      Find
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Table
              columns={columns}
              data={filteredData}
              onSearch={onSearch}
              title="Selling Product List"
            />
            <DownloadTableIcon fileData={downloadData} fileName="Lead" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lead;

import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import {useNavigate} from "react-router-dom";

function AdminProject() {
  const User_id = "63bbebd43e8e148ba852fd86";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [totalPurchasedItems, setTotalPurchasedItems] = useState(0);

  const navigate = useNavigate();


  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    const updatedData = data.filter((x) =>
      x.name.toLowerCase().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
    setTotalPurchasedItems(
      updatedData?.reduce((acc, item) => acc + item.population, 0)
    );
  };
  const columns = [
    {
      name: "Project Code",
      selector: (row) => row.code,
      sortable: true,
      width: "160px",
    },
    {
      name: "Project Status",
      selector: (row) => row.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Company Name",
      selector: (row) => row.client_name,
      sortable: true,
      width: "160px",
    },

    {
      name: "Project",
      selector: (row) => row.project_name,
      sortable: true,
      width: "160px",
      wrap: true,
    },

    {
      name: "Hours",
      selector: (row) => row.approval_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "Bid",
      selector: (row) => row.approval_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "Approval Date",
      selector: (row) => row.approval_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "Submission Date",
      selector: (row) => row.submission_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "P.O.No.",
      id: "person",
      selector: (row) => row.person,
      sortable: true,
      width: "160px",
    },
    {
      name: "Net Days",
      selector: (row) => row.submission_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Type",
      selector: (row) => row.submission_date,
      sortable: true,
      width: "160px",
    },
    {
      name: "Resource",
      // selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Email (to)",
      selector: (row) => row.invoice.amount,
      sortable: true,
      width: "160px",
    },
    {
      name: "Email (cc)",
      // selector: (row) => row.invoice.amount,
      sortable: true,
      width: "160px",
    },
    {
      name: "Contact Person",
      selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Phone No.",
      selector: (row) => row.invoice.payment_status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Address",
      // selector: (row) => row.invoice.amount,
      sortable: true,
      width: "160px",
    },
    {
      name: "Reference",
      selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Comments",
      selector: (row) => row.invoice.invoive_number,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Date",
      // selector: (row) => row.invoice.amount,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Number",
      selector: (row) => row.invoice.invoive_number,
      sortable: true,
      width: "160px",
    },
    {
      name: "Due Date",
      // selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },

    {
      name: "Resource Rate",
      // selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Resource Cost",
      // selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Status",
      selector: (row) => row.invoice.status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Payment Status",
      selector: (row) => row.invoice.payment_status,
      sortable: true,
      width: "160px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit
            onClick={() => EditProject(row)}
            title="Edit"
            style={{ color: "blue", fontSize: "Large" }}
          />
          <MdDelete
            onClick={() => DeleteProject(row)}
            title="Delete"
            style={{ color: "red", marginLeft: "10px", fontSize: "Large" }}
          />
        </div>
      ),
    },
  ];

  const EditProject = (row) => {
    navigate(`/user/edit_project/${row._id}`);
  };
  const getData = async () => {
    AxiosInstance.get(`/api/project/get/${User_id}`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  };
  const DeleteProject = async (row) => {
    try {
      const response = await AxiosInstance.delete(
        `/api/project/delete/${row._id}`
      );
      if (response.status === 200) {
        alert("✅Project deleted successfully!!");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
    setTotalPurchasedItems(
      data?.reduce((acc, item) => acc + item.population, 0)
    );
  }, [data]);
  // cons

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              View Project
            </h1>
          </div>
          <div>
            <div className="bg-indigo-500 pb-2 pt-4">
              <div class="lg:w-7/8 w-full mx-auto">
                <div class="flex mx-4 flex-wrap ">
                  <div class="w-full flex-col p-2 flex item-center flex text-white justify-end bg-indigo-500 rounded ">
                    <div className="flex justify-end mb-2 mr-4 title-font tracking-wider font-medium text-md decoration-white">
                      Filter
                    </div>
                    <div className="flex justify-end my-1">
                      <div class="flex flex-row justify-center item-center relative">
                        <label
                          for="name"
                          class="my-auto px-4 py-3 whitespace-nowrap title-font tracking-wider font-medium text-sm decoration-white"
                        >
                          Date from
                        </label>
                        <input
                          type="date"
                          id="name"
                          name="name"
                          class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <div class="flex flex-row justify-center item-center relative">
                        <label
                          for="name"
                          class="my-auto px-4 py-3 whitespace-nowrap title-font tracking-wider font-medium text-sm decoration-white"
                        >
                          Date to
                        </label>
                        <input
                          type="date"
                          id="name"
                          name="name"
                          class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <div class="flex flex-row justify-center item-center relative">
                        <button className="text-white text-sm font-medium bg-indigo-800 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-700 rounded ml-3 text-sm mr-3 whitespace-nowrap">
                          Find
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end my-1">
                      <div class="flex flex-row justify-center item-center relative">
                        <label
                          for="name"
                          class="removeBtn my-auto px-4 whitespace-nowrap py-3 title-font tracking-wider font-medium text-sm decoration-white"
                        >
                          Invoice Amount from
                        </label>
                        <input
                          type="number"
                          id="name"
                          name="name"
                          class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <div class="flex flex-row justify-center item-center relative">
                        <label
                          for="name"
                          class="removeBtn my-auto px-4 py-3 whitespace-nowrap title-font tracking-wider font-medium text-sm decoration-white"
                        >
                          Invoice Amount to
                        </label>
                        <input
                          type="number"
                          id="name"
                          name="name"
                          class="appearance-none w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <div class="flex flex-row justify-center item-center relative">
                        <button className="text-white text-sm font-medium bg-indigo-800 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-700 rounded text-sm mr-3  ml-3 whitespace-nowrap">
                          Find
                        </button>
                      </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminProject;

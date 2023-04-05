import "../../operation/View/Project/Project.css";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import DownloadTableIcon from "../../common/DownloadTableIcon";

function AdminProject() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [totalPurchasedItems, setTotalPurchasedItems] = useState(0);
  const [startingAmount, setStartingAmout] = useState();
  const [endingAmount, setEndingAmount] = useState();
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [filterDate, setFilterDate] = useState();
  const [downloadData, setDownloadData] = useState([]);

  const navigate = useNavigate();

  const filterByProperty = (prop) => {
    const startingComp =
      prop === "invoice_amount" ? Number(startingAmount) : startingDate;
    const endingComp =
      prop === "invoice_amount" ? Number(endingAmount) : endingDate;
    if (!startingComp || !endingComp) {
      alert("Select all filters");
      return;
    }
    const updatedData = data.filter(
      (x) => x[prop] >= startingComp && x[prop] <= endingComp
    );
    setFilteredData(updatedData);
  };
  const onSearch = (val) => {
    const updatedData = data?.filter(
      (x) =>
        x.client_name?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.user_id?.username?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.code?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.status?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.invoice_amount?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.project_name?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.hours?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.bid?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.approval_date.toLowerCase().match(val.toLowerCase()) ||
        x.submission_date.toLowerCase().match(val.toLowerCase()) ||
        x.PO_number?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.net_days.toLowerCase().match(val.toLowerCase()) ||
        x.invoice_type.toLowerCase().match(val.toLowerCase()) ||
        x.email_to.toLowerCase().match(val.toLowerCase()) ||
        x.resource.toLowerCase().match(val.toLowerCase()) ||
        x.email_cc.toLowerCase().match(val.toLowerCase()) ||
        x.contact_person.toLowerCase().match(val.toLowerCase()) ||
        x.phone.toLowerCase().match(val.toLowerCase()) ||
        x.address.toLowerCase().match(val.toLowerCase()) ||
        x.invoice.resource_cost.toLowerCase().match(val.toLowerCase()) ||
        x.description.toString().toLowerCase().match(val.toLowerCase()) ||
        x.invoice_date?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.invoice_number?.toString().toLowerCase().match(val.toLowerCase()) ||
        x.invoice.due_date.toLowerCase().match(val.toLowerCase()) ||
        x.invoice.status.toLowerCase().match(val.toLowerCase()) ||
        x.invoice.payment_status.toLowerCase().match(val.toLowerCase()) ||
        x.invoice_amount.toString().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
    setTotalPurchasedItems(
      updatedData?.reduce((acc, item) => acc + item.invoice_amount, 0)
    );
  };
  const columns = [
    {
      name: "User Name",
      selector: (row) => row.user_id?.username,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {row.user_id?.username}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Project Code",
      selector: (row) => row.code,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.code}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Project Status",
      selector: (row) => row.status,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.status}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Company Name",
      selector: (row) => row.client_name,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.client_name}</button>
      ),
      sortable: true,
      width: "160px",
    },

    {
      name: "Invoice Amount",
      selector: (row) => row.invoice_amount,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.invoice_amount}</button>
      ),
      sortable: true,
      width: "160px",
      wrap: true,
    },
    {
      name: "Project",
      selector: (row) => row.project_name,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.project_name}</button>
      ),
      sortable: true,
      width: "160px",
      wrap: true,
    },

    {
      name: "Hours",
      selector: (row) => row.hours,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.hours}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Bid",
      selector: (row) => row.bid,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.bid}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Approval Date",
      selector: (row) => row.approval_date,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {moment(row.approval_date).format("DD/MM/YYYY")}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Submission Date",
      selector: (row) => row.submission_date,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {moment(row.submission_date).format("DD/MM/YYYY")}
        </button>
      ),
      // format: (row) => moment(row.submission_date).format("DD/MM/YYYY"),
      sortable: true,
      width: "160px",
    },
    {
      name: "P.O.No.",
      selector: (row) => row.PO_number,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.PO_number}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Net Days",
      selector: (row) => row.net_days,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.net_days}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Type",
      selector: (row) => row.invoice_type,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.invoice_type}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Resource",
      selector: (row) => row.resource,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.resource}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Email (to)",
      selector: (row) => row.email_to,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.email_to}</button>
      ),
      sortable: true,
      width: "160px",
      wrap: true,
    },
    {
      name: "Email (cc)",
      selector: (row) => row.email_cc,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.email_cc}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Reference",
      selector: (row) => row.contact_person,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.contact_person}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Phone No.",
      selector: (row) => row.phone,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.phone}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.address}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.description}</button>
      ),
      sortable: true,
      width: "340px",
    },
    {
      name: "Recource Cost",
      selector: (row) => row.invoice.resource_cost,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {row.invoice.resource_cost}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Resource Rate",
      selector: (row) => row.invoice.resource_rate,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {row.invoice.resource_rate}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Date",
      selector: (row) => row.invoice_date,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {moment(row.invoice?.invoice_date).format("DD/MM/YYYY")}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Number",
      selector: (row) => row.invoice_number,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {row.invoice.invoice_number}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Due Date",
      selector: (row) => row.invoice.due_date,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {moment(row.invoice.due_date).format("DD/MM/YYYY")}
        </button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Status",
      selector: (row) => row.invoice.status,
      format: (row) => (
        <button onClick={() => EditProject(row)}>{row.invoice.status}</button>
      ),
      sortable: true,
      width: "160px",
    },
    {
      name: "Payment Status",
      selector: (row) => row.invoice.payment_status,
      format: (row) => (
        <button onClick={() => EditProject(row)}>
          {row.invoice.payment_status}
        </button>
      ),
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
    navigate(`/admin/operation/edit/project/${row._id}`);
  };

  const getData = async () => {
    AxiosInstance.get(`/api/admin/operations`)
      .then((data) => setData(data.data.projects))
      .catch((err) => console.log("errorr", err));
  };
  const DeleteProject = async (row) => {
    try {
      const response = await AxiosInstance.delete(
        `/api/admin/operations/project/delete/${row._id}`
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
      data?.reduce((acc, item) => acc + Number(item.invoice_amount), 0)
    );
    setDownloadData(
      data?.map((item) => ({
        "User Name": item.user_id?.username,
        "Project Code": item.code,
        "Project Status": item.status,
        "Company Name": item.client_name,
        "Invoice Amount": item.invoice_amount,
        Project: item.project_name,
        Hours: item.hours,
        Bid: item.bid,
        "Approval Date": item.approval_date,
        "Submission Date": item.submission_date,
        "P.O.No.": item.PO_number,
        "Net Days": item.net_days,
        "Invoice Type": item.invoice_type,
        Resource: item.resource,
        "Email (to)": item.email_to,
        "Email (cc)": item.email_cc,
        "Contact Person": item.contact_person,
        "Phone No.": item.phone,
        Address: item.address,
        Description: item.description,
        "Resource Cost": item.invoice.resource_cost,
        "Resource Rate": item.invoice.resource_rate,
        "Invoice Date": item.invoice_date,
        "Invoice Number": item.invoice_number,
        "Due Date": item.invoice.due_date,
        "Invoice Status": item.invoice.status,
        "Payment Status": item.invoice.payment_status,
      }))
    );
  }, [data]);

  return (
    <>
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              View Project
            </h1>
          </div>
          <div>
            <div className="bg-[#0483c8] pb-2 pt-4">
              <div className="lg:w-7/8 w-full mx-auto">
                <div className="flex mx-4 flex-wrap ">
                  <div className="w-full sm:w-2/3 flex-col p-2  item-center flex text-white justify-end bg-[#0483c8] rounded ">
                    <div className="grid grid-cols-6 grid-rows-3 gap-2">
                      <div className="col-span-6 text-lg">Filter</div>

                      <div className="my-auto items-center flex justify-center">
                        <select
                          className="h-[30px] cursor-pointer outline-0 w-[180px] border-[0px] text-base text-white bg-transparent "
                          onChange={(e) => setFilterDate(e.target.value)}
                        >
                          <option className="text-gray-600">
                            Approval Date
                          </option>
                          <option className="text-gray-600">
                            Submission Date
                          </option>
                        </select>
                      </div>
                      <div className="my-auto text-right">Date From</div>
                      <div className="my-auto">
                        <input
                          type="date"
                          onChange={(e) => setStartingDate(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto text-right">Date To</div>
                      <div className="my-auto">
                        <input
                          type="date"
                          onChange={(e) => setEndingDate(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto">
                        <button
                          onClick={() =>
                            filterByProperty(
                              filterDate === "Approval Date"
                                ? "approval_date"
                                : "submission_date"
                            )
                          }
                          className="text-white text-sm font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
                        >
                          Find
                        </button>
                      </div>

                      <div className="my-auto col-span-2 text-right whitespace-nowrap">
                        Invoice Amount From
                      </div>
                      <div className="my-auto">
                        <input
                          type="number"
                          onChange={(e) => setStartingAmout(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto text-right">
                        Invoice Amount To
                      </div>
                      <div className="my-auto">
                        <input
                          type="number"
                          onChange={(e) => setEndingAmount(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto">
                        <button
                          onClick={() => filterByProperty("invoice_amount")}
                          className="text-white text-sm font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
                        >
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
              <div className="flex flex-row justify-between w-full justify-center items-center">
                <div className="ml-4 text-slate-100 text-md font-normal">
                  Total Amount : {totalPurchasedItems}
                </div>
                <div>
                  <DownloadTableIcon
                    fileData={downloadData}
                    fileName="Project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container px-1 sm:px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              View Project
            </h1>
          </div>
          <div>
            <div className="bg-[#0483c8] pb-2 pt-4">
              <div className="lg:w-7/8 w-full mx-auto">
                <div className="flex mx-4 flex-wrap ">
                  <div className="w-full sm:w-2/3 flex-col p-2  item-center flex text-white justify-end bg-[#0483c8] rounded ">
                    <div className="grid grid-cols-6 grid-rows-3 gap-2">
                      <div className="col-span-6 text-lg text-center sm:text-left">
                        Filter
                      </div>
                      <div className="my-auto col-span-6 sm:col-span-1 items-center flex justify-center">
                        <select
                          className="h-[30px] cursor-pointer outline-0 w-[180px] border-[0px] text-base text-white bg-transparent "
                          onChange={(e) => setFilterDate(e.target.value)}
                        >
                          <option className="text-gray-600">
                            Approval Date
                          </option>
                          <option className="text-gray-600">
                            Submission Date
                          </option>
                        </select>
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center sm:text-right">
                        Date From
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center">
                        <input
                          type="date"
                          onChange={(e) => setStartingDate(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 py-1 sm:py-0 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center sm:text-right">
                        Date To
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center">
                        <input
                          type="date"
                          onChange={(e) => setEndingDate(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 py-1 sm:py-0  leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto col-span-6 sm:col-span-1 text-center">
                        <button
                          onClick={() =>
                            filterByProperty(
                              filterDate === "Approval Date"
                                ? "approval_date"
                                : "submission_date"
                            )
                          }
                          className="text-white font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 text-sm mr-3 whitespace-nowrap"
                        >
                          Find
                        </button>
                      </div>

                      <div className="my-auto col-span-3 sm:col-span-2 text-center sm:text-right sm:whitespace-nowrap">
                        Invoice Amount From
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center sm:text-right">
                        <input
                          type="number"
                          onChange={(e) => setStartingAmout(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center sm:text-right">
                        Invoice Amount To
                      </div>
                      <div className="my-auto col-span-3 sm:col-span-1 text-center sm:text-right">
                        <input
                          type="number"
                          onChange={(e) => setEndingAmount(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="my-auto text-center col-span-6 sm:col-span-1">
                        <button
                          onClick={() => filterByProperty("invoice_amount")}
                          className="text-white text-sm font-medium bg-[#03527d] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#024264] rounded ml-3 mr-3 whitespace-nowrap"
                        >
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
              <div className="flex flex-row justify-between w-full  items-center">
                <div className="ml-4 text-slate-100 text-md font-normal">
                  Total Amount : {totalPurchasedItems}
                </div>
                <div>
                  <DownloadTableIcon
                    fileData={downloadData}
                    fileName="Project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminProject;

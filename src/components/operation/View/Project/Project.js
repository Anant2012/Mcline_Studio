import "./Project.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import Table from "../../../../constant/Table/Table";
import DownloadTableIcon from "../../../common/DownloadTableIcon";

const Project = () => {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [totalPurchasedItems, setTotalPurchasedItems] = useState(0);
  const [startingAmount, setStartingAmout] = useState();
  const [endingAmount, setEndingAmount] = useState();
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [filterDate, setFilterDate] = useState();

  const navigate = useNavigate();

  const onSearch = (val) => {
    const updatedData = data?.filter(
      (x) =>
        x.client_name.toLowerCase().match(val.toLowerCase()) ||
        x.code.toLowerCase().match(val.toLowerCase()) ||
        x.resource.toLowerCase().match(val.toLowerCase()) ||
        // x.description.toString().match(val.toLowerCase()) ||
        x.invoice_amount.toString().match(val.toLowerCase())

    );
    setFilteredData(updatedData);
    setTotalPurchasedItems(
      updatedData?.reduce((acc, item) => acc + item.invoice_amount, 0)
    );
  };
  const columns = [
    {
      name: "Project Code",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.code}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Project Status",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.status}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Company Name",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.client_name}</button>,
      sortable: true,
      width: "160px",
    },

    {
      name: "Project",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.project_name}</button>,
      sortable: true,
      width: "160px",
      wrap: true,
    },

    {
      name: "Hours",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.hours}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Bid",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.bid}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Approval Date",
      selector: (row) => <button onClick={() => EditProject(row)}>{moment(row.approval_date).format("DD/MM/YYYY")}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Submission Date",
      selector: (row) => <button onClick={() => EditProject(row)}>{moment(row.submission_date).format("DD/MM/YYYY")}</button>,
      // selector: (row) => moment(row.submission_date).format("DD/MM/YYYY"),
      sortable: true,
      width: "160px",
    },
    {
      name: "P.O.No.",
      id: "person",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.PO_number}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Net Days",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.net_days}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Type",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.invoice_type}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Resource",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.resource}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Email (to)",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.email_to}</button>,
      sortable: true,
      width: "160px",
      wrap: true
    },
    {
      name: "Email (cc)",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.email_cc}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Contact Person",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.contact_person}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Phone No.",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.phone}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Address",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.address}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Description",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.description}</button>,
      sortable: true,
      width: "340px",
    },
    // {
    //   name: "Reference",
    //   selector: (row) => <button onClick={() => EditProject(row)}>{row.username}</button>.reference,
    //   sortable: true,
    //   width: "160px",
    // },
    // {
    //   name: "Comments",
    //   selector: (row) => <button onClick={() => EditProject(row)}>{row.username}</button>.comments,
    //   sortable: true,
    //   width: "160px",
    // },
    {
      name: "Invoice Date",
      selector: (row) => <button onClick={() => EditLead(row)}>{moment(row.invoice?.invoice_date).format("DD/MM/YYYY")}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Number",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.invoice.invoice_number}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Due Date",
      selector: (row) => <button onClick={() => EditLead(row)}>{moment(row.invoice.due_date).format("DD/MM/YYYY")}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Invoice Status",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.invoice.status}</button>,
      sortable: true,
      width: "160px",
    },
    {
      name: "Payment Status",
      selector: (row) => <button onClick={() => EditProject(row)}>{row.invoice.payment_status}</button>,
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
  const getData = async () => {
    AxiosInstance.get(`/api/project/get/user/${userId}`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
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

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            View Project
          </h1>
        </div>
        <div>
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div class="lg:w-7/8 w-full mx-auto">
              <div class="flex mx-4 flex-wrap ">
                <div class="w-full sm:w-2/3 flex-col p-2 flex item-center flex text-white justify-end bg-[#0483c8] rounded ">
                  <div className="grid grid-cols-5 grid-rows-3 gap-2">
                    <div className="col-span-5 text-lg">Filter</div>

                    <div className="my-auto text-right flex">
                      <select
                        className="text-black text-sm h-2/5 mr-2 w-3/6"
                        onChange={(e) => setFilterDate(e.target.value)}
                      >
                        <option>Approval Date</option>
                        <option>Submission Date</option>
                      </select>
                      Date From
                    </div>
                    <div className="my-auto">
                      <input
                        type="date"
                        onChange={(e) => setStartingDate(e.target.value)}
                        class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="my-auto text-right">Date To</div>
                    <div className="my-auto">
                      <input
                        type="date"
                        onChange={(e) => setEndingDate(e.target.value)}
                        class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
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

                    <div className="my-auto text-right whitespace-nowrap">
                      Invoice Amount From
                    </div>
                    <div className="my-auto">
                      <input
                        type="number"
                        onChange={(e) => setStartingAmout(e.target.value)}
                        class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="my-auto text-right">Invoice Amount To</div>
                    <div className="my-auto">
                      <input
                        type="number"
                        onChange={(e) => setEndingAmount(e.target.value)}
                        class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
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
            <DownloadTableIcon fileData={data} fileName="Project" />
          </div>
        </div>
      </div>
      <div>Total Amount : {totalPurchasedItems}</div>
    </section>
  );
};

export default Project;

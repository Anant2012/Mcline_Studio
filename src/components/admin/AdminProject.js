import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table"
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AdminProject() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [totalPurchasedItems, setTotalPurchasedItems] = useState(0);
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
    { name: "Date", selector: (row) => row.approval_date, sortable: true },
    { name: "Code", selector: (row) => row.code, sortable: true },
    { name: "Company", selector: (row) => row.company, sortable: true },
    {
      name: "Person",
      selector: (row) => row.person,
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row.project_name,
      sortable: true,
    },
    {
      name: "Project Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Invoice Amount",
      selector: (row) => row.invoice.amount,
      sortable: true,
    },
    {
      name: "Invoice Date",
      selector: (row) => row.invoice.amount,
      sortable: true,
    },
    {
      name: "Invoice Status",
      selector: (row) => row.invoice.status,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.invoice.payment_status,
      sortable: true,
    },
    {
      name: "Invoice Number",
      selector: (row) => row.invoice.invoive_number,
      sortable: true,
    },
    {
      name: "Invoice Due Date",
      selector: (row) => row.invoice.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div style={{ display: "flex" }}>
          <FaUserEdit title="Edit" style={{ color: "blue", fontSize: "Large" }} />
          <MdDelete title="Delete" style={{ color: "red", marginLeft: "10px", fontSize: "Large" }} />
        </div>
      ),
    },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
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
        <div class="flex mx-4 flex-wrap ">
                        <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-indigo-500 rounded ">
                            <div class="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">Filter:</div>
                            <div class="flex flex-row justify-center item-center relative">
                                <label for="name" class="whitespace-nowrap my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                                    Invoice Amount_from
                                </label>
                                <input
                                    type="number"
                                    id="name"
                                    name="name"
                                    class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div class="flex flex-row justify-center item-center relative">
                                <label for="name" class="whitespace-nowrap my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white">
                                    Invoice Amount_to
                                </label>
                                <input
                                    type="number"
                                    id="name"
                                    name="name"
                                    class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
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
            title="Selling Product List"
          />

        </div>
          <span style={{ marginLeft: "10px" }}>
            Total Payment : {totalPurchasedItems}
          </span>
      </div>
    </section>
  );
}

export default AdminProject;

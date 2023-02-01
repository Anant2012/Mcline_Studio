import { useEffect, useState } from "react";
import Table from "../../../../constant/Table/Table"
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Project() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Date", selector: (row) => row.name, sortable: true },
    { name: "Code", selector: (row) => row.name, sortable: true },
    { name: "Company", selector: (row) => row.capital, sortable: true },
    {
      name: "Person",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Project Status",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Invoice Amount",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Invoice Date",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Invoice Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Payment Number",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Invoice Due Date",
      selector: (row) => <button className="btn btn-success">Active</button>,
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
  }, [data]);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            View Project
          </h1>
        </div>
        <div className="mt-3">
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

export default Project;

import React from "react";

import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table"

function AdminLeaves() {
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
    { name: "Username", selector: (row) => row.name, sortable: true },
    { name: "To", selector: (row) => row.name, sortable: true },
    { name: "From", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.capital, sortable: true },
    {
      name: "Status",
      selector: (row) => row.capital, sortable: true 
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
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all Applied Leaves
            </h1>
          </div>
          <div className="bg-indigo-500 pb-2 pt-4">    
          <div class="flex flex-wrap mx-4">
            <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-indigo-500 rounded ">
              <div class="my-auto px-4 py-3 title-font tracking-wider font-medium text-md decoration-white">
                Filter:
              </div>
              <div class="flex flex-row justify-center item-center relative">
                <label
                  for="name"
                  class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white"
                >
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
                <label
                  for="name"
                  class="my-auto px-4 py-3 title-font tracking-wider font-medium text-sm decoration-white"
                >
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

    </>
  );
}

export default AdminLeaves;

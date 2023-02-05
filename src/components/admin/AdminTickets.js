import React from "react";

import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";

function AdminTickets() {
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
      selector: (row) => <input type="checkbox" />,
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
          List of all Raised Tickets
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

    </>
  );
}

export default AdminTickets;

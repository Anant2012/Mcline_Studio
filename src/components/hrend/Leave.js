import React from 'react'

import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table"


function Leave() {
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
      { name: "To", selector: (row) => row.name, sortable: true },
      { name: "From", selector: (row) => row.name, sortable: true },
      { name: "Description", selector: (row) => row.capital, sortable: true },
      {
        name: "Status",
        selector: (row) => (
          <input type="checkbox" />
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
    <>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Leaves</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="w-full xl:w-1/2 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="date" class="leading-7 text-sm text-gray-600">Date To</label>
            <input type="date" id="date_from" name="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="date" class="leading-7 text-sm text-gray-600">Date From</label>
            <input type="date" id="date_to" name="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <h1 class="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">List of all Applied Leaves</h1>

          <section class="text-gray-600 body-font">
      <div class="container w-full mt-4">
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

        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Leave;
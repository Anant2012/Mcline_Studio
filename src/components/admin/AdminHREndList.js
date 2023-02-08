import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";

function AdminHREndList() {
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
    { name: "Name", selector: (row) => row.capital, sortable: true },
    { name: "Email", selector: (row) => row.name, sortable: true },
    { name: "Phone", selector: (row) => row.name, sortable: true },
    { name: "Password", selector: (row) => row.capital, sortable: true },
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
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12  mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              List of all HR
            </h1>
          </div>
          <div className="bg-indigo-500 pb-2 pt-4">
          <div class="flex flex-wrap mx-4">
            <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-indigo-500 rounded ">
              <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
                HR List
              </h1>
              <div class="flex flex-row justify-center pr-8 items-center relative">
                <button className="text-white text-sm font-medium bg-indigo-800 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-sm mr-3">
                  Add
                </button>

                <button className="text-white text-sm font-medium bg-indigo-800 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-sm">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto">
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

export default AdminHREndList;

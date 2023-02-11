import React from "react";
import background from './ticketsimg.jpg';
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import moment from "moment/moment";

function Tickets() {
  const User_id = "63bbebd43e8e148ba852fd86";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const [other, setother] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);


  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.tickets.reason.toLowerCase().match(val.toLowerCase()) ||
          x.row.created_at.reason.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Date", selector: (row) => moment(row.created_at).format('DD/MM/YYYY'), sortable: true },
    {
      name: "Has Issue With", selector: (row) => (row.tickets.issued_item.map((data, index) => {
        return (<>{row.tickets.issued_item.length != index+1  ? `${data}, ` : `${data}`}</>) })), sortable: true, wrap: true },

    { name: "Description", selector: (row) => row.tickets.reason, sortable: true },
    {
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Publish" ? (
            <button
              className="btn btn-secondary"
            >
              Resolved
            </button>
          ) : (
            <button
              className="btn btn-success"
            >
              Sent
            </button>
          )}
        </div>), sortable: true
    },
  ];

  const AddTicket = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      reason: description,
      issued_item: other,
    }
    try {
      console.log(other)
      const response = await AxiosInstance.post(`/api/hr/ask/ticket/${User_id}`, data)
      if (response.status === 200) {
        alert("✅ Leave Sent SuccesFully");
      }

      setDescription("");
      setother([]);
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }

  const getData = async () => {
    AxiosInstance.get(`/api/hr/get/tickets/${User_id}`)
      .then((data) =>
        setData(data.data.data)
      )
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);


  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(20%)'
  };

  return (
    <>

      <div className="flex flex-row">
        <div className="d-none xl:w-1/4 m-2 bg-slate-700 rounded-lg" style={styles}></div>
        <section class="text-gray-600 w-full xl:w-3/4 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Tickets
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <form>
              <div class="w-full xl:w-3/5 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-full sm:w-1/3">
                    <div class="relative flex flex-col">
                      <label for="name" class="leading-7 text-sm text-gray-600">
                        Has Issue With
                      </label>
                      <div className="flex ml-2 flex-col">
                        <div className="flex items-center">
                          <input value="mouse"
                            onChange={(e) => setother([...other, "mouse"])} type="checkbox" id="box" name="box" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Mouse
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="box" name="box[]" value="keyboard"
                            onChange={(e) => setother([...other, "keyboard"])} />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Keyboard
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Laptop"
                            onChange={(e) => setother([...other, "Laptop"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Laptop
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Swipe Card"
                            onChange={(e) => setother([...other, "Swipe Card"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Swipe Card
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="ID Card"
                            onChange={(e) => setother([...other, "ID Card"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            ID Card
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="chair"
                            onChange={(e) => setother([...other, "chair"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Chair
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Headphones"
                            onChange={(e) => setother([...other, "Headphones"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Headphones
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="others"
                            onChange={(e) => setother([...other, "others"])} type="checkbox" id="box" name="box[]" />
                          <label class="ml-2 leading-7 text-sm text-gray-600">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 w-full sm:w-2/3">
                    <div class="w-full">
                      <div class="relative">
                        <label
                          for="message"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Send Email To
                        </label>
                        <input
                          type="email"
                          id="date_to"
                          name="date"
                          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div class="relative mt-2">
                      <label for="message" class="leading-7 text-sm text-gray-600">
                        Explain Your Issue
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 sm:h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>

                  <div class="p-2 w-full">
                    <button onClick={AddTicket} disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <h1 class="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">
          List of all Raised Tickets
        </h1>

        <section class="text-gray-600 mt-[40px] body-font">
          <div className="bg-indigo-500 pb-2 pt-2">
            <div class="container mx-auto w-full mt-4">
              <div>
                <Table
                  columns={columns}
                  data={filteredData}
                  onSearch={onSearch}
                // title="COUPON CODES LIST"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tickets;

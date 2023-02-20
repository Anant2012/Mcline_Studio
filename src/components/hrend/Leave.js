import React from "react";
import background from "./leaveimg.jpg";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import moment from "moment";
import { useSelector } from "react-redux";
function Leave() {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [date_to, setDate_to] = useState("");
  const [date_from, setDate_from] = useState("");
  const [net_days, setNet_days] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.leaves.date_to.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.date_from.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.description.toLowerCase().match(val.toLowerCase()) ||
          x.leaves.status.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "To", selector: (row) => row.leaves.date_to, sortable: true },
    { name: "From", selector: (row) => row.leaves.date_from, sortable: true },
    { name: "Description", selector: (row) => row.leaves.description, sortable: true },
    {
      name: "Status",
      selector: (row) => (row.leaves.status), sortable: true
    },
  ];

  const AddLeave = async (e) => {
    if (moment(date_from) < moment()) {
      alert("Date Should be Greater than today");
      return;
    }
    if (moment(date_to) < moment()) {
      alert("Date Should be Greater than today");
      return;
    }
    // if (moment(date_to) > moment(date_from)) {
    //   alert("Invalid date");
    //   return;
    // }
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      date_to: date_to,
      date_from: date_from,
      description: description,
      net_days: net_days,
      email_cc:email,
    }
    try {
      const response = await AxiosInstance.post(`/api/hr/ask/leaves/${userId}`, data)
      if (response.status === 200) {
        alert("✅ Leave Sent SuccesFully");
        setDate_to("");
        setDate_from("");
        setEmail("")
        setDescription("");
        setNet_days("")
        setIsDisabled(true);
      }
    } catch (error) {
      alert(error.response.data.msg);

    };
  }

  const getData = async () => {
    AxiosInstance.get(`/api/hr/get/leaves/${userId}`)
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(20%)",
  };

  return (
    <>
      <div className="flex flex-row">
        <div
          className="d-none xl:w-1/4 m-2 bg-slate-700 rounded-lg"
          style={styles}
        ></div>
        <section class="text-gray-600 w-full xl:w-3/4 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Leaves
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>

            <div class="w-full xl:w-3/5 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="date" class="leading-7 text-sm text-gray-600">
                      Date To
                    </label>
                    <input
                      type="date"
                      id="date_to"
                      value={date_to}
                      onChange={(e) => setDate_to(e.target.value)}
                      name="date_to"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="date" class="leading-7 text-sm text-gray-600">
                      Date From
                    </label>
                    <input
                      type="date"
                      id="date_to"
                      value={date_from}
                      onChange={(e) => setDate_from(e.target.value)}
                      name="date_from"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      No. of Days
                    </label>
                    <input
                      type="number"
                      id="email"
                      value={net_days}
                      onChange={(e) => setNet_days(e.target.value)}
                      name="date"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Send Email To
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="date"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button onClick={AddLeave} disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-[#047EC1] border-0 py-2 px-8 focus:outline-none hover:bg-[#0473af] rounded text-lg">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <h1 class="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">
          List of all Applied Leaves
        </h1>

        <section class="text-gray-600 body-font mt-8">
          <div className="bg-[#0483c8] pb-2 pt-4">
            <div class="container mx-auto w-full">
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
      </div>
    </>
  );
}

export default Leave;

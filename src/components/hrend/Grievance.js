import React from "react";
import background from "./grievanceimg.jpg";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";

function Grievance() {
  const User_id = "63bbebd43e8e148ba852fd86";
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [email, setEmail] = useState("");
  const [statement, setStatement] = useState("");
  
  const [isDisabled, setIsDisabled] = useState(false);

  const AddGrievance = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      // user_id: User_id,
      greviance: statement,
    }
    try {
      const response = await AxiosInstance.post(`/api/ask/greviances/${User_id}`, data)
      if (response.status === 200) {
        alert("✅ Grievance Sent SuccesFully");
      }
      setEmail("")
      setStatement("");
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }
  

  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.date_to.toLowerCase().match(val.toLowerCase()) ||
          x.date_from.toLowerCase().match(val.toLowerCase()) ||
          x.description.toLowerCase().match(val.toLowerCase())
      )
    );
  };
  const columns = [
    { name: "Date", selector: (row) => row.name, sortable: true },
    // { name: "From", selector: (row) => row.name, sortable: true },
    { name: "Statement", selector: (row) => row.capital, sortable: true },
    {
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Publish" ? (
            <button
              className="btn btn-secondary"
            // onClick={() => handlePublishButton(row)}
            >
              Resolved
            </button>
          ) : (
            <button
              className="btn btn-success"
            // onClick={() => handlePublishButton(row)}
            >
              Sent
            </button>
          )}
        </div>), sortable: true
    },
  ];


  const getData = async () => {
    AxiosInstance.get(`/api/leads/get/user/${User_id}`)
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
      <div className="d-none xl:w-1/4 m-2 bg-slate-700 rounded-lg" style={styles}></div>
      <section class="text-gray-600 w-full xl:w-3/4 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Grievance
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div class="w-full xl:w-3/5 mx-auto">
            <div class="flex flex-wrap -m-2">
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
                      id="date_to"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Statement
                  </label>
                  <textarea
                    id="message"
                      name="message"
                      value={statement}
                      onChange={(e) => setStatement(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                  <button onClick={AddGrievance} disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      </div>

      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <h1 class="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">
                  List of all Grievance
                </h1>

                <section class="text-gray-600 mt-8 body-font">
                <div className="bg-indigo-500 pb-2 pt-2">    
                <div class="container mx-auto w-full mt-4">
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

export default Grievance;

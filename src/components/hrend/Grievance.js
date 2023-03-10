import React from "react";
import background from "./grievance.png";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import moment from "moment";
import { useSelector } from "react-redux";
function Grievance() {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [email, setEmail] = useState("");
  const [statement, setStatement] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const AddGrievance = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      statement: statement,
      email_cc: email,
    }
    try {
      const response = await AxiosInstance.post(`/api/hr/ask/greviances/${userId}`, data)
      if (response.status === 200) {
        alert("✅ Grievance Sent SuccesFully");
        setEmail("")
        setStatement("");
        setIsDisabled(false);
      }
    } catch (error) {
      alert(error.response.data.msg);

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
    { name: "Date", selector: (row) => moment(row.created_At).format('DD/MM/YYYY'), sortable: true },
    // { name: "From", selector: (row) => row.name, sortable: true },
    { name: "Statement", selector: (row) => row.grievance.reason, sortable: true },
    {
      name: "Status",
      selector: (row) => (row.grievance.status), sortable: true
    },
  ];


  const getData = async () => {
    AxiosInstance.get(`/api/hr/get/greviances/${userId}`)
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
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute" viewBox="0 0 1440 320"><path fill="#047EC1" fill-opacity="0.05" d="M0,96L60,133.3C120,171,240,245,360,229.3C480,213,600,107,720,106.7C840,107,960,213,1080,261.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="flex flex-row">
        <div className="hidden sm:block  xl:w-1/4 my-2 mr-2 ml-28 rounded-lg" style={styles}></div>
        <section className="text-gray-600 w-full xl:w-3/4 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Grievance
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <form onSubmit={AddGrievance}>
            <div className="w-full xl:w-3/5 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Send Email To
                    </label>
                    <input
                      type="email"
                      id="date_to"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">
                      Statement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={statement}
                      onChange={(e) => setStatement(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-[#047EC1] border-0 py-2 px-8 focus:outline-none hover:bg-[#0473af] rounded text-lg">Submit</button>
                </div>

              </div>
            </div>
          </form>
          </div>
        </section>
      </div>

      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <h1 className="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">
          List of all Grievance
        </h1>

        <section className="text-gray-600 mt-8 body-font">
          <div className="bg-[#0483c8] pb-2 pt-2">
            <div className="container mx-auto w-full mt-4">
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

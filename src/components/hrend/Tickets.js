import React from "react";
import background from './tickets.png';
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useEffect, useState } from "react";
import Table from "../../constant/Table/Table";
import moment from "moment/moment";
import { useSelector } from "react-redux";
function Tickets() {
  const { userId } = useSelector((state) => state);
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
        return (<>{row.tickets.issued_item.length != index + 1 ? `${data}, ` : `${data}`}</>)
      })), sortable: true, wrap: true
    },

    { name: "Description", selector: (row) => row.tickets.reason, sortable: true, wrap: true },
    {
      name: "Status",
      selector: (row) => (row.status), sortable: true
    },
  ];

  const AddTicket = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      reason: description,
      issued_item: other,
      email_cc:email,
    }
    try {
      console.log(other)
      const response = await AxiosInstance.post(`/api/hr/ask/ticket/${userId}`, data)
      if (response.status === 200) {
        alert("✅ Ticket Sent SuccesFully");
        setDescription("");
        setother([]);
        setIsDisabled(false);
        setEmail("");
      }


    } catch (error) {
      alert(error.response.data.msg);

    };
  }

  const getData = async () => {
    AxiosInstance.get(`/api/hr/get/tickets/${userId}`)
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
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat"
  };

  return (
    <>

      <div className="flex flex-row">
        <div className="hidden sm:block xl:w-1/4 my-2 mr-2 ml-28 rounded-lg" style={styles}></div>
        <section className="text-gray-600 w-full xl:w-3/4 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Tickets
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <form>
              <div className="w-full xl:w-3/5 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full sm:w-1/3">
                    <div className="relative flex flex-col">
                      <label for="name" className="leading-7 text-sm text-gray-600">
                        Has Issue With
                      </label>
                      <div className="flex ml-2 flex-col">
                        <div className="flex items-center">
                          <input value="mouse"
                            onChange={(e) => setother([...other, "mouse"])} type="checkbox" id="box" name="box" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Mouse
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="box" name="box[]" value="keyboard"
                            onChange={(e) => setother([...other, "keyboard"])} />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Keyboard
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Laptop"
                            onChange={(e) => setother([...other, "Laptop"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Laptop
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Swipe Card"
                            onChange={(e) => setother([...other, "Swipe Card"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Swipe Card
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="ID Card"
                            onChange={(e) => setother([...other, "ID Card"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            ID Card
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="chair"
                            onChange={(e) => setother([...other, "chair"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Chair
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="Headphones"
                            onChange={(e) => setother([...other, "Headphones"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Headphones
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input value="others"
                            onChange={(e) => setother([...other, "others"])} type="checkbox" id="box" name="box[]" />
                          <label className="ml-2 leading-7 text-sm text-gray-600">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-2/3">
                    <div className="w-full">
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
                          name="date"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>
                    <div className="relative mt-2">
                      <label for="message" className="leading-7 text-sm text-gray-600">
                        Explain Your Issue
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 sm:h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <button onClick={AddTicket} disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="flex mx-auto text-white bg-[#047EC1] border-0 py-2 px-8 focus:outline-none hover:bg-[#0473af] rounded text-lg">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <h1 className="sm:text-xl text-lg font-medium title-font mb-4 text-gray-900">
          List of all Raised Tickets
        </h1>

        <section className="text-gray-600 mt-[40px] body-font">

          <div className="bg-[#0483c8] pb-2 pt-2">

            <div className="container mx-auto w-full mt-4">
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

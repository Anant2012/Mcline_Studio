import { useState, useEffect } from "react";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment";
import background from "../../../../assets/images/AddNewBanner.jpg";
import { useNavigate } from "react-router-dom";

function AdminEditLeaves() {
  const params = useParams();
  const leaveId = params.leaveId;
  const navigate = useNavigate();

  const [date_to, setDate_to] = useState("");
  const [date_from, setDate_from] = useState("");
  const [username, setUsername] = useState("");
  const [leave_status, setLeave_status] = useState("");
  const [description, setDescription] = useState("");
  const [remarks, setRemarks] = useState("");
  const [paid_leave, setPaid_leave] = useState("");
  const [userId, setUserId] = useState();

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(20%)",
  };

  useEffect(() => {
    AxiosInstance.get(`/api/admin/hr/leaves/${leaveId}`)
      .then(({ data: { data } }) => {
        setUsername(data.user_id.username);
        setDate_to(moment(data.leaves.date_to).format("YYYY-MM-DD"));
        setDate_from(moment(data.leaves.date_from).format("YYYY-MM-DD"));
        setDescription(data.leaves.description);
        setLeave_status(data.leaves.status);
        setPaid_leave(data.leaves.user_id?.totalLeaves);
        setUserId(data.user_id._id);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
    AxiosInstance.patch(`api/admin/hr/leaves/total/${userId}`)
      .then(({ data: { data } }) => setPaid_leave(data.totalLeaves))
      .catch((err) => console.log(err));
  }, [userId]);

  const EditLeave = async () => {
    try {
      const data = {
        date_to: date_to,
        date_from: date_from,
        name: username,
        status: leave_status,
        description: description,
        remarks: remarks,
        totalLeaves: paid_leave,
      };
      const data1 = {
        leaves: paid_leave,
      };
      const response1 = await AxiosInstance.patch(
        `api/admin/hr/leaves/total/${userId}`,
        data1
      );
      const response = await AxiosInstance.patch(
        `api/admin/hr/leaves/${leaveId}`,
        data
      );
      // const response = await axios.patch(`https://mc-line2.onrender.com/api/admin/hr/ticket/${ticketId}`, data);
      if (response.status === 200) {
        alert("✅Leave updated successfully!!");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!!");
    }
    navigate("/admin/hr/leaves");
  };

  console.log(">>>> userId", userId);

  return (
    <div className="flex flex-nowrap">
      <div
        className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4"
        style={styles}
      ></div>
      <div className="flex w-full sm:w-3/4 justify-center item-center">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Edit Leave Form
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Capturing Leaves from Multiple Sources
              </p>
            </div>
            {/* <form onSubmit={EditLeave}> */}
            <div className="w-3/4 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      for="date"
                      className="leading-7 text-sm text-gray-600"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      // placeholder={date}
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="date"
                      name="date"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      readOnly
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      for="date"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Date To
                    </label>
                    <input
                      type="date"
                      placeholder={date_to}
                      required
                      value={date_to}
                      onChange={(e) => setDate_to(e.target.value)}
                      id="date"
                      name="date"
                      readOnly
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      for="date"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Date From
                    </label>
                    <input
                      type="date"
                      placeholder={date_from}
                      required
                      value={date_from}
                      onChange={(e) => setDate_from(e.target.value)}
                      id="date"
                      name="date"
                      readOnly
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      for="cars"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Leave Status
                    </label>

                    <select
                      value={leave_status}
                      onChange={(e) => setLeave_status(e.target.value)}
                      name="leave_status"
                      id="leave_status"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option
                        value=""
                        className="leading-7 text-sm text-gray-500"
                        disabled
                        selected
                      >
                        Select
                      </option>
                      <option
                        value="pending"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Pending
                      </option>
                      <option
                        value="Granted"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Granted
                      </option>
                      <option
                        value="Rejected"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Rejected
                      </option>
                      {/* <option value="At Hold" className="leading-7 text-sm text-gray-600">At Hold</option> */}
                    </select>
                  </div>
                </div>
                <div class="p-2 w-full sm:w-1/4">
                  <div class="relative">
                    <label for="date" class="leading-7 text-sm text-gray-600">
                      Paid leaves left
                    </label>
                    <input
                      type="number"
                      // placeholder={}
                      required
                      value={paid_leave}
                      onChange={(e) => setPaid_leave(e.target.value)}
                      id="date"
                      name="date"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full sm:w-3/4">
                  <div class="relative">
                    <label for="date" class="leading-7 text-sm text-gray-600">
                      Remark
                    </label>
                    <input
                      type="text"
                      // placeholder={date_from}
                      required
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      id="date"
                      name="date"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      id="message"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name="message"
                      readOnly
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    onClick={EditLeave}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminEditLeaves;

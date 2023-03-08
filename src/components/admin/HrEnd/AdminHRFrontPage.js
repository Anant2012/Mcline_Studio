import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from "../../../constant/Table/Table";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";

const AdminHRFrontPage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    const updatedData = data.filter((x) =>
      x.user_id.username.toLowerCase().match(val.toLowerCase())
    );
    setFilteredData(updatedData);
  };
  const columns = [
    { name: "Name", selector: (row) => row.user_id?.username, sortable: true },
    // { name: "Days", selector: (row) => row.leaves.net_days, sortable: true },
    { name: "Reason", selector: (row) => row.leaves?.description || row.tickes?.reason, sortable: true },
  ];
  const EditUser = (row) => {
    navigate(`/user/admin/edit_user/${row._id}`);
  };
  const getData = async () => {
    AxiosInstance.get(`/api/admin/hr/top/five`)
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

  const handleAddClick = () => {
    props.setAdminLogin(0);
  };

  return (
    <>
      <div className="flex flex-col text-center w-full mt-40">
        <h1 className="sm:text-4xl  text-3xl font-medium title-font mb-4 text-gray-900">
          <span className="text-[#036396]">McLine </span>Access Portal
        </h1>
        <p className="w-11/12 lg:w-2/3 mx-auto leading-relaxed text-base">
          Creating a Productive and Organized Environment
        </p>
      </div>

      <section className="text-gray-600  body-font">
        <div className="container  px-0 sm:px-5 py-24 w-full justify-center mx-auto flex flex-wrap">
            <div className="border-2 m-4 flex flex-col sm:flex-row w-full rounded-lg border-[#047EC1] shadow-md bg-sky-50/5 border-opacity-50 px-8 py-4">
              <div className="w-full text-center sm:text-left sm:w-1/2 text-[#047EC1] my-auto pl-0 sm:pl-8 text-xl">Manage HR End</div>
              <div className="w-full sm:w-1/2 mt-3 sm:mt-0 gap-2 mx-auto flex sm:flex-row flex-wrap  justify-between items-center">
              <Link to="/admin/hr/profiles">
                <button
                  type="button"
                  className="inline-flex w-28  sm:w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Profiles
                </button>
              </Link>

              <Link to="/admin/hr/leaves">
                <button
                  type="button"
                  className="inline-flex w-28  sm:w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Leaves
                </button>
              </Link>

              <Link to="/admin/hr/tickets">
                <button
                  type="button"
                  className="inline-flex w-28  sm:w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Tickets
                </button>
              </Link>

              <Link to="/admin/hr/grievance">
                <button
                  type="button"
                  className="inline-flex w-28  sm:w-32 justify-center items-center rounded-md border border-[#047EC1] bg-[#047EC1] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-medium text-white shadow-sm hover:bg-[#047EC1]/90 focus:outline-none focus:ring-2 focus:ring-[#047EC1] focus:ring-offset-2"
                >
                  Grievance
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 w-full mx-auto">
            <section className="text-gray-600 body-font">
              <div className="container  mx-auto">
                <div className="bg-[#0483c8] pb-4 px-4 pt-4">
                  <div className="flex flex-wrap mx-4">
                    <div className="w-full flex-col sm:flex-row p-2  item-center flex text-white justify-end bg-[#0483c8] rounded ">
                      <h1 className="h-full  flex text-left w-full sm:pl-8 items-center title-font text-xl">
                        Data Table
                      </h1>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHRFrontPage;

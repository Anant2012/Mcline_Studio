import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
// import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../constant/Table/Table";
const AdminProfile = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();
  const onSearch = (val) => {
    setFilteredData(
      data?.filter(
        (x) =>
          x.personal_details.name.toLowerCase().match(val.toLowerCase()) ||
          x.personal_details.employee_code
            .toLowerCase()
            .match(val.toLowerCase()) ||
          x.personal_details.company_id
            .toLowerCase()
            .match(val.toLowerCase()) ||
          x.personal_details.official_email_id
            .toLowerCase()
            .match(val.toLowerCase())
      )
    );
  };

  const EditLead = (row) => {
    // <EditLead leadId={row._id} />
    // navigate(`/admin/hr/leaves/edit/${row._id}`);
    // console.log("lead",row._id)
  };
  const getData = async () => {
    AxiosInstance.get(`/api/admin/user`)
      .then((data) => {
        setData(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
    // FilterLead();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <div class="flex flex-wrap mx-auto mt-20 w-3/4">
        <div class="w-full flex-col sm:flex-row p-2  flex item-center flex text-white justify-end bg-[#0483c8] rounded-full ">
          <h1 className="h-full  flex text-left w-full pl-8 items-center title-font text-xl">
            Profiles
          </h1>
          <div class="flex flex-row justify-center pr-8 items-center relative">
            <label
              for="name"
              class="my-auto px-4 pr py-3 title-font tracking-wider  text-sm decoration-white"
            >
              Search
            </label>
            <input
              type="text"
              onChange={(e) => onSearch(e.target.value)}
              id="name"
              name="name"
              class="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <section class="text-gray-600 w-3/4 mx-auto body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            {filteredData?.map((data, index) => {
              return (
                <>
                  <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="p-6">
                        <div className="flex w-full">
                          <div className="w-1/2">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              {data.personal_details.employee_code}
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                              {data.personal_details.name}
                              <p className="text-xs title-font font-normal text-gray-800">
                                {data.personal_details.official_email_id}
                              </p>
                            </h1>
                          </div>

                          <div className="w-1/2 flex justify-end">
                            <img
                              className="h-14 w-14 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                        </div>
                        <p class="leading-relaxed mb-3">
                          <div className="w-full flex">
                            <div className="w-1/2 my-1 text-left">
                              <div className="text-xs text-gray-500">
                                Personal Contact Number
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.personal_contact_number}
                              </div>
                            </div>
                            <div className="w-1/2 my-1 text-right">
                              <div className="text-xs text-gray-500">
                                Personal Email ID
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.personal_email_id}
                              </div>
                            </div>
                          </div>

                          <div className="w-full flex">
                            <div className="w-1/2 my-1 text-left">
                              <div className="text-xs text-gray-500">
                                Blood Group
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.blood_group}
                              </div>
                            </div>
                            <div className="w-1/2 my-1 text-right">
                              <div className="text-xs text-gray-500 whitespace-nowrap">
                                Emergency Contact Number
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.emergency_contact_number}
                              </div>
                            </div>
                          </div>

                          <div className="w-full flex">
                            <div className="w-1/2 my-1 text-left">
                              <div className="text-xs text-gray-500">
                                Reporting Manager
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.reporting_manager}
                              </div>
                            </div>
                            <div className="w-1/2 my-1 text-right">
                              <div className="text-xs text-gray-500">
                                Company ID
                              </div>
                              <div className="text-xs text-gray-800 font-medium">
                                {data.personal_details.company_id}
                              </div>
                            </div>
                          </div>

                          {/* <div className="w-full flex justify-end mt-2">
                              <button className="text-white text-sm font-medium bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                Edit
                              </button>
                            </div> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProfile;

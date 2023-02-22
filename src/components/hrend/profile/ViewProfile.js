import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";

const ViewProfile = (props) => {
  // const { userId } = useSelector((state) => state);
  const userId = "63f4a616420ae478e1842a4e";
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const onSubmitClick = () => {
    navigate(`/hr/edit_profile`);
  };

  useEffect(() => {
    AxiosInstance.get(`/api/hr/get/personal/${userId}`)
      .then((res) => setData(res.data.data[0].personal_details))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${props.viewViewProfile ? "block" : "hidden"}`}>
      <div class="overflow-hidden bg-white w-3/4 mx-auto mt-12 shadow-md sm:rounded-lg border border-gray-300">
        <div class="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 class="text-lg sm:text-xl font-medium leading-6 text-gray-900">
                {data.name}
              </h3>
              <p class="mt-1 max-w-2xl text-sm sm:text-md text-gray-500">
                Personal details
              </p>
            </div>

            {/* <img
              className="h-16 w-16 sm:h-24 sm:w-24 rounded-full"
              src={data.profile_image}
              alt=""
            /> */}
          </div>
        </div>
        <div class="border-t border-gray-300">
          <dl>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.employee_code}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Designation</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.designation}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Grade</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.grade}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Reporting Manager
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.reporting_manager}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Emergency Contact Number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.emergency_contact_number}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Blood Group</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.blood_group}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Personal Contact Number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.personal_contact_number}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Personal Email ID
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.personal_email_id}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Official Email ID
              </dt>
              <dd class="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.official_email_id}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Company ID</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {data.company_id}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={onSubmitClick}
          className="mx-auto w-11/12 sm:w-3/4 text-white bg-[#047EC1] mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;

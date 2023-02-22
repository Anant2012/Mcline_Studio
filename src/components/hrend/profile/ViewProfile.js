import React from "react";
import { useEffect, useState } from "react";
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ViewProfile = (props) => {
  const { userId } = useSelector((state) => state);
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [employee_code, setEmployee_code] = useState("");
  const [designation, setDesignation] = useState("");
  const [grade, setGrade] = useState("");
  const [reporting_manager, setReporting_manager] = useState("");
  const [emergency_contact_number, setEmergency_contact_number] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [personal_contact_number, setPersonal_contact_number] = useState("");
  const [personal_email_id, setPersonal_email_id] = useState("");
  const [official_email_id, setOfficial_email_id] = useState("");
  const [company_id, setCompany_id] = useState("");

  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await AxiosInstance.get(`/api/hr/get/personal/${userId}`)
      if (response.status === 200) {
        // console.log(response.data.data[0].personal_details)
        setPersonal_contact_number(response.data.data[0].personal_details.personal_contact_number);
        setPersonal_email_id(response.data.data[0].personal_details.personal_email_id);
        setOfficial_email_id(response.data.data[0].personal_details.official_email_id);
        setCompany_id(response.data.data[0].personal_details.company_id);
        setEmployee_code(response.data.data[0].personal_details.employee_code);
        setReporting_manager(response.data.data[0].personal_details.reporting_manager)
        setDesignation(response.data.data[0].personal_details.designation);
        setBlood_group(response.data.data[0].personal_details.blood_group);
        setEmergency_contact_number(response.data.data[0].personal_details.emergency_contact_number);
        setName(response.data.data[0].personal_details.name);
        setGrade(response.data.data[0].personal_details.grade);
      }
    } catch (error) {
      alert(error);

    };
  };
  const onSubmitClick = () => {
    navigate(`/hr/edit_profile`)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${(props.viewViewProfile) ? "block" : "hidden"}`}>
      <div class="overflow-hidden bg-white w-3/4 mx-auto mt-12 shadow-md sm:rounded-lg border border-gray-300">
        <div class="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 class="text-lg sm:text-xl font-medium leading-6 text-gray-900">
                {name}
              </h3>
              <p class="mt-1 max-w-2xl text-sm sm:text-md text-gray-500">Personal details</p>
            </div>

            <img
              className="h-16 w-16 sm:h-24 sm:w-24 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="border-t border-gray-300">
          <dl>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {employee_code}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Designation</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {designation}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Grade</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{grade}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Reporting Manager</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {reporting_manager}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Emergency Contact Number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {emergency_contact_number}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Blood Group</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{blood_group}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Personal Contact Number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {personal_contact_number}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Personal Email ID</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {personal_email_id}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Official Email ID</dt>
              <dd class="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {official_email_id}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Company ID</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {company_id}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button onClick={onSubmitClick} className="mx-auto w-11/12 sm:w-3/4 text-white bg-[#047EC1] mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg">Edit Profile</button>
      </div>
    </div>
  );
};

export default ViewProfile;

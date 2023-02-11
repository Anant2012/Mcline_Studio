
import React, { useState } from 'react'
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';


const FillProfile = (props) => {
  const User_id = "63bbebd43e8e148ba852fd86";
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

  const [isDisabled, setIsDisabled] = useState(false);

  const AddPersonalDetails = async (e) => {
    setIsDisabled(true);
    e.preventDefault();
    const data = {
      name,
      employee_code,
      designation,
      grade,
      reporting_manager,
      emergency_contact_number,
      blood_group,
      personal_contact_number,
      personal_email_id,
      official_email_id,
      company_id,
    }
    try {
      const response = await AxiosInstance.post(`/api/edit/${User_id}`, data)
      if (response.status === 200) {
        alert("✅ Profile Added SuccesFully");
      }
      setPersonal_contact_number("");
      setPersonal_email_id("");
      setOfficial_email_id("");
      setCompany_id("");
      setEmployee_code("");
      setReporting_manager("")
      setDesignation("");
      setBlood_group("");
      setEmergency_contact_number("");
      setName("");
      setGrade("");
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }


  const ProfileImageClick = () =>{
    const imgBtn = document.querySelector("#imgBtn");
    imgBtn.click();
  }
  return (
    <>
      <div className={`${(props.viewFillProfile) ? "block" : "hidden"}`}>
        <div class="flex flex-col text-center w-full my-8">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900">
            Submit Profile
          </h1>
        </div>
        <div class="overflow-hidden bg-white w-11/12 sm:w-3/4 mx-auto shadow-md sm:rounded-lg border border-gray-300">
          <div class="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <div>
                <div class="relative flex flex-row  items-center">
                  <label for="date" class="text-sm font-medium mr-2 text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="center h-full flex items-center justify-center">
                <div class="form-input w-[350px]  flex justify-end bg-white">
                    <label for="file-ip-1" className=' block w-1/2 leading-10 text-center bg-[#1172c2] text-[15px] uppercase font-semibold cursor-pointer rounded-[5px] text-white'  onClick={(e) => {
                      e.preventDefault();
                      ProfileImageClick();
                      console.log("Clicked");
                    }}>Upload Image</label>
                    <input className='file-upload-input hidden' id="imgBtn"  type="file"  accept="Image/" 
                   />
                </div>
              </div> 
            </div>
          </div>
          <div class="border-t border-gray-300">
            <dl>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Employee Code</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="text"
                    value={employee_code}
                    onChange={(e) => setEmployee_code(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Designation</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Grade</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Reporting Manager</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="text"
                    value={reporting_manager}
                    onChange={(e) => setReporting_manager(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Emergency Contact Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    id="number"
                    value={emergency_contact_number}
                    onChange={(e) => setEmergency_contact_number(e.target.value)}
                    name="number"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Blood Group</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    id="number"
                    value={blood_group}
                    onChange={(e) => setBlood_group(e.target.value)}
                    name="number"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Personal Contact Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    id="number"
                    value={personal_contact_number}
                    onChange={(e) => setPersonal_contact_number(e.target.value)}
                    name="number"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Personal Email ID</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="email"
                    id="email"
                    value={personal_email_id}
                    onChange={(e) => setPersonal_email_id(e.target.value)}
                    name="email"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Official Email ID</dt>
                <dd class="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="email"
                    id="email"
                    value={official_email_id}
                    onChange={(e) => setOfficial_email_id(e.target.value)}
                    name="email"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Company ID</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="text"
                    value={company_id}
                    onChange={(e) => setCompany_id(e.target.value)}
                    name="text"
                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button onClick={AddPersonalDetails} disabled={isDisabled} style={{ cursor: isDisabled ? "not-allowed" : "pointer" }} className="mx-auto w-11/12 sm:w-3/4 text-white bg-indigo-500 mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </>
  );
};

export default FillProfile;

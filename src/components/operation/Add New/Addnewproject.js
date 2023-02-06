import React, { useState } from 'react'
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';
import background from './AddNewProject.jpg';

function Addnewproject() {
  const [code, setCode] = useState("");
  // const [clientName, setClientName] = useState("");
  // const [projectName, setProjectName] = useState("");
  const [person, setPerson] = useState("");
  const [company, setCompany] = useState("");
  const [approvalData, setApprovalData] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [project_status, setProject_status] = useState("");
  const [description, setDescription] = useState("");

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(0%)'
  };

  const AddProject = async (e) => {
    e.preventDefault();
    const data = {
      user_id: "63bbebd43e8e148ba852fd86",
      code: code,
      client_name: company,
      project_name: person,
      approval_date: approvalData,
      submission_date: submissionDate,
      description: description,
    }
    try {
      const response = await AxiosInstance.post(`/api/projects/create`, data)
      if (response.status === 200) {
        alert("✅ Project Added SuccesFully");
      }
      setCode("");
      setPerson("");
      setSubmissionDate("")
      setCompany("");
      setDescription("");
      setProject_status("");
      setApprovalData("");
    } catch (error) {
      alert(error);
      console.log(error);
    };
  }
  return (
    <div className="flex flex-nowrap">
      <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
      <div className="flex w-full sm:w-3/4 justify-center item-center">
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-col text-center w-full mb-4">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Add New Project
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Projects from Multiple Sources</p>
            </div>
            <form>
              <div class="w-3/4 mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="date" class="leading-7 text-sm text-gray-600">
                        Approval Date
                      </label>
                      <input
                        type="date"
                        required
                        value={approvalData}
                        onChange={(e) => setApprovalData(e.target.value)}
                        id="date"
                        name="date"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="date" class="leading-7 text-sm text-gray-600">
                        Submission Date
                      </label>
                      <input
                        type="date"
                        required
                        value={submissionDate}
                        onChange={(e) => setSubmissionDate(e.target.value)}
                        id="date"
                        name="date"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="person" class="leading-7 text-sm text-gray-600">
                        Person
                      </label>
                      <input
                        type="text"
                        required
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        id="person"
                        name="person"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="clientName" class="leading-7 text-sm text-gray-600">
                        Client Name
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        id="clientName"
                        name="clientName"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="projectName" class="leading-7 text-sm text-gray-600">
                        Project Name
                      </label>
                      <input
                        type="text"
                        required
                        id="projectName"
                        name="projectName"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div> */}

                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="code" class="leading-7 text-sm text-gray-600">
                        Code
                      </label>
                      <input
                        type="tel"
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        id="code"
                        name="code"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div class="p-2 w-full sm:w-1/2">
                    <div class="relative">
                      <label for="cars" class="leading-7 text-sm text-gray-600">Project Status</label>

                      <select value={project_status}
                        onChange={(e) => setProject_status(e.target.value)} name="project_status" id="project_status" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="Lead" class="leading-7 text-sm text-gray-600">Lead</option>
                        <option value="Hot" class="leading-7 text-sm text-gray-600">Hot</option>
                        <option value="Warm" class="leading-7 text-sm text-gray-600">Warm</option>
                      </select>
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
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="message"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div class="p-2 w-full">
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Addnewproject

import React, { useState } from 'react'
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';
import background1 from './AddNewProject1.png';
import background2 from './AddNewProject2.png';
import { useSelector } from "react-redux";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function Addnewproject() {
  const { userId } = useSelector((state) => state);
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [person, setPerson] = useState("");
  const [company, setCompany] = useState("");
  const [approvalDate, setapprovalDate] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [project_status, setProject_status] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [bid, setBid] = useState("");
  const [po_no, setPo_no] = useState("");
  const [net_days, setNet_days] = useState("");
  const [invoice_type, setInvoice_type] = useState("");
  const [invoice_amount, setInvoice_amount] = useState("");
  const [email_to, setEmail_to] = useState("");
  const [email_cc, setEmail_cc] = useState("");
  const [contact_person, setContact_person] = useState("");
  const [Phone_no, setPhone_no] = useState("");
  const [address, setAddress] = useState("");
  // const [reference, setReference] = useState("");
  const [resource, setResource] = useState("");
  // const [comment, setComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const styles = {
    backgroundImage: `url(${background1}), url(${background2})`,
    // backgroundPosition: "bottom, top",
    backgroundPosition: '50% 70%, 50% 20%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };

  const AddProject = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const data = {
      user_id: userId,
      // code: code,
      project_status: project_status,
      client_name: company,
      person: person,
      description: description,
      project_name: projectName,
      approval_date: approvalDate,
      submission_date: submissionDate,
      // comments: comment,
      // reference: reference,
      address: address,
      phone: Phone_no,
      invoice_amount:invoice_amount,
      contact_person: contact_person,
      resource: resource,
      invoice_type: invoice_type,
      net_days: net_days,
      PO_number: po_no,
      bid: bid,
      hours: hours,
      email_to: email_to,
      email_cc: email_cc,
      company_name: company,
    }
    // if (moment(approvalDate) < moment()) {
    //   if (!moment(moment().format("YYYY-MM-DD")).isSame(moment(approvalDate).format("YYYY-MM-DD"))) {
    //     alert("Invalid Approval Date");
    //     return;
    //   }
    // }
    // if (moment(submissionDate) < moment()) {
    //   if (!moment(moment().format("YYYY-MM-DD")).isSame(moment(submissionDate).format("YYYY-MM-DD"))) {
    //     alert("Invalid Submission Date");
    //     return;
    //   }
    // }
    try {
      const response = await AxiosInstance.post(`/api/project/create`, data)
      if (response.status === 201) {
        alert("✅ Project Added SuccesFully");
        setIsDisabled(false);
        navigate("/")
      }
      // setCode("");
      setProject_status("");
      setCompany("")
      setPerson("");
      setDescription("");
      setAddress("");
      setBid("")
      setPhone_no("")
      setSubmissionDate("")
      setHours("")
      // setComment("")
      setContact_person("")
      setPo_no("")
      setProjectName("")
      setNet_days("")
      // setReference("")
      setResource("")
      setEmail_cc("");
      setEmail_to("")
      setInvoice_type("");
      setInvoice_amount("");
      setapprovalDate("");
      setIsDisabled(false);
    } catch (error) {
      setIsDisabled(false);
      alert(error.response.data.msg);

    };
  }
  return (
    <div className="flex flex-nowrap">
      <div className=" my-2 ml-28 mr-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
      <div className="flex w-full sm:w-3/4 justify-center item-center">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Add New Project
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Projects from Multiple Sources</p>
            </div>
            <form onSubmit={AddProject}>
              <div className="w-full sm:w-3/4 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="date" className="leading-7 text-sm text-gray-600">
                        Approval Date
                      </label>
                      <input
                        type="date"
                        required
                        value={approvalDate}
                        onChange={(e) => setapprovalDate(e.target.value)}
                        id="date"
                        name="date"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 sm:py-1 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="date" className="leading-7 text-sm text-gray-600">
                        Submission Date
                      </label>
                      <input
                        type="date"
                        required
                        value={submissionDate}
                        onChange={(e) => setSubmissionDate(e.target.value)}
                        id="date"
                        name="date"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 sm:py-1 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="person" className="leading-7 text-sm text-gray-600">
                        Invoice Amount
                      </label>
                      <input
                        type="text"
                        required
                        value={invoice_amount}
                        onChange={(e) => setInvoice_amount(e.target.value)}
                        id="person"
                        name="person"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="person" className="leading-7 text-sm text-gray-600">
                       Contact Person
                      </label>
                      <input
                        type="text"
                        required
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        id="person"
                        name="person"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="clientName" className="leading-7 text-sm text-gray-600">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        id="clientName"
                        name="clientName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Project Name
                      </label>
                      <input
                        type="text"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="cars" className="leading-7 text-sm text-gray-600">Project Status</label>

                      <select value={project_status}
                        onChange={(e) => setProject_status(e.target.value)} name="project_status" id="project_status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <option value="" className="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                        <option value="In Progress" className="leading-7 text-sm text-gray-600">In Progress</option>
                        <option value="On Hold" className="leading-7 text-sm text-gray-600">On Hold</option>
                        <option value="Completed" className="leading-7 text-sm text-gray-600">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Bid
                      </label>
                      <input
                        type="text"
                        required
                        value={bid}
                        onChange={(e) => setBid(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Hours
                      </label>
                      <input
                        type="text"
                        required
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        P.O.No.
                      </label>
                      <input
                        type="text"
                        required
                        value={po_no}
                        onChange={(e) => setPo_no(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Net Days
                      </label>
                      <input
                        type="text"
                        required
                        value={net_days}
                        onChange={(e) => setNet_days(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Invoice Type
                      </label>
                      <input
                        type="text"
                        required
                        value={invoice_type}
                        onChange={(e) => setInvoice_type(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Resource
                      </label>
                      <input
                        type="text"
                        required
                        value={resource}
                        onChange={(e) => setResource(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Email To
                      </label>
                      <input
                        type="text"
                        required
                        value={email_to}
                        onChange={(e) => setEmail_to(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Email (cc)
                      </label>
                      <input
                        type="text"
                        required
                        value={email_cc}
                        onChange={(e) => setEmail_cc(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Reference
                      </label>
                      <input
                        type="text"
                        required
                        value={contact_person}
                        onChange={(e) => setContact_person(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Phone No.
                      </label>
                      <input
                        type="text"
                        required
                        value={Phone_no}
                        onChange={(e) => setPhone_no(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-3/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  {/* <div className="p-2 w-full sm:w-1/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Reference
                      </label>
                      <input
                        type="text"
                        required
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full sm:w-2/4">
                    <div className="relative">
                      <label for="projectName" className="leading-7 text-sm text-gray-600">
                        Comments
                      </label>
                      <input
                        type="text"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        id="projectName"
                        name="projectName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div> */}

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
    </div>
  );
}

export default Addnewproject
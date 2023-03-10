
import React, { useState, useEffect } from 'react'
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';
import background from '../../../assets/images/AddNewProject.jpg';
import { useParams } from "react-router";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function Addnewproject() {

    const URL = window.location.href;
    const params = useParams();
    const projectId = params.projectId;
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState("");
    const [person, setPerson] = useState("");
    const [company, setCompany] = useState("");
    const [code, setCode] = useState("");
    const [approvalDate, setapprovalDate] = useState("");
    const [submissionDate, setSubmissionDate] = useState("");
    const [project_status, setProject_status] = useState("");
    const [description, setDescription] = useState("");
    const [hours, setHours] = useState("");
    const [bid, setBid] = useState("");
    const [po_no, setPo_no] = useState("");
    const [net_days, setNet_days] = useState("");
    const [invoice_type, setInvoice_type] = useState("");
    const [email_to, setEmail_to] = useState("");
    const [email_cc, setEmail_cc] = useState("");
    const [contact_person, setContact_person] = useState("");
    const [Phone_no, setPhone_no] = useState("");
    const [address, setAddress] = useState("");
    const [resource, setResource] = useState("");
    const [resource_rate, setResource_rate] = useState("");
    const [resource_cost, setResource_cost] = useState("");
    // const [reference, setReference] = useState("");
    // const [comment, setComment] = useState("");
    const [invoice_number, setInvoice_number] = useState("");
    const [invoice_date, setInvoice_date] = useState("");
    const [invoice_amount, setInvoice_amount] = useState("");
    const [due_date, setDue_date] = useState("");
    const [invoice_status, setInvoice_status] = useState("");
    const [username, setUsername] = useState("");
    const [payment_status, setPayment_status] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(0%)'
    };

    const getLead = async (e) => {
        AxiosInstance.get(`/api/project/get/project/${projectId}`)
            .then((data) => {
                setUsername(data.data.data.user_id.username)
                setProject_status(data.data.data.status);
                setCode(data.data.data.code);
                setCompany(data.data.data.client_name)
                setPerson(data.data.data.person);
                setDescription(data.data.data.description);
                setAddress(data.data.data.address);
                setBid(data.data.data.bid)
                setPhone_no(data.data.data.phone)
                setSubmissionDate(moment(data.data.data.submission_date).format('YYYY-MM-DD'))
                setHours(data.data.data.hours)
                // setComment(data.data.data.comments)
                setContact_person(data.data.data.contact_person)
                setPo_no(data.data.data.PO_number)
                setProjectName(data.data.data.project_name)
                setNet_days(data.data.data.net_days)
                // setReference(data.data.data.reference)
                setResource(data.data.data.resource)
                setEmail_to(data.data.data.resource)
                setEmail_cc(data.data.data.resource)
                setInvoice_type(data.data.data.invoice_type)
                setInvoice_status(data.data.data.invoice.status)
                setResource_cost(data.data.data.invoice.resource_cost)
                setResource_rate(data.data.data.invoice.resource_rate)
                setPayment_status(data.data.data.invoice.payment_status)
                setInvoice_number(data.data.data.invoice.invoice_number)
                setInvoice_amount(data.data.data.invoice_amount)
                setInvoice_date(moment(data.data.data.approval_date).format('YYYY-MM-DD'))
                setDue_date(moment(data.data.data.approval_date).format('YYYY-MM-DD'))
                setapprovalDate(moment(data.data.data.approval_date).format('YYYY-MM-DD'));
                // alert("✅ Lead Edited SuccesFully");
            }
            )
            .catch((err) => {
                console.log("errorr", err);
                alert(err.response.data.msg);
            });
    }
    const EditProject = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        const data = {
            user_id: "63e9411577ce9c26f2babd4f",
            // code: code,
            project_status: project_status,
            client_name: company,
            person: person,
            description: description,
            project_name: projectName,
            approval_date: approvalDate,
            submission_date: submissionDate,
            // comments: comment,
            invoice_amount: invoice_amount,
            address: address,
            phone: Phone_no,
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
            invoice_date: invoice_date,
            invoice_number: invoice_number,
            invoice_status: invoice_status,
            payment_status: payment_status,
            resource_cost: resource_cost,
            resource_rate: resource_rate,
            due_date: due_date
        }

        try {
            const response = await AxiosInstance.patch(`/api/admin/operations/project/update/${projectId}`, data)
            if (response.status === 200) {
                alert("✅ Project Updated SuccesFully");
                setIsDisabled(false);
                navigate("/admin/operation/view/project")
            }
            // setCode("");
        } catch (error) {
            alert(error.response.data.msg);

        };
    }
    useEffect(() => {
        getLead();
    }, []);
    return (
        <div className="flex flex-nowrap">
            <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
            <div className="flex w-full sm:w-3/4 justify-center item-center">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-4">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit Project
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Projects from Multiple Sources</p>
                        </div>
                        <form onSubmit={EditProject}>
                            <div class="w-3/4 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                    <div class="p-2 w-full sm:w-1/4">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
                                                User Name
                                            </label>
                                            <input
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                id="date"
                                                name="date"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div class="p-2 w-full sm:w-1/4">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
                                                Code
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                id="date"
                                                name="date"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
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
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                                                Invoive Type
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
                                                Invoice Status
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={invoice_status}
                                                onChange={(e) => setInvoice_status(e.target.value)}
                                                id="projectName"
                                                name="projectName"

                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/4">
                                        <div className="relative">
                                            <label for="projectName" className="leading-7 text-sm text-gray-600">
                                                Invoice Date
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                value={invoice_date}
                                                onChange={(e) => setInvoice_date(e.target.value)}
                                                id="projectName"
                                                name="projectName"

                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/4">
                                        <div className="relative">
                                            <label for="projectName" className="leading-7 text-sm text-gray-600">
                                                Invoice Number
                                            </label>
                                            <input
                                                type="text"
                                              
                                                value={invoice_number}
                                                onChange={(e) => setInvoice_number(e.target.value)}
                                                id="projectName"
                                                name="projectName"

                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/4">
                                        <div className="relative">
                                            <label for="projectName" className="leading-7 text-sm text-gray-600">
                                                Payment Status
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={payment_status}
                                                onChange={(e) => setPayment_status(e.target.value)}
                                                id="projectName"
                                                name="projectName"

                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/4">
                                        <div className="relative">
                                            <label for="projectName" className="leading-7 text-sm text-gray-600">
                                                Due date
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                value={due_date}
                                                onChange={(e) => setDue_date(e.target.value)}
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
                                                Resource Rate
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={resource_rate}
                                                onChange={(e) => setResource_rate(e.target.value)}
                                                id="projectName"
                                                name="projectName"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/4">
                                        <div className="relative">
                                            <label for="projectName" className="leading-7 text-sm text-gray-600">
                                                Resource Cost
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={resource_cost}
                                                onChange={(e) => setResource_cost(e.target.value)}
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
                                    <div class="p-2 w-full sm:w-3/4">
                                        <div class="relative">
                                            <label for="projectName" class="leading-7 text-sm text-gray-600">
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
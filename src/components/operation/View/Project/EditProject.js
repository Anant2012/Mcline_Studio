import React, { useState, useEffect } from 'react'
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import background from '../../Add New/AddNewProject.jpg';
import { useParams } from "react-router";

function Addnewproject() {
    const URL = window.location.href;
    const params = useParams();
    const projectId = params.projectId;
    // console.log("Project", projectId);

    const [projectName, setProjectName] = useState("");
    const [person, setPerson] = useState("");
    const [company, setCompany] = useState("");
    const [approvalDate, setapprovalDate] = useState("");
    const [submissionDate, setSubmissionDate] = useState("");
    const [project_status, setProject_status] = useState("");
    const [description, setDescription] = useState("");

    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(0%)'
    };

    const getProject = async (e) => {
        e.preventDefault();
        try {
            const response = await AxiosInstance.post(`/api/projects/get/${projectId}`)
            if (response.status === 200) {
                setPerson(response.data.data.person);
                setSubmissionDate(response.data.data.submission_date)
                setCompany(response.data.data.company);
                setDescription(response.data.data.description);
                setProject_status(response.data.data.status);
                setProjectName(response.data.data.project_name);
                setapprovalDate(response.data.data.approval_date);
            }
            // setCode("");
        } catch (error) {
            alert(error);
            console.log(error);
        };
    }
    const EditProject = async (e) => {
        e.preventDefault();
        const data = {
            // user_id: "63e9411577ce9c26f2babd4f",
            // code: code,
            client_name: company,
            person: person,
            status: project_status,
            project_name: projectName,
            approval_date: approvalDate,
            submission_date: submissionDate,
            description: description,
        }
        try {
            const response = await AxiosInstance.post(`/api/projects/update/${projectId}`, data)
            if (response.status === 200) {
                alert("✅ Project Added SuccesFully");
            }
            // setCode("");
            setPerson("");
            setSubmissionDate("")
            setCompany("");
            setDescription("");
            setProject_status("");
            setProjectName("");
            setapprovalDate("");
        } catch (error) {
            alert(error);
            console.log(error);
        };
    }

    useEffect(() => {
        getProject();
    }, []);
    return (
        <div className="flex flex-nowrap">
            <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
            <div className="flex w-full sm:w-3/4 justify-center item-center">
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-4">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit Project
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
                                                value={approvalDate}
                                                onChange={(e) => setapprovalDate(e.target.value)}
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

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="projectName" class="leading-7 text-sm text-gray-600">
                                                Project Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={projectName}
                                                onChange={(e) => setProjectName(e.target.value)}
                                                id="projectName"
                                                name="projectName"
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
                                                <option value="Cold" class="leading-7 text-sm text-gray-600">Cold</option>
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
                                        <button onClick={EditProject} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
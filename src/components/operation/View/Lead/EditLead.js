import React, { useState, useEffect } from "react";
import background from '../../Add New/AddNewBanner.jpg';
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment/moment";


function EditLead() {
    const URL = window.location.href;
    const params = useParams();
    const leadId = params.leadId;
    // console.log("Lead", leadId);

    const [date, setDate] = useState("");
    const [person, setPerson] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [lead_status, setLead_Status] = useState("");
    const [description, setDescription] = useState("");


    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%)'
    };

    const getLead = async (e) => {
        AxiosInstance.get(`/api/leads/get/lead/${leadId}`)
            .then((data) => {
                // console.log(data, "hjk")
                setDate(moment(data.data.data.date).format('YYYY-MM-DD'));
                setCompany(data.data.data.company);
                setContact_no(data.data.data.contact_no);
                setPerson(data.data.data.name);
                setDescription(data.data.data.description);
                setEmail(data.data.data.email);
                setLead_Status(data.data.data.status);
                // alert("✅ Lead Edited SuccesFully");
            }
            )
            .catch((err) => {
                console.log("errorr", err);
                alert(err.response.data.msg);
            });
    }

    const EditLead = async (e) => {
        e.preventDefault();
        try {
            const data = {
                date: date,
                name: person,
                company: company,
                email: email,
                contact_no: contact_no,
                status: lead_status,
                description: description,
            }
            const response = await AxiosInstance.put(`/api/leads/update/${leadId}`, data);
            if (response.status === 200) {
                alert("✅Lead updated successfully!!");
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong!!");
        }
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
                                Edit Lead Form
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Leads from Multiple Sources</p>
                        </div>
                        <form>
                            <div className="w-3/4 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="date" className="leading-7 text-sm text-gray-600">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                // placeholder={date}
                                                required
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                id="date"
                                                name="date"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="person" className="leading-7 text-sm text-gray-600">
                                                Person
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

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="company" className="leading-7 text-sm text-gray-600">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                id="company"
                                                name="company"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="number" className="leading-7 text-sm text-gray-600">
                                                Contact Number
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={contact_no}
                                                onChange={(e) => setContact_no(e.target.value)}
                                                id="number"
                                                name="number"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="email" className="leading-7 text-sm text-gray-600">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="cars" className="leading-7 text-sm text-gray-600">Lead Status</label>

                                            <select value={lead_status}
                                                onChange={(e) => setLead_Status(e.target.value)} name="lead_status" id="lead_status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="" className="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                                                <option value="Lead" className="leading-7 text-sm text-gray-600">Lead</option>
                                                <option value="Hot" className="leading-7 text-sm text-gray-600">Hot</option>
                                                <option value="Warm" className="leading-7 text-sm text-gray-600">Warm</option>
                                            </select>
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
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={EditLead}>
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

export default EditLead;

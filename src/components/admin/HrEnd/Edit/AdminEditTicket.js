import React, { useState, useEffect } from "react";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment/moment";
import background from "../../../../assets/images/AddNewBanner.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminEditTickets() {
    const URL = window.location.href;
    const params = useParams();
    const ticketId = params.ticketId;
    const navigate = useNavigate();
    // console.log("Ticket", ticketId);

    const [date, setDate] = useState("");
    const [issue, setIssue] = useState("");
    const [username, setUsername] = useState("");
    const [ticket_status, setTicket_status] = useState("");
    const [description, setDescription] = useState("");


    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%)'
    };

    const getTicket = async (e) => {
        AxiosInstance.get(`/api/admin/hr/ticket/${ticketId}`)
            .then((data) => {
                // console.log(data.data.data.tickets.issued_item.map((datares, index) => {
                //     return ({datares})
                // }));
                setUsername(data.data.data.user_id?.username)
                setDate(moment(data.data.data.created_at).format('YYYY-MM-DD'));
                setIssue(data.data.data.tickets.issued_item.map((res, index) => {
                    return (res)
                }));
                setDescription(data.data.data.tickets.reason);
                setTicket_status(data.data.data.status);
                // alert("✅ Ticket Edited SuccesFully");
            }
            )
            .catch((err) => {
                console.log("errorr", err);
                alert(err.response.data.msg);
            });
    }

    const EditTicket = async (e) => {
        e.preventDefault();
        try {
            const data = {
                // date: date,
                // issue: issue,
                // name: username,
                status: ticket_status,
                // description: description,
            }
            const response = await AxiosInstance.patch(`/api/admin/hr/ticket/${ticketId}`, data)
            // const response = await axios.patch(`https://mc-line2.onrender.com/api/admin/hr/ticket/${ticketId}`, data);
            if (response.status === 200) {
                alert("✅ticket updated successfully!!");
                navigate('/admin/hr/tickets')
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong!!");
        }
    }

    useEffect(() => {
        getTicket();
    }, []);

    return (
        <div className="flex flex-nowrap">
            <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
            <div className="flex w-full sm:w-3/4 justify-center item-center">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-4">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit ticket Form
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Tickets from Multiple Sources</p>
                        </div>
                        <form onSubmit={EditTicket}>
                            <div className="w-3/4 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="date" className="leading-7 text-sm text-gray-600">
                                                User Name
                                            </label>
                                            <input
                                                type="text"
                                                // placeholder={date}
                                                required
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                id="date"
                                                name="date"
                                                readOnly
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
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
                                                readOnly
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="date" className="leading-7 text-sm text-gray-600">
                                                Has Issue with
                                            </label>
                                            <input
                                                type="text"
                                                // placeholder={date}
                                                required
                                                value={issue}
                                                onChange={(e) => setIssue(e.target.value)}
                                                id="date"
                                                name="date"
                                                readOnly
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full sm:w-1/2">
                                        <div className="relative">
                                            <label for="cars" className="leading-7 text-sm text-gray-600">Ticket Status</label>

                                            <select value={ticket_status}
                                                onChange={(e) => setTicket_status(e.target.value)} name="ticket_status" id="ticket_status" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="" className="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                                                <option value="Pending" className="leading-7 text-sm text-gray-600">Pending</option>
                                                <option value="In Progress" className="leading-7 text-sm text-gray-600">In Progress</option>
                                                <option value="Resolved" className="leading-7 text-sm text-gray-600">Resolved</option>
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
                                                readOnly
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >
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

export default AdminEditTickets;

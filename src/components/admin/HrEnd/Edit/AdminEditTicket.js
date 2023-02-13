import React, { useState, useEffect } from "react";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment/moment";
import background from "../../../../assets/images/AddNewBanner.jpg"

function AdminEditTickets() {
    const URL = window.location.href;
    const params = useParams();
    const ticketId = params.ticketId;
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
                console.log(data, "hjk")
                setUsername(data.data.data.company)
                setDate(moment(data.data.data.date).format('YYYY-MM-DD'));
                setIssue(moment(data.data.data.date).format('YYYY-MM-DD'));
                setDescription(data.data.data.description);
                setTicket_status(data.data.data.status);
                // alert("✅ Ticket Edited SuccesFully");
            }
            )
            .catch((err) => {
                console.log("errorr", err);
                alert(err);
            });
    }

    const EditTicket = async (e) => {
        e.preventDefault();
        try {
            const data = {
                date: date,
                issue: issue,
                name: username,
                status: ticket_status,
                description: description,
            }
            const response = await AxiosInstance.put(`/api/admin/hr/tickets/${ticketId}`, data);
            if (response.status === 200) {
                alert("✅ticket updated successfully!!");
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
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-4">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit ticket Form
                            </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Tickets from Multiple Sources</p>
                        </div>
                        <form>
                            <div class="w-3/4 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
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
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
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
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="date" class="leading-7 text-sm text-gray-600">
                                                Has Issue with
                                            </label>
                                            <input
                                                type="date"
                                                // placeholder={date}
                                                required
                                                value={issue}
                                                onChange={(e) => setIssue(e.target.value)}
                                                id="date"
                                                name="date"
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="cars" class="leading-7 text-sm text-gray-600">Ticket Status</label>

                                            <select value={ticket_status}
                                                onChange={(e) => setTicket_status(e.target.value)} name="ticket_status" id="ticket_status" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                                                <option value="Pending" class="leading-7 text-sm text-gray-600">Pending</option>
                                                <option value="Resolved" class="leading-7 text-sm text-gray-600">Resolved</option>
                                                <option value="At Hold" class="leading-7 text-sm text-gray-600">At Hold</option>
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
                                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={EditTicket}>
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

import React, { useState, useEffect } from "react";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment/moment";
import background from "../../../../assets/images/AddNewBanner.jpg"
import { useNavigate } from "react-router-dom";
function AdminEditGrievance() {
    const URL = window.location.href;
    const params = useParams();
    const grId = params.grId;
    const navigate = useNavigate();
    // console.log("Grievance", grId);

    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [grievance_status, setGrievance_status] = useState("");


    const styles = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(20%)'
    };

    const getGrievance = async (e) => {
        AxiosInstance.get(`/api/admin/hr/greviances/${grId}`)
            .then((data) => {
                setUsername(data.data.data.user_id.username)
                setDescription(data.data.data.grievance.reason);
                setDate(moment(data.data.data.grievance.created_At).format('YYYY-MM-DD'));
                setGrievance_status(data.data.data.grievance.status);
            }
            )
            .catch((err) => {
                console.log("errorr", err);
                alert(err.response.data.msg);
            });
    }

    const EditGrievance = async (e) => {
        e.preventDefault();
        try {
            const data = {
                date: date,
                name: username,
                status: grievance_status,
                description: description,
            }
            const response = await AxiosInstance.patch(`/api/admin/hr/greviances/${grId}`, data);
            if (response.status === 200) {
                alert("✅Grievance updated successfully!!");
                navigate('/admin/hr/grievance')
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong!!");
        }
    }

    useEffect(() => {
        getGrievance();
    }, []);

    return (
        <div className="flex flex-nowrap">
            <div className=" bg-slate-700 m-2 rounded-lg hidden sm:block sm:w-1/4" style={styles}></div>
            <div className="flex w-full sm:w-3/4 justify-center item-center">
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-4">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Edit Grievance Form
                            </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Capturing Grievances from Multiple Sources</p>
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
                                                readOnly
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
                                                readonly
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>


                                    <div class="p-2 w-full sm:w-1/2">
                                        <div class="relative">
                                            <label for="cars" class="leading-7 text-sm text-gray-600">Grievance Status</label>

                                            <select value={grievance_status}
                                                onChange={(e) => setGrievance_status(e.target.value)} name="grievance_status" id="grievance_status" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <option value="" class="leading-7 text-sm text-gray-500" disabled selected>Select</option>
                                                <option value="Pending" class="leading-7 text-sm text-gray-600">Pending</option>
                                                <option value="Granted" class="leading-7 text-sm text-gray-600">Granted</option>
                                                <option value="In Progress" class="leading-7 text-sm text-gray-600">In Progress</option>
                                                <option value="Rejected" class="leading-7 text-sm text-gray-600">Rejected</option>
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
                                                readOnly
                                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="p-2 w-full">
                                        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={EditGrievance}>
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

export default AdminEditGrievance;

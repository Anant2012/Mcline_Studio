import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";

const AdminEditProfile = (props) => {
    // const { userId } = useSelector((state) => state);
    const URL = window.location.href;
    const params = useParams();
    const userId = params.userId;

    const [data, setData] = useState({});
    const [extension, setExtension] = useState("");
    const [joining_date, setJoining_date] = useState("");
    const [grade, setGrade] = useState("");
    const [reporting_manager, setReporting_manager] = useState("");
    const navigate = useNavigate();

    const onSubmitClick = () => {
        // navigate(`/hr/edit_profile`);
    };
    // const EditPersonalDetails = async (e) => {
    //     setIsDisabled(true);
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("name", name);
    //     formData.append("employee_code", employee_code);
    //     formData.append("designation", designation);
    //     formData.append("grade", grade);
    //     formData.append("reporting_manager", reporting_manager);
    //     formData.append("emergency_contact_number", emergency_contact_number);
    //     formData.append("blood_group", blood_group);
    //     formData.append("personal_contact_number", personal_contact_number);
    //     formData.append("personal_email_id", personal_email_id);
    //     formData.append("official_email_id", official_email_id);
    //     formData.append("company_id", company_id);
    //     formData.append("profile_image", profileImg);
    //     try {
    //         const response = await AxiosInstance.put(`/api/hr/update/user/${userId}`, formData)
    //         if (response.status === 200) {
    //             alert("✅ Profile Edited SuccesFully");
    //             navigate(`/hr/personaldetails`);
    //             setIsDisabled(false);
    //         }
    //     } catch (error) {
    //         alert(error.response.data.msg);

    //     };
    // }
    useEffect(() => {
        AxiosInstance.get(`/api/hr/get/personal/${userId}`)
            .then((res) => setData(res.data.data[0].personal_details))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="overflow-hidden bg-white w-3/4 mx-auto mt-12 shadow-md sm:rounded-lg border border-gray-300">
                <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg sm:text-xl font-medium leading-6 text-gray-900">
                                {data.name}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm sm:text-md text-gray-500">
                                Personal details
                            </p>
                        </div>

                        <img
                            className="h-16 w-16 sm:h-24 sm:w-24 rounded-full"
                            src={`https://mc-line2.onrender.com/${data.profile_image}`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="border-t border-gray-300">
                    <dl>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Employee Code</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.employee_code}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Designation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.designation}
                            </dd>
                        </div>
<<<<<<< HEAD
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Grade</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.grade}
=======

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
                            <dt class="text-sm font-medium text-gray-500">Joining Date</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input
                                    type="date"
                                    id="text"
                                    value={joining_date}
                                    onChange={(e) => setJoining_date(e.target.value)}
                                    
                                    name="text"
                                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
                            <dt class="text-sm font-medium text-gray-500">Extension</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <input
                                    type="text"
                                    id="text"
                                    value={extension}
                                    onChange={(e) => setExtension(e.target.value)}
                                    
                                    name="text"
                                    class="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
>>>>>>> a81116f894abdcbea577dffdab5b302d5ff0f0e3
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Reporting Manager
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.reporting_manager}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Emergency Contact Number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.emergency_contact_number}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Blood Group</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.blood_group}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Personal Contact Number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.personal_contact_number}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Personal Email ID
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.personal_email_id}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Official Email ID
                            </dt>
                            <dd className="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.official_email_id}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Company ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.company_id}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <button
                    onClick={onSubmitClick}
                    className="mx-auto w-11/12 sm:w-3/4 text-white bg-[#047EC1] mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AdminEditProfile;

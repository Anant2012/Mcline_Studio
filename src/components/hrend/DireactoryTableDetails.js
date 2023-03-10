import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import { useParams } from "react-router";
import moment from "moment";

const DirectoryTableDetails = () => {
    // const { userId } = useSelector((state) => state);
    const URL = window.location.href;
    const params = useParams();
    const userId = params.userId;

    const [data, setData] = useState({});
    const navigate = useNavigate();

 
    const getData = async () => {
        try {
            const response = await AxiosInstance.get(`/api/hr/get/personal/${userId}`)
            if (response.status === 200) {
                setData(response.data.data[0].personal_details)
            }
        } catch (error) {
            alert(error);

        };
    };
    useEffect(() => {
        getData();
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

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Grade</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.grade}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Extension</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.extension}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Joining Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.joining_date}
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
        </div>
    );
};

export default DirectoryTableDetails;

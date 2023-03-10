import React from "react";
// import { FaUserEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
// import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Table from "../../../constant/Table/Table"

const DirectoryTable = () => {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();
    const onSearch = (val) => {
        setFilteredData(
            data?.filter(
                (x) =>
                    x.personal_details.name.toLowerCase().match(val.toLowerCase()) ||
                    x.personal_details.employee_code
                        .toLowerCase()
                        .match(val.toLowerCase()) ||
                    x.personal_details.company_id
                        .toLowerCase()
                        .match(val.toLowerCase()) ||
                    x.official_email_id.status.toLowerCase().match(val.toLowerCase())
            )
        );
    };

    const getData = async () => {
        AxiosInstance.get(`/api/admin/user`)
            .then((data) => {
                setData(data.data.data);
                console.log(data.data.data);
            })
            .catch((err) => console.log("errorr", err));
    };

    useEffect(() => {
        getData();
        // FilterLead();
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <>
            <div className="flex flex-wrap mx-auto mt-20 w-11/12 sm:w-3/4">
                <div className="w-full flex-row sm:flex-row p-2  item-center flex text-white justify-end bg-[#0483c8] rounded-lg">
                    <h1 className="h-full  flex text-left w-full pl-2 sm:pl-8 items-center title-font text-xl">
                        Profiles
                    </h1>
                    <div className="flex flex-row justify-center pr-2 sm:pr-8 items-center relative">
                        <label
                            for="name"
                            className="my-auto mr-2  py-3 title-font tracking-wider  text-sm decoration-white"
                        >
                            Search
                        </label>
                        <input
                            type="text"
                            onChange={(e) => onSearch(e.target.value)}
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500
                focus:bg-white focus:bg-opacity-5 focus:ring-2 focus:ring-indigo-200 text-base outline-none px-2
                leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
            </div>

            <section className="text-gray-600 w-11/12 sm:w-3/4 mx-auto body-font">
                <div className="container px-1 sm:px-5 py-10 mx-auto">
                    <div className="flex flex-wrap">
                        {filteredData?.map((data, index) => {
                            return (
                                <>
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className="p-6">
                                                <div className="flex w-full">
                                                    <div className="w-1/2">
                                                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                                {data.personal_details.employee_code}
                                                            </h2> */}
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                            {data.personal_details.name}
                                                            <p className="text-xs title-font font-normal text-gray-800 break-words">
                                                                {data.personal_details.official_email_id}
                                                            </p>
                                                        </h1>
                                                    </div>

                                                    <div className="w-1/2 flex justify-end">
                                                        <img
                                                            className="h-14 w-14 rounded-full"
                                                            src={`https://mc-line2.onrender.com/${data.personal_details.profile_image}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <p className="leading-relaxed mb-3 mt-2">
                                                    <div className="w-full flex">
                                                        <div className="w-1/2 my-1 text-left">
                                                            <div className="text-xs text-gray-500">
                                                                Employee Code
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.employee_code}
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 my-1 text-right">
                                                            <div className="text-xs text-gray-500 whitespace-nowrap">
                                                                DOB
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details?.DOB}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex">
                                                        <div className="w-1/2 my-1 text-left">
                                                            <div className="text-xs text-gray-500">
                                                                Personal Contact
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.personal_contact_number}
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 my-1 text-right">
                                                            <div className="text-xs text-gray-500">
                                                                Personal Email ID
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium break-words">
                                                                {data.personal_details.personal_email_id}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex">
                                                        <div className="w-1/2 my-1 text-left">
                                                            <div className="text-xs text-gray-500">
                                                                Blood Group
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.blood_group}
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 my-1 text-right">
                                                            <div className="text-xs text-gray-500 whitespace-nowrap">
                                                                Emergency Contact
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.emergency_contact_number}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex">
                                                        <div className="w-1/2 my-1 text-left">
                                                            <div className="text-xs text-gray-500">
                                                                Reporting Manager
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.reporting_manager}
                                                            </div>
                                                        </div>
                                                        <div className="w-1/2 my-1 text-right">
                                                            <div className="text-xs text-gray-500">
                                                                Company ID
                                                            </div>
                                                            <div className="text-xs text-gray-800 font-medium">
                                                                {data.personal_details.company_id}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <div className="w-full flex justify-end mt-2">
                                    <button
                                        className="text-white text-sm font-medium bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                        Edit
                                    </button>
                                </div> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DirectoryTable;


import React, { useState, useEffect, useRef } from 'react'
import { AxiosInstance } from '../../../AxiosInstance/AxiosInstance';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from 'moment/moment';

const EditProfile = () => {
    const { userId } = useSelector((state) => state);

    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [employee_code, setEmployee_code] = useState("");
    const [designation, setDesignation] = useState("");
    const [grade, setGrade] = useState("");
    const [reporting_manager, setReporting_manager] = useState("");
    const [emergency_contact_number, setEmergency_contact_number] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [birth_date, setBirth_date] = useState("");
    const [personal_contact_number, setPersonal_contact_number] = useState("");
    const [personal_email_id, setPersonal_email_id] = useState("");
    const [extension, setExtension] = useState("");
    const [joining_date, setJoining_date] = useState("");
    const [official_email_id, setOfficial_email_id] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [profileImg, setProfileImg] = useState();

    const [isDisabled, setIsDisabled] = useState(false);

    const EditPersonalDetails = async (e) => {
        setIsDisabled(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("employee_code", employee_code);
        formData.append("designation", designation);
        formData.append("grade", grade);
        formData.append("reporting_manager", reporting_manager);
        formData.append("emergency_contact_number", emergency_contact_number);
        formData.append("blood_group", blood_group);
        formData.append("personal_contact_number", personal_contact_number);
        formData.append("personal_email_id", personal_email_id);
        formData.append("official_email_id", official_email_id);
        formData.append("company_id", company_id);
        formData.append("joining_date", joining_date);
        formData.append("extension", extension);
        formData.append("profile_image", profileImg);
        // formData.append("birth", birth_date);
        try {
            const response = await AxiosInstance.put(`/api/hr/update/user/${userId}`, formData)
            if (response.status === 200) {
                alert("✅ Profile Edited SuccesFully");
                // navigate(`/hr/personaldetails`);
                setIsDisabled(false);
            }
        } catch (error) {
            alert(error.response.data.msg);

        };
        try {
            const response = await AxiosInstance.put(`api/hr/update/user/${userId}`, profileImg)
            if (response.status === 200) {
                // alert("✅ ProfilePic Edited SuccesFully");
                setIsDisabled(false);
            }
        } catch (error) {
            alert(error.response.data.msg);

        };
        navigate(`/hr/personaldetails`);
    }


    const ProfileImageClick = () => {
        const imgBtn = document.querySelector("#imgBtn");
        imgBtn.click();
    }


    const getData = async () => {
        try {
            const response = await AxiosInstance.get(`/api/hr/get/personal/${userId}`)
            if (response.status === 200) {
                console.log(response.data.data[0].personal_details)
                setPersonal_contact_number(response.data.data[0].personal_details.personal_contact_number);
                setPersonal_email_id(response.data.data[0].personal_details.personal_email_id);
                setOfficial_email_id(response.data.data[0].personal_details.official_email_id);
                setCompany_id(response.data.data[0].personal_details.company_id);
                setEmployee_code(response.data.data[0].personal_details.employee_code);
                setReporting_manager(response.data.data[0].personal_details.reporting_manager)
                setDesignation(response.data.data[0].personal_details.designation);
                setExtension(response.data.data[0].personal_details.extension);
                setJoining_date(moment(response.data.data[0].personal_details.joining_date).format('YYYY-MM-DD'));
                setBlood_group(response.data.data[0].personal_details.blood_group);
                setBirth_date(moment(response.data.data[0].personal_details.joining_date).format('YYYY-MM-DD'));
                setEmergency_contact_number(response.data.data[0].personal_details.emergency_contact_number);
                setName(response.data.data[0].personal_details.name);
                setGrade(response.data.data[0].personal_details.grade);
                setProfileImg(response.data.data[0].personal_details.profile_image)
            }
        } catch (error) {
            alert(error);

        };
    };

    useEffect(() => {
        getData();
    }, []);

    const imgBoxRef = useRef(null);
    const [showImage, setShowImage] = useState(0);
    function handleImageChange(event) {
        console.log('uploaded');
        imgBoxRef.current.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
        imgBoxRef.current.style.backgroundSize = "contain";
        imgBoxRef.current.style.backgroundPosition = "center";
        imgBoxRef.current.style.backgroundRepeat = "no-repeat";
        setShowImage(1);
    }

    return (
        <>

            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
                    Fill your Details
                </h1>
            </div>
            <div className="overflow-hidden bg-white w-11/12 sm:w-3/4 mx-auto shadow-md sm:rounded-lg border border-gray-300">
                <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="relative flex flex-row  items-center">
                                <label for="date" className="text-sm font-medium mr-2 text-gray-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="text"
                                    className="w-3/4 sm:w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="center h-full flex items-center justify-center">
                            <div className='flex flex-col justify-center '>
                                <div id="imgBox" ref={imgBoxRef} className={`${showImage ? "block" : "hidden"} mb-2 h-[150px] bg-transparent`}></div>
                                <div className={`form-input w-[350px] flex ${showImage ? "justify-center" : "justify-end"} bg-white`}>
                                    <label for="file-ip-1" className=' block w-1/2 leading-10 text-center bg-[#1172c2] text-[15px] uppercase font-semibold cursor-pointer rounded-[5px] text-white' onClick={(e) => {
                                        e.preventDefault();
                                        ProfileImageClick();
                                        // console.log("Clicked");
                                    }} >Upload Image</label>
                                    <input className='file-upload-input hidden' id="imgBtn" type="file" accept="image/*" onChange={handleImageChange}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-300">
                        <dl>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Employee Code</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={employee_code}
                                        onChange={(e) => setEmployee_code(e.target.value)}
                                        name="text"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Designation</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                        name="text"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Grade</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={grade}
                                        onChange={(e) => setGrade(e.target.value)}
                                        readOnly
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
                                <dt class="text-sm font-medium text-gray-500">Extension</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={extension}
                                        onChange={(e) => setExtension(e.target.value)}
                                        readOnly
                                        name="text"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Reporting Manager</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={reporting_manager}
                                        onChange={(e) => setReporting_manager(e.target.value)}
                                        name="text"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Emergency Contact Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="number"
                                        id="number"
                                        value={emergency_contact_number}
                                        onChange={(e) => setEmergency_contact_number(e.target.value)}
                                        name="number"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="date"
                                        id=""
                                        value={birth_date}
                                        onChange={(e) => setBirth_date(e.target.value)}
                                        name="number"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Blood Group</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id=""
                                        value={blood_group}
                                        onChange={(e) => setBlood_group(e.target.value)}
                                        name="number"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Personal Contact Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="number"
                                        id="number"
                                        value={personal_contact_number}
                                        onChange={(e) => setPersonal_contact_number(e.target.value)}
                                        name="number"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Personal Email ID
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={personal_email_id}
                                        onChange={(e) => setPersonal_email_id(e.target.value)}
                                        name="email"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Official Email ID
                                </dt>
                                <dd className="mt-1 t ext-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={official_email_id}
                                        onChange={(e) => setOfficial_email_id(e.target.value)}
                                        name="email"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Company ID</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="text"
                                        value={company_id}
                                        onChange={(e) => setCompany_id(e.target.value)}
                                        name="text"
                                        className="w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button onClick={EditPersonalDetails} className="mx-auto w-11/12 sm:w-3/4 text-white bg-[#047EC1] mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg">Submit</button>
                </div>
            </div>

        </>
    );
};

export default EditProfile;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";

const LatestResp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AxiosInstance.get(`/api/admin/hr/top/five`)
      .then((data) => setData(data.data.data))
      .catch((err) => console.log("errorr", err));
  }, []);
  return (
    <ol class="items-center sm:flex">
      {data.map((itemData, index) => (
        <SingleItem data={itemData} key={index} />
      ))}
    </ol>
  );
};
export default LatestResp;

const SingleItem = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    data?.leaves && navigate(`/admin/hr/leaves/edit/${data._id}`);
    data?.grievance && navigate(`/admin/hr/grievance/edit/${data._id}`);
    data?.tickets && navigate(`/admin/hr/tickets/edit/${data._id}`);
  };
  return (
    <>
      <li class="relative mb-6 sm:mb-0 md:w-56 md:h-56">
        <div class="absolute w-3 h-3 bg-[#047EC1] rounded-full mt-2 -left-4 border border-white dark:border-gray-900 dark:bg-gray-700 md:hidden"></div>
        <time class="text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
          {moment(data.createdAt).fromNow()}
        </time>
        <div class="mt-2 items-center hidden md:flex">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-blue-800 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="pr-5">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {data?.grievance && "User filed a Grievance"}
            {data?.leaves && "User applied a Leave"}
            {data?.tickets && "User raised a Ticket"}
          </h3>
          <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
            {data?.grievance?.reason}
            {data?.leaves?.description}
            {data?.tickets?.reason}
          </p>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="">Status : </span>
            {data?.grievance?.status}
            {data?.leaves?.status}
            {data?.tickets?.status}
          </p>
          <button
            onClick={handleClick}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            View
            <svg
              class="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </li>
    </>
  );
};

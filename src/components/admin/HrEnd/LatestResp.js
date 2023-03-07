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
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
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
    <li class="mb-10 ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {moment(data.createdAt).fromNow()}
      </time>
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
    </li>
  );
};

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ViewProfile from "./ViewProfile";
import FillProfile from "./FillProfile";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";

function PersonalDetails() {
  const [profileFilled, setProfileFilled] = useState(1);
  const [status, setStatus] = useState("");
  const { userId } = useSelector((state) => state);

  const onEditClick = () => {
    setProfileFilled(0);
  };
 
  useEffect(() => {
    AxiosInstance.get(`/api/user/get/user/${userId}`)
      .then((res) => setStatus(res.data.data.status))
      .catch((err) => console.log(err));
    
    setProfileFilled(status === "active" ? 1 : 0);
  }, [status]);
  
console.log(status,"efg")
  return (
    <>
      <FillProfile
        viewFillProfile={profileFilled ? 0 : 1}
        setProfileFilled={setProfileFilled}
      />
      <ViewProfile
        viewViewProfile={profileFilled ? 1 : 0}
        setProfileFilled={setProfileFilled}
      />
      {/* <div className={`w-full flex justify-center ${profileFilled ? "block" : "hidden"}`}>
        <button className="mx-auto w-11/12 sm:w-3/4 text-white bg-[#047EC1] mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg" onClick={onEditClick}>Edit Profile</button>
      </div> */}
    </>
  );
}

export default PersonalDetails;

import React from "react";
import ViewProfile from "./ViewProfile"
import FillProfile from "./FillProfile";
import { useState } from "react";

function PersonalDetails() {
  const [profileFilled, setProfileFilled] = useState(0);

  return (
    <>  
      <FillProfile viewFillProfile={(profileFilled)?0:1}/>
      <ViewProfile viewViewProfile={(profileFilled)?1:0}/>
      <div className={`w-full flex justify-center ${profileFilled?"block":"hidden"}`}>
         <button className="mx-auto w-11/12 sm:w-3/4 text-white bg-indigo-500 mt-4 mb-12 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit Profile</button>
      </div>
    </>
  );
}

export default PersonalDetails;

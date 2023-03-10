import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { handleLogIn } from "../../../Redux/actions";
import background from "./AdminHR.gif";

const AdminHREndLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  const LoginUser = () => {
    const data = { email, password };
    AxiosInstance.post("/api/user/signin", data)
      .then(({ data }) => {
        if (data.user.role.includes("hr")) {
          dispatch(handleLogIn(data, "hr"));
          navigate("/admin/hrend");
        } else alert("User can not log in as hr");
      })
      .catch((err) => alert(err.response.data.msg));
  };

  return (
    <>
      <div
        className={`${props.hrLogin ? "hidden" : "block"
          } h-[500px]   w-11/12 sm:w-3/4 bg-gray-100 border-[1px] border-[#047EC1] flex mx-auto sm:shadow-md my-32`}
      >
        <div className="w-full lg:w-1/2 my-auto">
          <div className="w-3/4 mx-auto">
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
              HR LogIn
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please fill out the form to login
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0473af] focus:ring-1  focus:ring-[#0473af] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#0473af] focus:ring-1  focus:ring-[#0473af] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button
              className="text-white bg-[#047EC1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg"
              onClick={LoginUser}
            >
              LogIn
            </button>
            {/* <p className="text-xs text-gray-500 mt-7 flex justify-center mx-auto"><a href='/' className='text-[16px] text-blue-700'>Create Account</a></p> */}
          </div>
        </div>
        <div
          className="d-none lg:w-1/2 bg-white flex  justify-center items-center"
          style={styles}
        >
        </div>
      </div>
    </>
  );
};

export default AdminHREndLogin;

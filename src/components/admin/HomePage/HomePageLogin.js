import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../AxiosInstance/AxiosInstance";
import { handleLogIn } from "../../../Redux/actions";
import background from "../../auth/login_banner.jpg";

const HomePageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(60%)",
  };
  const LoginUser = () => {
    const data = { email, password };
    AxiosInstance.post("/api/user/signin", data)
      .then(({ data }) => {
        if (data.user.role.includes("admin")) {
          dispatch(handleLogIn(data, "admin"));
          navigate("/admin");
        } else alert("User can not log in as admin");
      })
      .catch((err) => alert(err.response.data.msg));
  };

  return (
    <div
      className={"h-[500px]  w-full sm:w-3/4 flex mx-auto sm:shadow-md my-12"}
    >
      <div className="w-full lg:w-1/2 my-auto">
        <div className="w-3/4 mx-auto">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Admin LogIn
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Please fill out the form to login
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button
            className="text-white bg-[#047EC1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0473af] rounded text-lg"
            onClick={LoginUser}
          >
            LogIn
          </button>
        </div>
      </div>
      <div
        className="d-none lg:w-1/2  flex  justify-center items-center"
        style={styles}
      >
        <div className="w-3/4 backdrop-opacity-30 blur-[1px] h-3/4 mx-auto backdrop-grayscale bg-slate-800/40"></div>
      </div>
    </div>
  );
};

export default HomePageLogin;

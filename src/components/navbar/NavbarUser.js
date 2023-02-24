import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import background from "../footer/footerImg.png";
import { logOut } from "../../Redux/actions";

const NavbarUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { role, userId, user } = useSelector((state) => state);
  const isLoggedIn = window.location.pathname.includes("/login")
    ? false
    : window.location.pathname === "/"
    ? role === "user"
      ? true
      : false
    : !!userId
    ? true
    : false;

  const handleAuth = () => {
    isLoggedIn ? dispatch(logOut()) : navigate("/login");
  };
  const redirectToHome = () => {
    if (window.location.pathname.includes("/admin/hr"))
      navigate("/admin/hrend");
    else if (window.location.pathname.includes("/admin/operation"))
      navigate("/admin/operation");
    else if (window.location.pathname.includes("/admin")) navigate("/admin");
    else navigate("/");
  };

  return (
    <nav className="w-full bg-gray-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center text-white font-sans text-sm ml-4 sm:text-xl font-semibold subpixel-antialiased sm:tracking-wider cursor-pointer">
              <img
                src={`${background}`}
                className="max-w-[120px] flex h-auto"
                alt="..."
                onClick={redirectToHome}
              />
            </div>
          </div>
          <div className="inset-y-0 right-0 flex flex-row items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-8">
            {isLoggedIn ? <p className="text-gray-700 font-medium">Hi, {user} </p> : ""}
            </div>
            <div className="relative">
              <div>
                <button
                  className="text-white text-sm font-medium bg-[#047EC1] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#0473af] rounded-full text-sm mr-3"
                  onClick={handleAuth}
                >
                  {isLoggedIn ? "Log Out" : "Log In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;

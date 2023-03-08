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
    <>
    <nav className="w-full  bg-white shadow-md">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch justify-start">
            <div className="flex flex-shrink-0 items-center text-white font-sans text-sm ml-4 sm:text-xl font-semibold subpixel-antialiased sm:tracking-wider cursor-pointer">
              <img
                src={`${background}`}
                className="max-w-[80px] sm:max-w-[120px] flex h-auto"
                alt="..."
                onClick={redirectToHome}
              />
            </div>
          </div>
          <div className="inset-y-0 right-0 flex flex-row pr-2 items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-4 sm:mr-8">
            {isLoggedIn ? <p className="text-gray-700 font-medium text-sm">Hi, {user} </p> : ""}
            </div>
            <div>
              <div>
                <button
                  className="text-white  font-medium bg-[#047EC1] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#0473af] rounded-full text-sm sm:mr-3"
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
    <svg xmlns="http://www.w3.org/2000/svg" className="-z-10 absolute" viewBox="0 0 1440 320"><path fill="#047EC1" fill-opacity="0.10" d="M0,96L60,133.3C120,171,240,245,360,229.3C480,213,600,107,720,106.7C840,107,960,213,1080,261.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </>
  );
};

export default NavbarUser;

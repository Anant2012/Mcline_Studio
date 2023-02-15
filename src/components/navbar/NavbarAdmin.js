import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import background from "../footer/footerImg.png";

const NavbarAdmin = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <nav className="w-full bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center text-white font-sans text-sm ml-4 sm:text-xl font-semibold subpixel-antialiased sm:tracking-wider ">
                <Link to="/admin">
                  <img
                    src={`${background}`}
                    class="max-w-[120px] flex h-auto"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative">
                <div className={`${loggedIn ? "hidden" : "block"}`}>
                  <Link to="/login">
                    <button
                      className="text-white text-sm font-medium bg-[#047EC1] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#0473af] rounded-full text-sm mr-3"
                      onClick={(e) => {
                        e.preventDefault();
                        setLoggedIn(true);
                      }}
                    >
                      Log In
                    </button>
                  </Link>
                </div>

                <div className={`${!loggedIn ? "hidden" : "block"}`}>
                  <Link to="/login">
                    <button
                      className="text-white text-sm font-medium bg-[#047EC1] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#0473af] rounded-full text-sm mr-3"
                      onClick={(e) => {
                        e.preventDefault();
                        setLoggedIn(false);
                      }}
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;

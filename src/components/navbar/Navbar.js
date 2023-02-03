import {useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <nav className="w-full bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center text-white font-sans text-sm ml-4 sm:text-xl font-semibold subpixel-antialiased sm:tracking-wider ">
                McLine STUDIOS
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}
              <div className="relative">
                <div className={`${loggedIn ? "hidden" : "block"}`}>
                  <Link to="/login">
                    <button className="text-white text-sm font-medium bg-indigo-500 border-0 py-2 px-4 sm:px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm mr-3">
                      LogIn
                    </button>
                  </Link>

                  <Link to="/signup">
                    <button className="text-white text-sm font-medium bg-indigo-500 border-0 py-2 px-4 sm:px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">
                      SignUp
                    </button>
                  </Link>
                </div>

                <div className={`${!loggedIn ? "hidden" : "block"}`}>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white focus:ring-offset-2 ring-offset-gray-800"
                    id="myElement"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setHover(false);
                      }, 100);
                    }}
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 z-10 mt-2 w-48  ${
                    hover || open ? "block" : "hidden"
                  } origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                  onMouseLeave={() => {
                    {
                      setTimeout(() => {
                        setHover(false);
                        setOpen(false);
                      }, 100);
                    }
                  }}
                  onMouseEnter={() => {
                    setOpen(true);
                  }}
                >
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setLoggedIn(false);
                      setOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar

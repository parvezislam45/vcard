import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-16 shadow-lg h-44">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                {" "}
                <a
                  href="/"
                  className="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-4 focus:border-b-2-violet-300 ease-in duration-300 text-lg font-bold"
                >
                  Home
                </a>
              </NavLink>
              <NavLink to="/">
                {" "}
                <a
                  href="/"
                  className="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-4 focus:border-b-2-violet-300 ease-in duration-300 text-lg font-bold"
                >
                  Pricing
                </a>
              </NavLink>
              <NavLink to="/">
                {" "}
                <a
                  href="/"
                  className="text-black transition-colors transform dark:text-black border-blue-500 sm:mx-6 focus:outline-none focus:border-b-4 focus:border-b-2-violet-300 ease-in duration-300 text-lg font-bold"
                >
                  Business
                </a>
              </NavLink>
            </ul>
          </div>
          <img
            className="w-48 h-16"
            src="https://i.postimg.cc/yxQG3cBq/Screenshot-2023-06-29-230321.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-center gap-20">
            <Link
              to="/"
              className={`px-1 py-1 border-b-4 text-3xl font-bold ${
                location.pathname === "/"
                  ? "border-indigo-600"
                  : "border-transparent"
              } hover:border-indigo-600`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-1 py-1 border-b-4 text-3xl font-bold ${
                location.pathname === "/about"
                  ? "border-indigo-600"
                  : "border-transparent"
              } hover:border-indigo-600`}
            >
              Pricing
            </Link>
            <Link
              to="/business"
              className={`px-1 py-1 border-b-4 text-3xl font-bold ${
                location.pathname === "/business"
                  ? "border-indigo-600"
                  : "border-transparent"
              } hover:border-indigo-600`}
            >
              Business
            </Link>
          </ul>
        </div>

        <div className="navbar-end gap-10 hidden lg:flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-lg w-7 h-7 rounded-full indicator-item bg-sky-400">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-48 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-normal text-md">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                <button className="btn btn-sm">Small</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {!user && (
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png"alt="" />
              </div>
            </label>
            )}
            {user && (
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user.photoURL} alt='' />
              </div>
            </label>
            )}
              
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                 {user && (
                <li>
                  <h1 class=" text-2xl font-bold text-black">
                    {user.displayName}
                   
                  </h1>
                </li>
              )}
              {user ? (
                <li><button className="btn btn-ghost" onClick={logout}>
                 <button className="btn btn-md text-xl font-normal hover:bg-yellow-800 bg-black text-white">Sign Out</button>
                </button></li>
              ) : (
                <Link to="/login"><h1 className="text-2xl font-bold text-black">Login</h1></Link>
              )}
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;

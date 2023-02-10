import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-20 bg-red-800 flex justify-between items-center px-10">
        <div className="text-xl text-white font-semibold">Logo</div>
        {/* ------- medium device & upper links --------------- */}
        <div className="hidden md:flex md:items-center md:gap-5">
          <Link to="/" className="text-white hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-500">
            About
          </Link>
          <Link to="/skills" className="text-white hover:text-yellow-500">
            Skills
          </Link>
          <Link to="/projects" className="text-white hover:text-yellow-500">
            Project
          </Link>
          <Link
            to="/contact"
            className="transition-all duration-200 bg-yellow-600 hover:bg-yellow-800 text-white px-3 py-1.5 rounded-sm"
          >
            Contact me
          </Link>
        </div>
        {/* -------- menu icon ------------------------- */}
        {!isOpen && (
          <div className="md:hidden" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        )}
      </div>
      {/* ------- Mobile Slider --------- */}
      {isOpen && (
        <div>
          <div
            id="container"
            className="md:hidden fixed inset-0 h-screen bg-gray-500 bg-opacity-60 w-full"
            onClick={(element) => {
              if (element.target.id === "container") setIsOpen(false);
            }}
          >
            <div className="flex justify-end w-52 h-full bg-red-300 bg-opacity-50 ">
              <div className="w-full">
                <div className="h-20 pr-10 flex justify-end items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="my-5 flex flex-col gap-5">
                  <Link to="/" className="text-center">
                    Home
                  </Link>
                  <Link to="/about" className="text-center">
                    About
                  </Link>
                  <Link to="/skills" className="text-center">
                    Skills
                  </Link>
                  <Link to="/projects" className="text-center">
                    Project
                  </Link>
                  <div className="flex justify-center">
                    <Link
                      to="/contact"
                      className="bg-red-500 text-white px-3 py-1.5 rounded-md"
                    >
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

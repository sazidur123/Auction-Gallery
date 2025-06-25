import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm h-[84px]">
      {/* Left Section */}
      <div className="flex-1 ml-12 md:ml-28">
        <h2 className="font-extrabold text-2xl">
        <span className="text-blue-600">Auction</span><span className="text-amber-300">Gallery</span>
        </h2>
      </div>

      {/* Center Section (Links) */}
      <div className="flex justify-center space-x-6 flex-1 mr-[450px]">
        <a href="#" className="text-gray-800 hover:text-amber-300">Home</a>
        <a href="#" className="text-gray-800 hover:text-amber-300">Auctions</a>
        <a href="#" className="text-gray-800 hover:text-amber-300">Categories</a>
        <a href="#" className="text-gray-800 hover:text-amber-300">How it works</a>
      </div>

      {/* Right Section (Cart & Avatar) */}
      <div className="flex-none mr-12 md:mr-28">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-4">
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>

        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

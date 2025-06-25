import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-28 bg-white py-8 px-5 shadow-md h-[444px] flex flex-col items-center justify-center">
      <h3 className="text-blue-700 text-xl mb-2">
        Auction<span className="text-yellow-400">Gallery</span>
      </h3>
      <p className="my-1">Bid. Win. Own.</p>
      <div className="my-2 text-sm">
        <a href="#" className="mx-2 text-blue-700 no-underline">
          Home
        </a>
        |
        <a href="#" className="mx-2 text-blue-700 no-underline">
          Auctions
        </a>
        |
        <a href="#" className="mx-2 text-blue-700 no-underline">
          Categories
        </a>
        |
        <a href="#" className="mx-2 text-blue-700 no-underline">
          How it works
        </a>
      </div>
      <p className="text-xs text-gray-500">© 2025 AuctionHub. All rights reserved.</p>
    </footer>
  );
}

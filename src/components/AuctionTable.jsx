import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function AuctionTable({ items, handleFavorite, disabledIds, favorites }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg">
      <table className="min-w-full h-[840px] divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider text-xs">
          <tr>
            <th scope="col" className="px-6 py-3">Items</th>
            <th scope="col" className="px-6 py-3">Current Bid</th>
            <th scope="col" className="px-6 py-3">Time Left</th>
            <th scope="col" className="px-6 py-3">Bid Now</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => {
            const isDisabled = disabledIds.includes(item.id);
            const isFavorited = favorites.some((fav) => fav.id === item.id);

            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-sm" />
                  <span className="font-medium text-gray-800">{item.title}</span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">${item.currentBidPrice.toLocaleString()}</td>
                <td className="px-6 py-4 text-gray-700">{item.timeLeft}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleFavorite(item)}
                    disabled={isDisabled}
                    className={`text-xl transition-transform hover:scale-110 ${
                      isDisabled
                        ? "text-red-500 cursor-not-allowed"
                        : "text-gray-500 hover:text-red-500"
                    }`}
                  >
                    {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

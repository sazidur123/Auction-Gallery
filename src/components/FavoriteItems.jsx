import React from "react";

export default function FavoriteItems({ favorites, handleRemoveFavorite, totalBidAmount }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2 mb-4 justify-center">
        <span>♡</span> Favorite Items
      </h3>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="font-medium mb-1">No favorites yet</p>
          <p className="text-sm">Click the heart icon on any item<br />to add it to your favorites</p>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 bg-gray-50 rounded-lg p-3 shadow-sm hover:bg-gray-100 transition-all">
              <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">${item.currentBidPrice.toLocaleString()} | {item.bidsCount} bids</p>
              </div>
              <button
                onClick={() => handleRemoveFavorite(item.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-gray-200 mt-4 pt-3 flex justify-between items-center font-semibold text-sm">
        <span>Total Bids Amount</span>
        <span>${totalBidAmount.toLocaleString().padStart(4, "0")}</span>
      </div>
    </div>
  );
}

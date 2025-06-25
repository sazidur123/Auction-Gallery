import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AuctionTable from "./components/AuctionTable";
import FavoriteItems from "./components/FavoriteItems";
import Footer from "./components/Footer";
import bidItemsData from "./data/bidItems.json";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [disabledIds, setDisabledIds] = useState([]);

  const handleFavorite = (item) => {
    if (!disabledIds.includes(item.id)) {
      setFavorites((prev) => {
        const updatedFavorites = prev.some(fav => fav.id === item.id)
          ? prev.filter((fav) => fav.id !== item.id)
          : [...prev, item];

        return updatedFavorites;
      });
      setDisabledIds((prev) =>
        prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
      );
      toast.success(`"${item.title}" added to favorites!`);
    }
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    const removedItem = favorites.find((item) => item.id === id);
    setFavorites(updatedFavorites);
    setDisabledIds((prev) => prev.filter((itemId) => itemId !== id));
    if (removedItem) {
      toast.info(`"${removedItem.title}" removed from favorites.`);
    }
  };

  const totalBidAmount = favorites.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  return (
    <div className="font-sora p-5">
      <Navbar />
      <Banner />

      <div className="ml-[140px] mr-[140px]">
        <h1 className="mt-32 text-3xl font-semibold text-blue-950">Active Auction</h1>
        <h3 className="text-black">Discover and bid on extraordinary items</h3>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="md:w-[65%] bg-base-100 rounded-2xl mr-6">
            <AuctionTable
              items={bidItemsData}
              handleFavorite={handleFavorite}
              disabledIds={disabledIds}
              favorites={favorites}
            />
          </div>

          <div className="md:w-[30%]">
            <FavoriteItems
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
              totalBidAmount={totalBidAmount}
            />
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

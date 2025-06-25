export default function Banner() {
  return (
    <div
      className="bg-[url('https://i.ibb.co/9HQxwqyk/Banner-min.jpg')] bg-cover bg-center h-[730px] flex items-center pl-12"
    >
      <div className="text-left max-w-2xl">
        <h1 className="font-semibold text-5xl text-white mt-12">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-white font-light text-2xl mt-4">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
        </p>
        <button className="bg-white text-black font-medium text-xl p-3 rounded-full mt-6 transition-transform hover:scale-105">
          Explore Auctions
        </button>
      </div>
    </div>
  );
}

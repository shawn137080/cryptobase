import React from "react";

import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = React.useState("");


  return (
    <div className="rounded-div my-4 duration-300">
      <div className="flex md:flex-row justify-between pt-4 pb-6 text-center md:text-left">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form className="pt-3" action="">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="w-[180px] md:table-cell">24h Volume</th>
            <th className="w-[180px] md:table-cell">Mkt</th>
            <th className="hidden md:table-cell">Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((val) => {
              if (searchText === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return val;
              }
            })
            .map((coin) => {
              return <CoinItem key={coin.id} coin={coin} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;

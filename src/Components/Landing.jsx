import React, { useEffect, useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";

// API
import { getCoin } from "../Services/baseUrl";

// components
import Loading from "./Loading";
import Coin from "./Coin";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
 console.log(search);
  };

  const searchCoin =  coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  
  return (
    <>
      <input
        placeholder='Search'
        type='text'
        value={search}
        onChange={searchHandler}
      />
      <br />
      {searchCoin.length > 1 ? (
        coins.map((coin) => (
          <Coin
            key={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Landing;

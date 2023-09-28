import React, { useEffect, useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";

// API
import { getCoin } from "../Services/baseUrl";

// components
import Loading from "./Loading";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <input placeholder='Search' type='text' />
      <br />
      {coins.length >1 ? (
        coins.map((coin) => <p key={coin.id}>{coin.name}</p>)
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Landing;

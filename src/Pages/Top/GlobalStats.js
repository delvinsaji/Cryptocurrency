import React, { useState, useEffect } from "react";
import "./Top.css";
import axios from "axios";

function GlobalStats() {
  const [global, setGlobal] = useState();
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "X-RapidAPI-Key": "9c3350c11fmsh1c54c47b40db796p1d4fb0jsn69b2bd41ce2b",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGlobal(response.data);
      })
      .catch(function (error) {
        alert(error.data);
      });
  }, []);
  return (
    <div>
      <h2 className="heading">Global Stats</h2>
      <div className="stats">
        <div className="stat">
          <p>Total Coins</p>
          <p className="val">{global ? global.data.totalCoins : ""}</p>
        </div>
        <div className="stat">
          <p>Total Exchanges</p>
          <p className="val">{global ? global.data.totalExchanges : ""}</p>
        </div>
        <div className="stat">
          <p>Total 24h Volume</p>
          <p className="val">{global ? global.data["total24hVolume"] : ""}</p>
        </div>
        <div className="stat">
          <p>Total Market Capital</p>
          <p className="val">{global ? global.data.totalMarketCap : ""}</p>
        </div>
        <div className="stat">
          <p>Total Markets</p>
          <p className="val">{global ? global.data.totalMarkets : ""}</p>
        </div>
        <div className="stat">
          <p>BTC Dominance</p>
          <p className="val">{global ? global.data.btcDominance : ""}%</p>
        </div>
      </div>
      <div className="tables">
        <div className="best">
          <h6>Best Coins</h6>
          <table>
            <tr>
              <th>Icon</th>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
            {global
              ? global.data.bestCoins.map((obj) => (
                  <tr
                    onClick={() => {
                      window.open(obj.coinrankingUrl);
                    }}
                  >
                    <th>
                      <img src={obj.iconUrl} width={20}></img>{" "}
                    </th>
                    <th>{obj.symbol}</th>
                    <th>{obj.name}</th>
                  </tr>
                ))
              : ""}
          </table>
        </div>
        <div className="new">
          <h6>New Coins</h6>
          <table>
            <tr>
              <th>Icon</th>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
            {global
              ? global.data.newestCoins.map((obj) => (
                  <tr
                    onClick={() => {
                      window.open(obj.coinrankingUrl);
                    }}
                  >
                    <th>
                      <img src={obj.iconUrl} width={20}></img>{" "}
                    </th>
                    <th>{obj.symbol}</th>
                    <th>{obj.name}</th>
                  </tr>
                ))
              : ""}
          </table>
        </div>
      </div>
      <p style={{ fontSize: "10", color: "white" }}>
        *Click on the rows to open the coin ranking website of the respective
        coins
      </p>
    </div>
  );
}

export default GlobalStats;

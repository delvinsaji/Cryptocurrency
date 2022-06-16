import React, { useEffect, useState } from "react";
import "./Top.css";
import axios from "axios";

function Top() {
  const [list, setList] = useState([]);
  const [coin, setCoin] = useState();
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "9c3350c11fmsh1c54c47b40db796p1d4fb0jsn69b2bd41ce2b",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const options1 = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "9c3350c11fmsh1c54c47b40db796p1d4fb0jsn69b2bd41ce2b",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setList(response.data.data.coins.slice(0, 10));
      })
      .catch(function (error) {
        alert(error.data);
      });
  }, []);

  return (
    <div>
      <div className="toplist">
        {list
          ? list.map((obj) => (
              <p
                onClick={() => {
                  options1["url"] =
                    "https://coinranking1.p.rapidapi.com/coin/" + obj.uuid;
                  axios
                    .request(options1)
                    .then(function (response) {
                      setCoin(response.data.data.coin);
                      console.log(coin);

                      document.querySelector(".inner").innerHTML =
                        response.data.data.coin.description;
                    })
                    .catch(function (error) {
                      alert(error);
                    });
                }}
              >
                {list ? obj.name : ""}
              </p>
            ))
          : ""}
      </div>
      <div className="coindet">
        <h3>{coin ? coin.name : ""}</h3>
        <div className="inner"></div>
        <div className="stats">
          <div className="stat">
            <p>Price</p>
            <p className="val">{coin ? Number(coin.price.slice(0, 10)) : ""}</p>
          </div>
          <div className="stat">
            <p>Total Exchanges</p>
            <p className="val">{coin ? coin.numberOfExchanges : ""}</p>
          </div>
          <div className="stat">
            <p>Total 24h Volume</p>
            <p className="val">{coin ? coin["24hVolume"] : ""}</p>
          </div>
          <div className="stat">
            <p>Total Market Capital</p>
            <p className="val">{coin ? coin.marketCap : ""}</p>
          </div>
          <div className="stat">
            <p>Total Markets</p>
            <p className="val">{coin ? coin.numberOfMarkets : ""}</p>
          </div>
          <div className="stat">
            <p>BTC Price</p>
            <p className="val">
              {coin ? Number(coin.btcPrice.slice(0, 10)) : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;

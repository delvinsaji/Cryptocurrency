import React, { useEffect, useState } from "react";
import "./Fifty.css";
import axios from "axios";

function Fifty() {
  const [coindata, setcoindata] = useState();

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
      "X-RapidAPI-Key": "1259f3d6ddmshf02c3364c40dc40p142670jsnf8b382216d86",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((Response) => {
        setcoindata(Response.data.data.coins);
      })
      .catch(function (error) {
        alert.error(error);
      });
  }, []);
  console.log(coindata);

  return (
    <div>
      <div className="first">
        <table>
          <tr>
            <th className="tableindex h">SL.No</th>
            <th className="tableicon h">Icon</th>
            <th className="tablesymbol h">Symbol</th>
            <th
              onClick={() => {
                const copy = [...coindata];
                copy.sort((a, b) => {
                  let fa = a.name.toLowerCase();
                  let fb = b.name.toLowerCase();

                  if (fa < fb) {
                    return -1;
                  } else {
                    return 1;
                  }
                  return 0;
                });
                setcoindata(copy);
              }}
              className="tablename h"
            >
              Name
            </th>
            <th
              onClick={() => {
                const copy = [...coindata];
                copy.sort((a, b) => {
                  return a.price - b.price;
                });
                setcoindata(copy);
              }}
              className="tableprice h"
            >
              Price
            </th>
            <th
              onClick={() => {
                const copy = [...coindata];
                copy.sort((a, b) => {
                  return a.marketCap - b.marketCap;
                });
                setcoindata(copy);
              }}
              className="tablemarket h"
            >
              Market Cap
            </th>
            <th
              onClick={() => {
                const copy = [...coindata];
                copy.sort((a, b) => {
                  return a["24hVolume"] - b["24hVolume"];
                });
                setcoindata(copy);
              }}
              className="market24 h"
            >
              24h Volume
            </th>
            <th
              onClick={() => {
                const copy = [...coindata];
                copy.sort((a, b) => {
                  return a.change - b.change;
                });
                setcoindata(copy);
              }}
              className="tablechange h"
            >
              Change
            </th>
          </tr>
          {coindata
            ? coindata.map((obj, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <th>
                    <img src={obj.iconUrl} width="20" />
                  </th>
                  <th>{obj.symbol}</th>
                  <th>{obj.name}</th>
                  <th>{Number(obj.price.slice(0, -8))}</th>
                  <th>{Number(obj.marketCap)}</th>
                  <th>{Number(obj["24hVolume"])}</th>
                  <th>{Number(obj.change)}</th>
                </tr>
              ))
            : ""}
        </table>
        <p style={{ color: "white" }}>
          *Click on the heading of the table to sort the table based on the
          particular header value
        </p>
      </div>
      <div className="global"></div>
    </div>
  );
}

export default Fifty;

// Coinranking API

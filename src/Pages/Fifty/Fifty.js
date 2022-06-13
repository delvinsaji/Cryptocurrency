import React, { useEffect, useState } from "react";
import "./Fifty.css";
import axios from "axios";

function Fifty() {
  const [coindata, setcoindata] = useState();
  const [rowcss, setRowcss] = useState("row");
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
        setcoindata(Response.data.data);
      })
      .catch(function (error) {
        alert.error(error);
      });
  }, []);
  console.log(coindata);

  return (
    <div>
      <table>
        <tr>
          <th className="tableindex h">SL.No</th>
          <th className="tableicon h">Icon</th>
          <th className="tablesymbol h">Symbol</th>
          <th className="tablename h">Name</th>
          <th className="tableprice h">Price</th>
          <th className="tablemarket h">Market Cap</th>
          <th className="market24 h">24h Volume</th>
          <th className="tablechange h">Change</th>
        </tr>
        {coindata
          ? coindata.coins.map((obj, index) => (
              <tr className={rowcss}>
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
    </div>
  );
}

export default Fifty;

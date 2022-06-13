import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState();
  const options = {
    method: "GET",
    url: "https://crypto-news-live3.p.rapidapi.com/news",
    headers: {
      "X-RapidAPI-Key": "9c3350c11fmsh1c54c47b40db796p1d4fb0jsn69b2bd41ce2b",
      "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        alert(error.data);
      });
  }, []);
  return (
    <div>
      {news
        ? news.map((obj) => (
            <div
              className="news"
              onClick={() => {
                window.open(obj.url);
              }}
            >
              <p style={{ fontSize: "25px" }}>{obj.title}</p>
              <p style={{ fontSize: "15px" }}>Source: {obj.source}</p>
            </div>
          ))
        : ""}
    </div>
  );
}

export default News;

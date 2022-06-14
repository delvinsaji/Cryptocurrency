import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState();
  const [page, setPage] = useState();
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
      <div className="news">
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
      <div className="page">
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(0, 10));
          }}
        >
          1
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(10, 20));
          }}
        >
          2
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(20, 30));
          }}
        >
          3
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(30, 40));
          }}
        >
          4
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(40, 50));
          }}
        >
          5
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(50, 60));
          }}
        >
          6
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(60, 70));
          }}
        >
          7
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(70, 80));
          }}
        >
          8
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(80, 90));
          }}
        >
          9
        </p>
        <p
          onClick={() => {
            var copy = [...news];
            setNews(copy.slice(90));
          }}
        >
          10
        </p>
      </div>
    </div>
  );
}

export default News;

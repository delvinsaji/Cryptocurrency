import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState();
  const [page, setPage] = useState();
  const [pgno, setPgno] = useState(1);
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
        setPage(news.slice(0, 10));
      })
      .catch(function (error) {
        alert(error.data);
      });
  }, []);
  return (
    <div>
      <div>
        {page
          ? page.map((obj) => (
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
      <p style={{ textAlign: "center", color: "white" }}>{pgno} of 10</p>
      <div className="page">
        <p
          onClick={() => {
            setPage(news.slice(0, 10));
            setPgno(1);
          }}
        >
          1
        </p>
        <p
          onClick={() => {
            setPage(news.slice(10, 20));
            setPgno(2);
          }}
        >
          2
        </p>
        <p
          onClick={() => {
            setPage(news.slice(20, 30));
            setPgno(3);
          }}
        >
          3
        </p>
        <p
          onClick={() => {
            setPage(news.slice(30, 40));
            setPgno(4);
          }}
        >
          4
        </p>
        <p
          onClick={() => {
            setPage(news.slice(40, 50));
            setPgno(5);
          }}
        >
          5
        </p>
        <p
          onClick={() => {
            setPage(news.slice(50, 60));
            setPgno(6);
          }}
        >
          6
        </p>
        <p
          onClick={() => {
            setPage(news.slice(60, 70));
            setPgno(7);
          }}
        >
          7
        </p>
        <p
          onClick={() => {
            setPage(news.slice(70, 80));
            setPgno(8);
          }}
        >
          8
        </p>
        <p
          onClick={() => {
            setPage(news.slice(80, 90));
            setPgno(9);
          }}
        >
          9
        </p>
        <p
          onClick={() => {
            setPage(news.slice(90));
            setPgno(10);
          }}
        >
          10
        </p>
      </div>
    </div>
  );
}

export default News;

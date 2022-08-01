import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import "./AllNews.css";

export default function AllNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setIsLoading(true);
    let { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-07-27&sortBy=popularity&apiKey=bb346e7a6bd04cf78c6d6c51d46cc5be"
    );
    setNews(data.articles);
    if (data) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  console.log("news api ", news);

  return (
    <>
      {isLoading ? (
        <i className="my-5 fa-solid fa-spinner fa-spin"></i>
      ) : (
        <div className="container">
          <h3 className="text-center my-5">Latest News ...</h3>

          <div className="row">
            {news.map((article, index) => (
              <div className="col-md-3 my-2">
                <Card key={index}>
                  <figure style={{ height: "200px" }}>
                    <Card.Img
                      variant="top"
                      className="w-100 h-100"
                      src={article.urlToImage}
                    />
                  </figure>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      {article.title.substring(0, 35) + " ..."}
                    </Card.Title>
                    <Card.Text>
                      {article.content.substring(0, 150) + "..."}
                    </Card.Text>

                    <Button
                      style={{
                        boxShadow: "none",
                        backgroundColor: "#08A045",
                        border: "#628B48",
                      }}
                      variant="primary"
                    >
                      Show Details ..
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

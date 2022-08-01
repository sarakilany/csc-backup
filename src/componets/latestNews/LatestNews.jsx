import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    let { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-07-27&sortBy=popularity&apiKey=bb346e7a6bd04cf78c6d6c51d46cc5be"
    );
    setNews(data.articles);
  };

  const someNews = news.slice(3, 7);

  return (
    <>
      <h3 className="text-center my-5">Home News ...</h3>
      <div className="container border p-5">
        <div className="row">
          {someNews.map((article, index) => (
            <div key={index} className="col-md-3 my-2">
              <Card>
                <Card.Img
                  variant="top"
                  className="w-100 h-100"
                  src={article.urlToImage}
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {article.title.substring(0, 35) + " ..."}
                  </Card.Title>
                  <Card.Text>
                    {article.content.substring(0, 150) + "..."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Button
          className="d-block m-auto mt-5 px-4 py-2"
          style={{
            boxShadow: "none",
            backgroundColor: "#08A045",
            border: "#628B48",
          }}
          variant="primary"
        >
          See More{" "}
        </Button>
      </div>
    </>
  );
}

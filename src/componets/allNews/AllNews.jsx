import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./AllNews.css";

const Per_Page = 12;
export default function AllNews() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
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

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page ", selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * Per_Page;

  const currentPageData = news.slice(offset, offset + Per_Page);
  const totalPages = Math.ceil(news.length) / Per_Page;

  return (
    <>
      {isLoading ? (
        <i className="my-5 fa-solid fa-spinner fa-spin"></i>
      ) : (
        <div className="container">
          <div className="row">
            <h2 className="text-center my-5">All News..</h2>
            {currentPageData.map((article, index) => (
              <div key={index} className="col-md-3 my-2">
                <Card>
                  <figure style={{ height: "200px" }}>
                    <Card.Img
                      variant="top"
                      className="w-100 h-100"
                      src={article.urlToImage}
                    />
                  </figure>
                  <Card.Body>
                    <Card.Title>
                      <h4>{article.title.substring(0, 35) + " ..."}</h4>
                    </Card.Title>
                    <Card.Text>
                      {article.content.substring(0, 150) + "..."}
                    </Card.Text>

                    <Link
                      className="text-decoration-none"
                      to={`/allNews/${article.title}`}
                      state={{ singleNews: article }}
                    >
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
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}

            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">> "}
              pageCount={totalPages}
              onPageChange={handlePageClick}
              containerClassName={"all_pagination"}
              previousLinkClassName={"pagination_links"}
              nextLinkClassName={"pagination_links"}
              disabledClassName={"pagination_links_disabled"}
              activeClassName={"pagination_links_active"}
            />
          </div>
        </div>
      )}
    </>
  );
}

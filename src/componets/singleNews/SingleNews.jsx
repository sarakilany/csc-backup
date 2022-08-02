import React from "react";
import { useLocation } from "react-router-dom";

export default function SingleNews() {
  const location = useLocation();
  const { singleNews } = location.state;
  console.log(singleNews);

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 m-auto mb-4 border border-success p-2">
            <img
              className="w-100"
              src={singleNews.urlToImage}
              alt="singleNews image"
            />
          </div>
          <div className="col-md-6 offset-md-2">
            <h3
              className="mb-4"
              style={{
                color: "#097969",
              }}
            >
              {singleNews.title}
            </h3>
            <p style={{ color: "#818181" }}>{singleNews.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

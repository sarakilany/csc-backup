import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import myImg from "../../assets/images/18.jpg";

export default function SingleNews() {
  const urlParams = useParams();
  const [allNews, setAllNews] = useState([]);
  const [singleNews, setSingleNews] = useState({});

  // const getAllNews = async () => {
  //   let { data } = await axios.get(
  //     `https://newsapi.org/v2/everything?q=Apple&from=2022-07-27&sortBy=popularity&apiKey=bb346e7a6bd04cf78c6d6c51d46cc5be}`
  //   );
  //   console.log("data ", data);
  //   setSingleNews(data.articles);
  // };

  // const getSingleNews = () => {
  //   const single_news = allNews.find((item) => item.title == urlParams.title);
  //   setSingleNews(single_news);
  // };
  // console.log("singleNews ", singleNews);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto mb-4">
            <img className="w-100" src={myImg} alt="news image" />
          </div>
          <div className="col-md-10 m-auto my-3">
            <h4>title</h4>
          </div>
          <div className="col-md-10 mb-4 m-auto">
            <p style={{ color: "#818181" }}>ddesc</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Slider from "../../componets/home/slider/Slider";
import Section from "../../componets/home/section/Section";
import LatestNews from "../../componets/latestNews/LatestNews";
import LatestRequests from "../../componets/latestRequests/LatestRequests";
const Home = () => {
  return (
    <>
      <Slider />
      <Section />
      <LatestRequests />
      <LatestNews />
    </>
  );
};

export default Home;

import React from "react";
import Header from '../../common/header/Header'
import Slider from "../../componets/home/slider/Slider";
import Section from "../../componets/home/section/Section";
import Request from "../../componets/request/Request";
import LatestNews from '../../componets/latestNews/LatestNews';

const Home = () => {
  return (
    <>

      <Header />
      <Slider />
      <Section />
      <Request />
      <LatestNews/>
    </>
  );
};

export default Home;

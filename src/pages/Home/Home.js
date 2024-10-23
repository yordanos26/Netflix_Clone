import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner1 from "../../Components/Banner/Banner1";
import RowList from "../../Components/Rows/RowList/RowList";




const Home = () => {
  return (
    <>
      <Header />
      <Banner1/>
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;

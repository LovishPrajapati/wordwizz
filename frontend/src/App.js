import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
};

export default App;

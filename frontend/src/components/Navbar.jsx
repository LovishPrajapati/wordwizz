import React from "react";
import "../App.css";
import Tada from "react-reveal/Tada";

const Navbar = () => {
  return (
    <nav
      style={{ height: "10%" }}
      className="navbar navbar-expand-lg navbar-light bg-light shadow rounded"
    >
      <div className="container-fluid">
        <Tada>
          <h1 className="mr-auto ml-auto" href="../index.html">
            WordWizz
          </h1>
        </Tada>
      </div>
    </nav>
  );
};

export default Navbar;

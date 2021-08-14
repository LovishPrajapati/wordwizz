import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import RubberBand from "react-reveal/RubberBand";
const axios = require("axios");

const Search = () => {
  const [value, setValue] = useState("");

  const [result, setResult] = useState({
    word: "",
    definition: "",
    example: "",
    errormsg: "",
    success: undefined,
  });

  const styles = {
    maxWidth: "60%",
    marginTop: "35vh",
    marginBottom: "2vh",
  };

  const boxshadow = {
    maxWidth: "55%",
    maxHeight: "250px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  const getResult = (word) => {
    axios
      .post("http://localhost:5000/", {
        sword: word,
      })
      .then((response) => {
        // console.log(response.data.list[0].example);
        if (response.data.list.length !== 0) {
          setResult({
            word: word,
            definition: response.data.list[0].definition,
            example: response.data.list[0].example,
            success: true,
            errormsg: "",
          });
        } else {
          setResult({
            definition: "",
            success: false,
            errormsg: "Not Found...!!!!",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <RubberBand>
        <div className="input-group mr-auto ml-auto" style={styles}>
          <input
            type="text"
            className="form-control"
            placeholder="Search ......"
            aria-label="search value"
            style={{
              height: "8vh",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <div className="input-group-append">
            <button
              onClick={() => getResult(value)}
              className="input-group-text"
              style={{ height: "8vh" }}
            >
              <i
                className="fa fa-search"
                style={{ width: "6vh", textAlign: "center" }}
              ></i>
            </button>
          </div>
        </div>
      </RubberBand>
      {result.success ? (
        <div className="card text-center mr-auto ml-auto" style={boxshadow}>
          <div className="card-body" style={{ overflowY: "auto" }}>
            <h5 className="card-title">{result.word}</h5>
            <p className="card-text">
              <strong className="text-danger">Definition: </strong>
              {result.definition}
            </p>
            <p className="card-text mt-2">
              <strong className="text-danger">Example: </strong>
              {result.example}
            </p>
          </div>
        </div>
      ) : (
        console.log("error")
      )}
    </div>
  );
};

export default Search;

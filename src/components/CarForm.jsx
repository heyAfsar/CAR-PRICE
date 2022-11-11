import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../css/style.css";

class CarForm extends Component {
  state = {};

  result = () => {
    document.getElementById("result-price").innerHTML =
      "Calculated price : XXXXX";
  };
  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="main-container" style={styles}>
          <label className="title" htmlFor="title">
            Price Calculator
          </label>
          <div className="form-container">
            <form className="form" action="">
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned"
                label=" Your Name"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned"
                label="Model"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned"
                label="Year of Purchase"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned"
                label="On Road Price"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned"
                label="Years Used"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="No. Of Owners"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Kilometers Driven"
              />
              <TextField
                sx={{ textIndent: "10px" }}
                className="input-field"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Car Number"
              />
              <Button
                className="submit-button"
                sx={{
                  margin: "10px auto",
                  display: "block",
                  color: "black",
                  borderColor: "gray",
                  "&:hover": { borderColor: "black" },
                }}
                variant="outlined"
                onClick={this.result}
              >
                Submit
              </Button>
              <label id="result-price" htmlFor="">
                Calculated price :{" "}
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CarForm;

import React, { Component } from "react";
import "./style.css";

class Form2 extends Component {
  render() {
    return (
      <div className="block">
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className="details">
          {this.props.employee.map((value, index) => {
            return (
              <div key={index} className="values">
                <br />
                Name : {value.name} | Department : {value.department} | Rating :{" "}
                {value.rating}
              </div>
            );
          })}
        </div>
        <br />
        <button className="btn-back" onClick={this.props.updateComponent}>
          Go Back
        </button>
      </div>
    );
  }
}

export default Form2;
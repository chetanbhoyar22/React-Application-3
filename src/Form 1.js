import React, { Component } from 'react';
import Form2 from "./Form 2";
import './style.css';

class Form1 extends Component{
  state = {
    name: "",
    department: "",
    rating: "",
    employee: [],
    showComponent: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const tempArray = [...this.state.employee];
    tempArray.push({
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    });
    this.setState({
      employee: tempArray,
      showComponent: true,
      name: "",
      department: "",
      rating: "",
    });
  };

  updateComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div>
        {this.state.showComponent ? (
          <Form2
            employee={this.state.employee}
            updateComponent={this.updateComponent}
          />
        ) : (
          <div className="block">
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <br />
            <form onSubmit={this.handleSubmit}>
              <label for="name">Name : &nbsp;</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <br />
              <br />
              <label for="department">Department : &nbsp;</label>
              <input
                type="text"
                id="department"
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
                required
              />
              <br />
              <br />
              <label for="rating">Rating : &nbsp;</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
                required
              />
              <br />
              <br />
              <br />
              <br />
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form1;
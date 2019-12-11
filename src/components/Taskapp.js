import React, { Component } from "react";
import Tasklist from "./Tasklist";
class Taskapp extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: []
    };
  }
  handelChange = e => {
    this.setState({ task: e.target.value });
  };
  handlesubmit = event => {
    event.preventDefault();
    this.setState({
      task: " ",
      tasks: this.state.tasks.concat([this.state.task])
    });
  };

  render() {
    return (
      <div>
        <h1>My Tasks</h1>
        <Tasklist tasks={this.state.tasks} />
        <form onSubmit={this.handlesubmit}>
          <input
            id='task'
            value={this.state.task}
            onChange={this.handelChange}></input>
          <button>Add task</button>
        </form>
      </div>
    );
  }
}
export default Taskapp;

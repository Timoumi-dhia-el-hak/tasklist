import React from "react";

let Tasklist = props => (
  <ul>
    {props.tasks.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
export default Tasklist;

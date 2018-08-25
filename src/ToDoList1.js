import React, { Component } from 'react';
import './App.css';
import ToDoItem from "./ToDoItem";

const data = [{id: 1, title: "t1", desc: 'abc'}, {id: 2, title: "t2", desc: 'abcd'}, {id: 3, title: "t3"}];

class ToDoList1 extends Component {

  render() {
    //console.log(data, "data");
    return (
      <div className="App">
        {data.map(d => {
          return (
             <ToDoItem cardDetails={d}/>
          )
        })}
      </div>
    );
  }
}

export default ToDoList1;

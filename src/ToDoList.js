import React, { Component } from 'react';

const data = [
  {id: 1, title: 'Laundry Bill', isChecked: true},
  {id: 2, title: 'Electricity Bill', isChecked: false},
  {id: 3, title: 'WiFi Bill', isChecked: false}
];

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
      inputText: ''
    };
  }

  handleAddBtn = () => {
    const {inputText} = this.state;
    const list = this.state.data;
    const listLength = list.length;
    const itemToBeAdded = {id: listLength + 1, title: inputText, isChecked: false};
    list.unshift(itemToBeAdded);
    this.setState({data: list, inputText: ''});
  }

  handleInputChange = (event) => {
    this.setState({inputText: event.target.value});
  }

  render() {

    return (
      <div>

      <div style={{padding: 20}}>
        <h1 style={{textAlign: 'center'}}>ToDo List</h1>
      </div>

      <div style={{padding: 50, textAlign: 'center'}}>
        <input type='text' style={{height: 20, width: 300, padding: 10}} value={this.state.inputText} onChange={this.handleInputChange}/>
        <button style={{height: 50, width: 100, margin: 10}} onClick={this.handleAddBtn}><h3>Add</h3></button>
      </div>

      <div>
        {data.map((d, index) => {
          return <div key={index} style={{backgroundColor: 'lightgrey', margin: 20, padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <div><input type='checkbox' name='item' value='Item' checked={d.isChecked} style={{margin: 20}}/></div>
            <div>{d.title}</div>
            <div><button style={{height: 50, width: 100, margin: 20}}><h3>Delete</h3></button></div>
          </div>
        })}
      </div>

      </div>
    );
  }

}

export default ToDoList;

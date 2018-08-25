import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemTitle from './ItemTitle';
import ItemDesc from './ItemDesc';

class ToDoItem extends Component {

  render() {
    const {cardDetails} = this.props;
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ItemTitle title={cardDetails.title} />
        </header>
        <ItemDesc description={cardDetails.desc} />
      </div>
    );
  }
}

export default ToDoItem;
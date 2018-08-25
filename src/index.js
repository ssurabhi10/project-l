import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList1 from './ToDoList1';
import ToDoList from './ToDoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDoList />, document.getElementById('root'));
registerServiceWorker();

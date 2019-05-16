import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('mountNode');
const component = <h1>Hello World!</h1>;

console.log("Here we go!!!")

ReactDOM.render(component, mountNode);

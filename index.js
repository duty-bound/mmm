import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Title } from './components/title'
import { Experiment } from './components/experiment'

const mountNode = document.getElementById('mountNode');
const component =
  <Fragment>
    <Title title="CSS" />
    <Experiment />
  </Fragment>



console.log("Here we gowith mmm2!!!")

ReactDOM.render(component, mountNode);

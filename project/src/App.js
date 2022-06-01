import React, { Fragment } from 'react';
import AppCSS from './App.module.css';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <Fragment>
      <div className={AppCSS.container}>
        <CardContainer />
      </div>
    </Fragment>
  );
}

export default App;

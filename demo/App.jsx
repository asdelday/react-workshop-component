import React from 'react';
import ReactWorkshopComponent from '../dist/react-workshop-component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactWorkshopComponent title="Workshop Component" />
      </div>
    );
  }
}

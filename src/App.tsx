import * as React from 'react';
import { Routes } from './routes';

class App extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <Routes />
      </div>
    );
  }
}

export default App;

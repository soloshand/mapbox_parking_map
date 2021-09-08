import React from 'react';
import logo from './logo.svg';
import Parking from './components/parking/ParkingMap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter basename="/map-parking">
        <Switch>
          <Route exact path='/' component={Parking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

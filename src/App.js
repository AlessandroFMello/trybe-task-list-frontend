import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={MainPage}
      />
    </Switch>
  );
}

export default App;

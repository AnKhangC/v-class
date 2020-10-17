import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JoinScreen from './screens/joinScreen/JoinScreen';
import SeatingScreen from './screens/seatingScreen/SeatingScreen';
import ZoomScreen from './screens/zoomScreen/ZoomScreen';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={JoinScreen} />
        </Switch>
        <Switch>
          <Route path="/seating" exact component={SeatingScreen} />
        </Switch>
        <Switch>
          <Route path="/zoom" exact component={ZoomScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="*"
          component={() => (
            <h1 style={{ textAlign: 'center', padding: '1em' }}>
              404: Page Not Found
              <span
                role="img"
                aria-label="confounded-face"
                style={{ marginLeft: '5px' }}
              >
                😖
              </span>
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}

export default Routes;

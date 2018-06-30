import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../../Theme/index.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../Layout/Header.jsx';

// PAGES
import Error404 from '../../Pages/Errors/404.jsx';
import Home from '../../Pages/Home/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Error404} />
            </Switch>
          </React.Fragment>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;

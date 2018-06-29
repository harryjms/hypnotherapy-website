import React from "react";
import { ThemeProvider } from "react-jss";
import theme from "../../Theme/index.js";

import Header from "../Layout/Header.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  }
}

export default App;

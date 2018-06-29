import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  appBar: {
    background: theme.colours.blue
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.appBar}>AppBar</div>;
  }
}

export default injectSheet(styles)(Header);

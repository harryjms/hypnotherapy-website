import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import Content from './Content.jsx';

const styles = theme => ({
  appBar: {
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 100,
  },
  logo_img: {
    width: '100%',
  },
  navigation: {
    display: 'flex',
    marginLeft: 20,
  },
  navItem: {
    flex: 1,
    transition: 'all 0.2s ease-in-out',
    padding: '10px 15px',
    borderRadius: theme.borders.radius,
    '&:hover': {
      backgroundColor: theme.colours.primaryLink,
    },
    '&:not(:first-child)': {
      marginLeft: 10,
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Content className={classes.appBar}>
        <div className={classes.logo}>
          <img src={logo} className={classes.logo_img} />
        </div>
        <div className={classes.navigation}>
          <div className={classes.navItem}>
            <Link to="/">Home</Link>
          </div>
          <div className={classes.navItem}>
            <Link to="/about">About</Link>
          </div>
        </div>
      </Content>
    );
  }
}

export default injectSheet(styles)(Header);

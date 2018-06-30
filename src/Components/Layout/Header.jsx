import React from 'react';
import injectSheet from 'react-jss';
import { Link, withRouter } from 'react-router-dom';
import { combineClasses } from '../../Utils/jss';

import IconMenu from '../Icons/menu/index.jsx';

import logo from '../../../assets/images/logo.png';
import Content from './Content.jsx';

const styles = theme => ({
  link: theme.link,
  topBar: {
    padding: 5,
    backgroundColor: theme.colours.accent,
    color: theme.colours.darkPink,
    textAlign: 'right',
  },
  topBarItem: {
    display: 'inline-block',
    marginLeft: 20,
    fontSize: '10pt',
  },
  appBar: {
    padding: '40px 0px',
    display: 'flex',
    alignItems: 'center',
  },
  burgerMenu: {
    display: 'none',
    position: 'absolute',
    top: 40,
    left: 10,
    fill: theme.colours.darkPink,
  },
  logo: {
    width: 100,
  },
  logo_img: {
    width: '100%',
  },
  navigation: {
    display: 'flex',
  },
  navItem: {
    ...theme.link,
    flex: 1,
    fontWeight: 'bold',
    marginLeft: 40,
    '&:hover:after': {
      ...theme.link['&:hover:after'],
      borderWidth: 2,
    },
  },
  '@media (max-width: 760px)': {
    appBar: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    burgerMenu: {
      display: 'block',
    },
    navigation: {
      flexDirection: 'column',
      textAlign: 'center',
      marginTop: 20,
      width: '100%',
      display: 'none',
    },
    navigationOpen: {
      display: 'flex',
    },
    navItem: {
      marginLeft: 0,
      padding: '10px 0',
      width: '100%',
      '-webkit-tap-highlight-color': 'transparent',
      '&:hover': {
        backgroundColor: theme.colours.accent,
        color: 'white',
      },
      '&:after': {
        display: 'none',
      },
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ menuOpen: false });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.topBar}>
          <Content>
            <div className={classes.topBarItem}>T 07909 042010</div>
            <div className={classes.topBarItem}>
              E{' '}
              <a
                href="mailto:info@bayeshypnotherapy.co.uk"
                className={classes.link}
              >
                info@bayeshypnotherapy.co.uk
              </a>
            </div>
          </Content>
        </div>
        <Content className={classes.appBar}>
          <IconMenu
            className={classes.burgerMenu}
            size={24}
            title="Menu"
            onClick={() =>
              this.setState(prevState => ({ menuOpen: !prevState.menuOpen }))
            }
          />
          <div className={classes.logo}>
            <img src={logo} className={classes.logo_img} />
          </div>
          <div
            className={combineClasses(
              classes.navigation,
              this.state.menuOpen && classes.navigationOpen,
            )}
          >
            <Link to="/" className={classes.navItem}>
              Home
            </Link>
            <Link to="/about" className={classes.navItem}>
              About
            </Link>
            <Link to="/information" className={classes.navItem}>
              Information
            </Link>
            <Link to="/faq" className={classes.navItem}>
              FAQ
            </Link>
            <Link to="/treatments" className={classes.navItem}>
              Treatments
            </Link>
            <Link to="/prices" className={classes.navItem}>
              Prices
            </Link>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default withRouter(injectSheet(styles)(Header));

import React from 'react';
import injectSheet from 'react-jss';
import { combineClasses } from '../../Utils/jss.js';

const styles = theme => ({
  content: {
    maxWidth: 960,
    width: '100%',
    margin: '0 auto',
  },
});

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, className, style } = this.props;
    return (
      <div className={combineClasses(classes.content, className)} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(Content);
